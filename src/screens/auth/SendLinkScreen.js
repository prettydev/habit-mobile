import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const SendLinkScreen = ({navigation, route}) => {
    const email = route.params?.email;

    const theme = useTheme();
    const styles = useStyles(theme);
    const [isSentEmail, setSentEmail] = useState(false);

    const goBack = () => {
        navigation.goBack();
    };

    const backToHome = () => {
        navigation.navigate('Home');
    };

    const sendLink = () => {
        setSentEmail(true);
    };

    return (
        <SafeAreaView style={styles.root}>
            <TouchableOpacity style={styles.backButtonStyle} onPress={goBack}>
                <Ionicons name={'chevron-back-outline'} size={theme.hp('4.5%')} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Sign in</Text>
            <View style={styles.content}>
                <MaterialIcons style={styles.iconStyle} name={'email'} size={theme.hp('5.5%')} color={'white'} />
                <Text style={styles.textStyle1}>{isSentEmail ? 'CHECK YOUR EMAIL' : 'ONE TAP LEFT'}</Text>
                <Text style={styles.textStyle2}>
                    {!isSentEmail
                        ? 'We will email you the link that will sign you in'
                        : 'We have emailed you all the info and the link to log in to:'}
                </Text>
                {isSentEmail && <Text style={styles.textStyle3}>{email}</Text>}
            </View>
            <Button
                style={styles.buttonStyle}
                title={isSentEmail ? 'BACK TO HOME SCREEN' : 'SEND LINK'}
                onPress={isSentEmail ? backToHome : sendLink}
            />
        </SafeAreaView>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
        },
        content: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonStyle: {
            width: '86%',
            marginBottom: theme.hp('5%'),
        },
        backButtonStyle: {
            position: 'absolute',
            left: theme.wp('3%'),
            top: theme.hp('1%'),
        },
        titleStyle: {
            fontSize: theme.hp('3%'),
            textAlign: 'center',
            marginTop: theme.hp('1%'),
            width: '60%',
            alignSelf: 'center',
        },
        iconStyle: {
            width: theme.hp('11%'),
            height: theme.hp('11%'),
            backgroundColor: 'black',
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: theme.hp('5.5%'),
            marginBottom: theme.hp('3%'),
        },
        textStyle1: {
            fontSize: theme.hp('4.2%'),
        },
        textStyle2: {
            fontSize: theme.hp('2%'),
            width: '60%',
            textAlign: 'center',
            marginTop: theme.hp('2%'),
        },
        textStyle3: {
            fontSize: theme.hp('2.2%'),
        },
    });
