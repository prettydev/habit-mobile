import axios from 'axios';
import {Alert} from 'react-native';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

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

export const google_login = async _ => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
        return {code: 'success', data: userInfo};
    } catch (error) {
        let message = '';
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            message = 'user cancelled the login flow';
        } else if (error.code === statusCodes.IN_PROGRESS) {
            message = 'operation (e.g. sign in) is in progress already';
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            message = 'play services not available or outdated';
        } else {
            message = 'some other error happened';
        }
        console.log('google error:', message);
        return {code: 'error', message};
    }
};

export const loginWithApple = (action, state) => {};

export const loginWithFacebook = (action, state) => {
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
};
