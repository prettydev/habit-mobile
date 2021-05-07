import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {appContext} from '../../../store';
import {Input} from '../../elements';

export const AboutMeModal = ({visible, onClose}) => {
    const {
        state: {user},
        dispatch,
    } = useContext(appContext);
    const theme = useTheme();
    const styles = useStyles(theme);
    const [aboutMe, setAboutMe] = useState(user.aboutMe || '');

    const updateAboutMe = () => {
        // firestore
        //     .collection('users')
        //     .doc(user.uid)
        //     .update({aboutMe})
        //     .then(() => {
        //         onClose();
        //     });
    };

    if (!visible) {
        return null;
    }

    return (
        <Modal style={styles.root}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.text1}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.textTitle}>About me</Text>
                <TouchableOpacity onPress={updateAboutMe}>
                    <Text style={styles.text1}>Save</Text>
                </TouchableOpacity>
            </View>
            <Input
                style={styles.textInput}
                placeholder={'Type...'}
                value={aboutMe}
                multiline
                onChangeText={(name, value) => {
                    setAboutMe(value);
                }}
            />
            <View style={{alignItems: 'flex-end', marginRight: theme.wp('3%')}}>
                <Text>{aboutMe.length}/300</Text>
            </View>
        </Modal>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            width: '100%',
            height: theme.hp('100%'),
        },
        header: {
            paddingHorizontal: theme.wp('3%'),
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: theme.hp('3%'),
        },
        text1: {
            fontSize: theme.hp('2.2%'),
        },
        textTitle: {
            fontSize: theme.hp('2.2%'),
            fontWeight: 'bold',
        },
        textInput: {
            borderWidth: 0,
            backgroundColor: '#F1F1F1',
            marginHorizontal: theme.wp('3%'),
            width: '94%',
            paddingHorizontal: theme.wp('3%'),
            height: 'auto',
        },
    });
