import React, {useEffect, useState} from 'react';
import {View, Alert, TouchableOpacity, ActionSheetIOS, Linking, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {imgAvatar, requestCameraPermission, requestMediaLibraryPermission} from '../../commons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useFirebase, useFirestore} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {ProgressImage} from './ProgressImage';
import {Overlay} from 'react-native-elements';

export const Avatar = ({size = 80, noEdit, avatar, style, disabled}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const firebase = useFirebase();
    const firestore = useFirestore();
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const authUser = useSelector(state => state.firebase.profile);
    const [source, setSource] = useState(authUser.photoURL ? {uri: authUser.photoURL} : imgAvatar);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (authUser.photoURL) {
            setSource({uri: authUser.photoURL});
        } else {
            setSource(imgAvatar);
        }
    }, [authUser.photoURL]);

    const launchActionSheet = () => {
        if (theme.isIos) {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['Cancel', 'Take Photo', 'Upload Photo'],
                    // destructiveButtonIndex: 2,
                    cancelButtonIndex: 0,
                    userInterfaceStyle: 'light',
                },
                async buttonIndex => {
                    if (buttonIndex === 0) {
                        // cancel action
                    } else if (buttonIndex === 1) {
                        await imagePickFromCamera();
                    } else if (buttonIndex === 2) {
                        await imagePickFromMediaLibrary();
                    }
                },
            );
        } else {
            setVisible(true);
        }
    };

    const imagePickFromCamera = async () => {
        const cameraPermission = await requestCameraPermission();
        const photoLibraryPermission = await requestMediaLibraryPermission();
        if (cameraPermission && photoLibraryPermission) {
            launchCamera({}, async res => {
                if (!res.didCancel) {
                    setVisible(false);
                    await _imageUploadToFirebase(res.uri);
                }
            });
        } else {
            Alert.alert('Permission Request', 'You must enable camera and photo Library usage permission.', [
                {
                    text: 'Cancel',
                    type: 'cancel',
                },
                {
                    text: 'Setting',
                    onPress: () => {
                        Linking.openSettings();
                    },
                },
            ]);
        }
    };

    const imagePickFromMediaLibrary = async () => {
        let granted = await requestMediaLibraryPermission();
        if (granted) {
            launchImageLibrary({}, async res => {
                if (!res.didCancel) {
                    setVisible(false);
                    await _imageUploadToFirebase(res.uri);
                }
            });
        } else {
            Alert.alert('Permission Request', 'You must enable media library usage permission.', [
                {
                    text: 'Cancel',
                    type: 'cancel',
                },
                {
                    text: 'Setting',
                    onPress: () => {
                        Linking.openSettings();
                    },
                },
            ]);
        }
    };

    const _imageUploadToFirebase = async uri => {
        setLoading(true);
        const response = await fetch(uri);
        const blob = await response.blob();
        const fileName = authUser.uid + '.' + uri.split('.').pop();
        const ref = firebase.storage().ref(`avatars/${fileName}`);
        ref.put(blob).on(
            'state_changed',
            snapshot => {
                let progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            error => {
                console.log('error', error);
            },
            () => {
                firebase
                    .storage()
                    .ref('avatars/')
                    .child(fileName)
                    .getDownloadURL()
                    .then(async url => {
                        setSource({uri: url});
                        firestore
                            .collection('users')
                            .doc(authUser.uid)
                            .update({avatar: url})
                            .then(() => {
                                setLoading(false);
                                setProgress(0);
                            });
                    });
            },
        );
    };

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const containerStyle = {
        width: size,
        height: size,
        borderRadius: size / 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'white',
        ...style,
    };

    const uploadButtonStyle = {
        width: 22,
        height: 22,
        borderRadius: 14,
        position: 'absolute',
        bottom: -8,
        right: -8,
        zIndex: 2,
        backgroundColor: '#aeaeae',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const avatarStyle = {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'relative',
        borderWidth: 0.5,
        borderColor: '#8080807f',
        zIndex: 1,
        overflow: 'hidden',
        opacity: disabled ? 0.4 : 1,
    };

    return (
        <View style={containerStyle}>
            <Overlay visible={visible} onBackdropPress={toggleOverlay}>
                <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle} onPress={imagePickFromCamera}>
                    <Text style={styles.textStyle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle} onPress={imagePickFromMediaLibrary}>
                    <Text style={styles.textStyle}>Upload Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle} onPress={toggleOverlay}>
                    <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
            </Overlay>
            <Spinner visible={loading} textContent={`Uploading (${progress}%)`} textStyle={{color: 'white'}} />
            {!noEdit && (
                <TouchableOpacity style={uploadButtonStyle} onPress={launchActionSheet}>
                    <AntDesign name={'camera'} size={14} color={'white'} />
                </TouchableOpacity>
            )}
            <ProgressImage imageStyle={avatarStyle} source={avatar || source} />
        </View>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            width: '100%',
        },
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: '#fff',
            alignItems: 'center',
        },
        titleText: {
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 20,
        },
        textStyle: {
            padding: 10,
            color: 'black',
            textAlign: 'center',
        },
        buttonStyle: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 5,
            marginVertical: 10,
            width: 250,
        },
        imageStyle: {
            width: 200,
            height: 200,
            margin: 5,
        },
    });
