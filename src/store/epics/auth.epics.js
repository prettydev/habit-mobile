import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';
import * as Actions from '../actions';

import {Alert} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

GoogleSignin.configure({
    offlineAccess: false,
    webClientId: '306481469472-htg47hjnmkce17rgvdihsjl48cd5mvfh.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
});

export const login = action => {
    return action.ofType(Actions.USER_LOGIN).mergeMap(({payload}) => {
        return new Observable(observer => {
            // Login
        });
    });
};

export const register = action => {
    return action.ofType(Actions.USER_REGISTER).mergeMap(({payload}) => {
        return new Observable(observer => {
            // Login
        });
    });
};

export const updateProfile = (action, state) => {
    return action.ofType(Actions.USER_UPDATE_PROFILE).mergeMap(({payload}) => {
        return new Observable(observer => {
            // Profile Update
        });
    });
};

export const loginWithGoogle = (action, state, {getFirebase, getFirestore}) => {
    return action.ofType(Actions.USER_LOGIN_WITH_GOOGLE).mergeMap(({payload}) => {
        return new Observable(async observer => {
            try {
                await GoogleSignin.hasPlayServices();
                const googleUser = await GoogleSignin.signIn();
                const firebase = getFirebase();
                const firestore = getFirestore();
                let credential = firebase.auth.GoogleAuthProvider.credential(googleUser.idToken);
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(({user}) => {
                        const newUser = {
                            email: user.email,
                            name: user.displayName,
                            phoneNumber: user.phoneNumber,
                            photoURL: user.photoURL,
                            createdAt: new Date().getTime(),
                            authType: 'google',
                            uid: user.uid,
                        };
                        firestore
                            .collection('users')
                            .doc(user.uid)
                            .set(newUser, {merge: true})
                            .then(() => {
                                observer.next({type: Actions.USER_LOGIN_SUCCESS, payload: newUser});
                            });
                    });
            } catch (error) {
                console.log(error);
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // when user cancels sign in process,
                    Alert.alert('Process Cancelled');
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    // when in progress already
                    Alert.alert('Process in progress');
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    // when play services not available
                    Alert.alert('Play services are not available');
                } else {
                    // some other error
                    Alert.alert('Something else went wrong... ', error.toString());
                }
            }
        });
    });
};

export const loginWithApple = (action, state) => {
    return action.ofType(Actions.USER_LOGIN_WITH_APPLE).mergeMap(({payload}) => {
        return new Observable(observer => {
            // Login with apple
        });
    });
};

export const loginWithFacebook = (action, state, {getFirebase, getFirestore}) => {
    return action.ofType(Actions.USER_LOGIN_WITH_FACEBOOK).mergeMap(({payload}) => {
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
                        } else {
                            const firebase = getFirebase();
                            const firestore = getFirestore();
                            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                            firebase
                                .auth()
                                .signInWithCredential(facebookCredential)
                                .then(({user}) => {
                                    const newUser = {
                                        email: user.email,
                                        name: user.displayName,
                                        phoneNumber: user.phoneNumber,
                                        photoURL: user.photoURL,
                                        createdAt: new Date().getTime(),
                                        authType: 'facebook',
                                        uid: user.uid,
                                    };
                                    firestore
                                        .collection('users')
                                        .doc(user.uid)
                                        .set(newUser, {merge: true})
                                        .then(() => {
                                            observer.next({type: Actions.USER_LOGIN_SUCCESS, payload: newUser});
                                        });
                                });
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
