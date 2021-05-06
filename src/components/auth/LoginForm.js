import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Keyboard} from 'react-native';
import {Input, Button, ForgotPasswordButton, RegisterAsMemberButton} from '../elements';
import {useDispatch} from 'react-redux';
import {USER_LOGIN} from '../../store/actions';
import {showMessage} from 'react-native-flash-message';
import {useTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';

export const LoginForm = () => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const [rememberMe, toggleRememberMe] = useState(false);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        (async () => {
            const email = await AsyncStorage.getItem('username');
            const password = await AsyncStorage.getItem('password');
            const _rememberMe = await AsyncStorage.getItem('rememberMe');
            if (email && password && _rememberMe) {
                setState({
                    email: email,
                    password: password,
                });
                toggleRememberMe(true);
            }
        })();
    }, []);

    const _login = (name, value) => {
        // setState({...state, [name]: value});
    };

    const _forgotPassword = () => {
        // navigation.navigate('ForgotPassword');
    };

    const _register = () => {
        // navigation.navigate('Register');
    };

    const _signIn = async () => {
        if (state.username && state.password) {
            Keyboard.dismiss();
            if (rememberMe) {
                AsyncStorage.setItem('email', state.email);
                AsyncStorage.setItem('password', state.password);
                AsyncStorage.setItem('rememberMe', 'remember');
            } else {
                AsyncStorage.removeItem('username');
                AsyncStorage.removeItem('password');
                AsyncStorage.removeItem('rememberMe');
            }
            await dispatch({
                type: USER_LOGIN,
                payload: state,
            });
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
                    style={{marginTop: theme.hp('2%'), textAlign: 'center'}}
                    value={state.username}
                    onChangeText={_login}
                    placeholder="Email"
                />
                <Input
                    placeholder="Password"
                    name="password"
                    value={state.password}
                    style={{marginTop: theme.hp('2%'), textAlign: 'center'}}
                    onChangeText={_login}
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
    });
