import axios from 'axios';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';

import {Alert} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_WITH_APPLE,
    USER_LOGIN_WITH_FACEBOOK,
    USER_LOGIN_WITH_GOOGLE,
    USER_REGISTER,
    USER_UPDATE_PROFILE,
} from './actions';

GoogleSignin.configure({
    offlineAccess: false,
    webClientId: '306481469472-htg47hjnmkce17rgvdihsjl48cd5mvfh.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
});

const baseApiUrl = 'http://108.61.172.48/';

export const register = async request => {
    const {data} = await axios.post(baseApiUrl + 'users/register', request);
    return data;
};

export const login = async request => {
    const {data} = await axios.post(baseApiUrl + 'users/authenticate', request);
    return data;
};

export const updateProfile = (action, state) => {
    return action.ofType(USER_UPDATE_PROFILE).mergeMap(({payload}) => {
        return new Observable(observer => {
            // Profile Update
        });
    });
};

export const loginWithGoogle = (action, state) => {
    return action.ofType(USER_LOGIN_WITH_GOOGLE).mergeMap(({payload}) => {
        return new Observable(async observer => {});
    });
};

export const loginWithApple = (action, state) => {
    return action.ofType(USER_LOGIN_WITH_APPLE).mergeMap(({payload}) => {
        return new Observable(observer => {
            // Login with apple
        });
    });
};

export const loginWithFacebook = (action, state) => {
    return action.ofType(USER_LOGIN_WITH_FACEBOOK).mergeMap(({payload}) => {
        return new Observable(observer => {
            LoginManager.logInWithPermissions(['public_profile', 'email']).then(
                async function (result) {
                    if (result.isCancelled) {
                        console.log('Login cancelled');
                        Alert.alert('Login cancelled');
                    } else {
                        const data = await AccessToken.getCurrentAccessToken();
                        if (!data) {
                            Alert.alert('Something went wrong obtaining access token');
                        }
                    }
                },
                function (error) {
                    console.log('Login fail with error: ' + error);
                    Alert.alert('Login fail with error');
                },
            );
        });
    });
};
