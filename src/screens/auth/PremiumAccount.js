import React, {useState, Fragment} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TouchableHighlight, Button, Modal} from 'react-native';
import {useTheme} from 'react-native-paper';
import {AppTabLayout, Paper} from '../../components';
import {imgBook, imgEarth, imgMovie, imgNetwork} from '../../commons';
import Overlay from 'react-native-modal-overlay';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Emoji from 'react-native-emoji';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const PremiumAccount = ({navigation}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [modalVisible, setModalVisible] = useState(false);
    const [commitModalVisible, setCommitModalVisible] = useState(false);

    //      onClose = () => this.setState({ modalVisible: false});
    function onClose() {
        setModalVisible(false);
    }
    const tryAgain = () => {
        setModalVisible(false);
    };
    return (
        <AppTabLayout active={'messages'}>
            <Paper shadow style={styles.topBox}>
                <Text style={styles.textStyle1}>What is this chat for?</Text>
                <Text style={styles.textStyle2}>
                    Engage with a community of positive people building their habits just like you and "level up"
                    together!
                </Text>
            </Paper>
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('GeneralDiscussion');
                    }}>
                    <Image source={imgEarth} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>General discussion(say hi!)</Text>
                            <Text style={styles.textStyle4}>Everything.</Text>
                        </View>
                        <View style={styles.chatCount}>
                            <Text style={styles.textStyle5}>16</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('Book');
                    }}>
                    <Image source={imgBook} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>Books</Text>
                            <Text style={styles.textStyle4}>Have a book recommendation?.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('Movie');
                    }}>
                    <Image source={imgMovie} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>Movies</Text>
                            <Text style={styles.textStyle4}>I know you have a movie to share...</Text>
                        </View>
                        <View style={styles.chatCount}>
                            <Text style={styles.textStyle5}>1</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('BusinessNetworking');
                    }}>
                    <Image source={imgNetwork} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>Business networking</Text>
                            <Text style={styles.textStyle4}>Any business people here?</Text>
                        </View>
                        <View style={styles.chatCount}>
                            <Text style={styles.textStyle5}>3</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setCommitModalVisible(true);
                    }}>
                    <Text>Commit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => setModalVisible(true)}>show modal</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={commitModalVisible}
                    style={{backgroundColor: 'red'}}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View
                        style={[
                            styles.commitModalContainer,
                            styles.commitModal,
                            {
                                // Try setting `flexDirection` to `"row"`.
                                flexDirection: 'column',
                            },
                        ]}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity
                                style={styles.closeIcon}
                                onPress={() => {
                                    setCommitModalVisible(!commitModalVisible);
                                }}>
                                <EvilIcons name={'close'} size={26} style={styles.closeIconCommitModal} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 3}}>
                            <Text style={styles.commitModalTitle}>Commit to a better you!</Text>
                            <Text style={styles.commitModalDesc}>
                                Create unlimited habits, unlock all colors, stats, iCloud sync and support our team to
                                keep improving!
                            </Text>
                        </View>
                        <View style={{flex: 3}} />
                        <View style={{flex: 3}}>
                            <Paper style={styles.continueBtn}>
                                <Text style={styles.continueBtnTxt}>Continue</Text>
                            </Paper>
                            <Text style={styles.textAlignCenter}>Cancel anytime,</Text>
                            <Text style={styles.textAlignCenter}>$90.72 billed yearly, automatically renews.</Text>
                            <Text style={[styles.textAlignCenter, styles.textUnderLine]}>Restore purchase.</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={[styles.textUnderLine, {color: 'white'}, {marginHorizontal: theme.hp('2%')}]}>
                                Privacy Policy,
                            </Text>
                            <Text style={[styles.textUnderLine, {color: 'white'}]}>Terms of Service.</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        </AppTabLayout>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            height: '100%',
            width: '100%',
        },
        goback: {
            marginVertical: theme.hp('0.5%'),
            backgroundColor: 'black',
            color: 'red',
        },
        commitModalContainer: {
            flex: 1,
        },
        commitModalTitle: {
            fontWeight: '900',
            fontSize: 30,
            width: '65%',
            alignSelf: 'center',
            marginVertical: theme.hp('2%'),
            textAlign: 'center',
            flexDirection: 'row',
            color: 'white',
        },
        commitModalDesc: {
            fontWeight: '900',
            width: '80%',
            alignSelf: 'center',
            marginVertical: theme.hp('2%'),
            textAlign: 'center',
            flexDirection: 'row',
            color: 'white',
        },
        closeIconCommitModal: {
            color: 'white',
            fontWeight: '900',
        },
        closeIcon: {
            position: 'absolute',
            top: theme.hp('5%'),
            left: theme.hp('2%'),
        },
        continueBtn: {
            backgroundColor: '#96CD00',
            borderWidth: 0,
            height: theme.hp('7%'),
            marginTop: theme.hp('3%'),
        },
        continueBtnTxt: {
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold',
        },
        commitModal: {
            height: '100%',
            backgroundColor: 'black',
            opacity: 0.8,
        },
        modalTitle: {
            fontFamily: theme.fonts.bold,
            fontSize: 28,
            fontWeight: 'bold',
            color: 'black',
        },
        textAlignCenter: {
            textAlign: 'center',
            color: 'white',
        },
        textUnderLine: {
            textDecorationLine: 'underline',
        },
        modalContent: {
            paddingBottom: 15,
            color: 'black',
        },
        tryAgain: {
            marginVertical: theme.hp('0.5%'),
        },
        whiteColor: {
            color: 'white',
        },
        textStrong: {
            fontFamily: theme.fonts.bold,
            fontWeight: '900',
        },
        content: {
            flex: 1,
            paddingHorizontal: theme.hp('2.5%'),
            paddingVertical: theme.hp('5%'),
        },
        topBox: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: theme.hp('2%'),
        },
        textStyle1: {
            fontSize: theme.hp('2.4%'),
        },
        textStyle2: {
            fontSize: theme.hp('1.8%'),
        },
        textStyle3: {
            fontSize: theme.hp('2.4%'),
        },
        textStyle4: {
            fontSize: theme.hp('2%'),
            color: '#989898',
        },
        textStyle5: {
            color: 'white',
            fontSize: theme.hp('1.8%'),
        },
        chatItemContainer: {
            flexDirection: 'row',
            marginVertical: theme.hp('1%'),
            paddingVertical: theme.hp('1%'),
        },
        chatItem: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#707070',
            width: '85%',
            justifyContent: 'space-between',
            height: theme.hp('8%'),
        },
        imageStyle: {
            width: '15%',
            resizeMode: 'contain',
        },
        chatCount: {
            width: theme.hp('3%'),
            height: theme.hp('3%'),
            borderRadius: theme.hp('0.6%'),
            backgroundColor: '#F56200',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
