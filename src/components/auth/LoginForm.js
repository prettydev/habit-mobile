import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Text, Keyboard} from 'react-native';
import {Input, Button, ForgotPasswordButton, RegisterAsMemberButton} from '../elements';

import {showMessage} from 'react-native-flash-message';
import {useTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {login} from '../../api';
import {appContext} from '../../store';
import {userLogin, userLoginSuccess} from '../../actions';

export const LoginForm = () => {
    const {dispatch} = useContext(appContext);

    const theme = useTheme();
    const styles = useStyles(theme);
    const [rememberMe, toggleRememberMe] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        (async () => {
            const _email = await AsyncStorage.getItem('email');
            const _password = await AsyncStorage.getItem('password');
            const _rememberMe = await AsyncStorage.getItem('rememberMe');
            if (_email && _password && _rememberMe) {
                setEmail(_email);
                setPassword(_password);
                toggleRememberMe(true);
            }
        })();
    }, []);

    const _forgotPassword = () => {
        // navigation.navigate('ForgotPassword');
    };

    const _register = () => {
        // navigation.navigate('Register');
    };

    const _signIn = async () => {
        if (email && password) {
            Keyboard.dismiss();
            if (rememberMe) {
                AsyncStorage.setItem('email', email);
                AsyncStorage.setItem('password', password);
                AsyncStorage.setItem('rememberMe', 'remember');
            } else {
                AsyncStorage.removeItem('email');
                AsyncStorage.removeItem('password');
                AsyncStorage.removeItem('rememberMe');
            }

            dispatch(userLogin());
            const login_res = await login({
                email,
                password,
            });
            const {code, message, data} = login_res;
            if (code === 'success') {
                dispatch(userLoginSuccess(data));
            } else if (code === 'error') {
                alert(message);
                dispatch(userLoginError());
            }
        } else {
            showMessage({
                icon: 'auto',
                message: 'Wrong',
                description: 'You must enter your user name and password to proceed!',
                type: 'danger',
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <Text style={styles.titleStyle}>Login with your Email</Text>
                <Input
                    name="email"
                    style={styles.inputStyle}
                    value={email}
                    onChangeText={(name, value) => setEmail(value)}
                    placeholder="Email"
                />
                <Input
                    placeholder="Password"
                    name="password"
                    value={password}
                    style={styles.inputStyle}
                    onChangeText={(name, value) => setPassword(value)}
                    secureTextEntry={true}
                />
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: theme.hp('2%')}}>
                    <CheckBox
                        value={rememberMe}
                        boxType={'square'}
                        style={{
                            width: 18,
                            height: 10,
                            marginRight: 10,
                            marginVertical: 5,
                        }}
                        tintColors={'#5D5D5D'}
                        lineWidth={1}
                        onValueChange={newValue => toggleRememberMe(newValue)}
                    />
                    <Text style={{color: theme.colors.default, fontFamily: theme.fonts.regular, fontSize: 16}}>
                        Remember me
                    </Text>
                </View>
                <Button title="LOG IN" onPress={_signIn} />
            </View>

            <ForgotPasswordButton onPress={_forgotPassword} />

            <View style={styles.registerMember}>
                <RegisterAsMemberButton onPress={_register()} />
            </View>
        </View>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        container: {
            width: '100%',
            position: 'relative',
            marginTop: theme.hp('5%'),
        },
        formWrapper: {
            zIndex: 1,
            width: '100%',
            backgroundColor: 'white',
            paddingHorizontal: theme.hp('3%'),
            paddingBottom: theme.hp('3%'),
            paddingTop: theme.hp('4%'),
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
        },
        titleStyle: {
            fontSize: 24,
            fontFamily: theme.fonts.regular,
            marginVertical: theme.hp('1%'),
            alignSelf: 'center',
        },
        userIcon: {
            zIndex: 2,
            position: 'absolute',
            width: theme.hp('10%'),
            height: theme.hp('10%'),
            top: -theme.hp('5%'),
            alignSelf: 'center',
        },
        registerMember: {
            marginVertical: theme.hp('2%'),
        },
        viewDealsAndOffersButton: {
            marginBottom: theme.hp('10%'),
        },
        inputStyle: {
            textAlign: 'center',
            marginVertical: theme.hp('2%'),
        },
    });
