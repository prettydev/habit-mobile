import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {LoginForm, Paper} from '../../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useStyles} from './styles';
import {useDispatch} from 'react-redux';
import {userLoginWithGoogle, userLoginWithFacebook} from "../../../../store/actions";

export const Login = ({visible, register}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const dispatch = useDispatch();
    const [openLogInForm, setOpenLogInForm] = useState(false);

    const loginWithGoogle = () => {
        dispatch(userLoginWithGoogle());
    };

    const loginWithFacebook = () => {
        dispatch(userLoginWithFacebook());
    };

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
            <Paper style={styles.loginButton} onPress={loginWithFacebook}>
                <View style={styles.iconStyle}>
                    <AntDesign name={'facebook-square'} size={20} color={'black'} />
                </View>
                <Text style={styles.textStyle}>
                    LOG IN WITH <Text style={styles.textStrong}>FACEBOOK</Text>
                </Text>
            </Paper>
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
