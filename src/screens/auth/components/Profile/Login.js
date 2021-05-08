import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {LoginForm, Paper} from '../../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useStyles} from './styles';
import {google_login} from '../../../../api';
import {userLoginError, userLoginSuccess} from '../../../../actions';
import {appContext} from '../../../../store';

export const Login = ({visible, register}) => {
    const {dispatch} = useContext(appContext);

    const theme = useTheme();
    const styles = useStyles(theme);
    const [openLogInForm, setOpenLogInForm] = useState(false);

    const loginWithGoogle = async _ => {
        const {code, message, data} = await google_login();

        if (code === 'success') {
            const google_user = {
                id: -1,
                displayName: data.user.name,
                email: data.user.email,
                avatar: data.user.photo,
                aboutme: null,
                uniqueString: '',
                isValid: true,
                membership: 0,
                createdAt: null,
                updatedAt: null,
                token: data.idToken,
            };
            dispatch(userLoginSuccess(google_user));
        } else if (code === 'error') {
            alert(message);
            dispatch(userLoginError());
        }
    };

    const loginWithFacebook = () => {};

    const loginWithEmail = () => {
        setOpenLogInForm(true);
    };

    if (!visible) {
        return null;
    }

    if (openLogInForm) {
        return <LoginForm />;
    }

    return (
        <View style={styles.root}>
            <Text style={styles.loginText}>Log in to your account</Text>
            <Paper style={styles.loginButton} onPress={loginWithGoogle}>
                <View style={styles.iconStyle}>
                    <AntDesign name={'google'} size={20} color={'black'} />
                </View>
                <Text style={styles.textStyle}>
                    LOG IN WITH <Text style={styles.textStrong}>GOOGLE</Text>
                </Text>
            </Paper>
            {/* <Paper style={styles.loginButton} onPress={loginWithFacebook}>
                <View style={styles.iconStyle}>
                    <AntDesign name={'facebook-square'} size={20} color={'black'} />
                </View>
                <Text style={styles.textStyle}>
                    LOG IN WITH <Text style={styles.textStrong}>FACEBOOK</Text>
                </Text>
            </Paper> */}
            <Paper style={styles.loginButton} onPress={loginWithEmail}>
                <View style={styles.iconStyle}>
                    <MaterialIcons name={'email'} size={20} color={'black'} />
                </View>
                <Text style={styles.textStyle}>
                    LOG IN WITH <Text style={styles.textStrong}>EMAIL</Text>
                </Text>
            </Paper>
            <Text style={[styles.textStyle, {marginTop: theme.hp('6%')}]}>
                Don't have an account?{' '}
                <Text style={[styles.textStrong, {textDecorationLine: 'underline'}]} onPress={register}>
                    SIGN UP
                </Text>
            </Text>
        </View>
    );
};
