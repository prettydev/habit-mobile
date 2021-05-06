import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
        },
        logInScreen: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        loginButton: {
            marginVertical: theme.hp('1%'),
        },
        textStyle: {
            fontFamily: theme.fonts.regular,
        },
        textStrong: {
            fontFamily: theme.fonts.bold,
            fontWeight: 'bold',
        },
        iconStyle: {
            position: 'absolute',
            left: theme.wp('5%'),
        },
        loginText: {
            fontSize: theme.hp('3%'),
            fontWeight: 'bold',
            fontFamily: theme.fonts.bold,
            marginTop: theme.hp('12%'),
            marginBottom: theme.hp('5%'),
            textAlign: 'center',
        },
        loginBottom: {
            fontFamily: theme.fonts.regular,
            textAlign: 'center',
            position: 'absolute',
            bottom: '10%',
            width: '100%',
        },
        ppStyle: {
            width: '70%',
            textAlign: 'center',
            marginTop: theme.hp('2%'),
            fontSize: theme.hp('1.8%'),
            color: '#5D5D5D',
        },
        flexRowCenter: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.hp('3%'),
        },
        textName: {
            fontSize: theme.hp('2.5%'),
            marginLeft: theme.wp('5%'),
        },
        textAboutMe: {
            fontSize: theme.hp('2.6%'),
            fontWeight: 'bold',
            paddingLeft: theme.wp('2%'),
            marginBottom: theme.hp('2%'),
        },
        content: {
            flex: 1,
            width: '100%',
            paddingHorizontal: theme.wp('5%'),
            marginTop: theme.hp('3%'),
        },
        textInput: {
            backgroundColor: '#F1F1F1',
            borderWidth: 0,
            paddingLeft: theme.wp('3%'),
            padding: theme.wp('3%'),
            borderRadius: theme.wp('2%'),
        },
        aboutMe: {
            fontSize: theme.hp('2.2%'),
        },
    });
