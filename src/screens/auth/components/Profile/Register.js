import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Paper} from '../../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import {Email} from './Email';
import {useStyles} from './styles';
import {useDispatch} from 'react-redux';
import {userLoginWithFacebook, userLoginWithGoogle} from '../../../../store/actions';

export const Register = ({login, visible}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const dispatch = useDispatch();
    const [agreeGetEmail, setAgreeGetEmail] = useState(false);
    const [signupWay, setSignupWay] = useState('init');

    const signUpWithGoogle = () => {
        dispatch(userLoginWithGoogle());
    };

    const signUpWithFacebook = () => {
        dispatch(userLoginWithFacebook());
    };

    const signUpWithEmail = () => {
        setSignupWay('email');
    };

    const userAgreement = () => {};

    const privacyPolicy = () => {};

    if (!visible) {
        return null;
    }

    return (
        <View style={styles.root}>
            {signupWay === 'init' ? (
                <View style={styles.root}>
                    <Text style={styles.loginText}>Create an account to continue</Text>
                    <Paper style={styles.loginButton} onPress={signUpWithGoogle}>
                        <View style={styles.iconStyle}>
                            <AntDesign name={'google'} size={20} color={'black'} />
                        </View>
                        <Text style={styles.textStyle}>
                            SIGN UP WITH <Text style={styles.textStrong}>GOOGLE</Text>
                        </Text>
                    </Paper>
                    <Paper style={styles.loginButton} onPress={signUpWithFacebook}>
                        <View style={styles.iconStyle}>
                            <AntDesign name={'facebook-square'} size={20} color={'black'} />
                        </View>
                        <Text style={styles.textStyle}>
                            SIGN UP WITH <Text style={styles.textStrong}>FACEBOOK</Text>
                        </Text>
                    </Paper>
                    <Paper style={styles.loginButton} onPress={signUpWithEmail}>
                        <View style={styles.iconStyle}>
                            <MaterialIcons name={'email'} size={20} color={'black'} />
                        </View>
                        <Text style={styles.textStyle}>
                            SIGN UP WITH <Text style={styles.textStrong}>EMAIL</Text>
                        </Text>
                    </Paper>
                    <Text style={styles.ppStyle}>
                        By continuing, you agree to our{' '}
                        <Text onPress={userAgreement} style={{textDecorationLine: 'underline'}}>
                            User Agreement
                        </Text>{' '}
                        and{' '}
                        <Text onPress={privacyPolicy} style={{textDecorationLine: 'underline'}}>
                            Privacy Policy
                        </Text>
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: theme.hp('3%')}}>
                        <CheckBox
                            value={agreeGetEmail}
                            boxType={'square'}
                            style={{
                                width: 18,
                                height: 10,
                                marginRight: 10,
                                marginVertical: 5,
                            }}
                            tintColors={'#5D5D5D'}
                            lineWidth={1}
                            onValueChange={newValue => setAgreeGetEmail(newValue)}
                        />
                        <Text style={{color: '#5D5D5D', fontFamily: theme.fonts.regular, fontSize: theme.hp('1.8%')}}>
                            I agree to get emails from Habio
                        </Text>
                    </View>
                </View>
            ) : (
                <Email />
            )}
            <Text style={[styles.loginBottom, {marginTop: theme.hp('0%')}]}>
                Already have an account?
                <Text style={[styles.textStrong, {textDecorationLine: 'underline'}]} onPress={login}>
                    LOG IN
                </Text>
            </Text>
        </View>
    );
};
