import {combineEpics} from 'redux-observable';
import {login, updateProfile, register, loginWithApple, loginWithFacebook, loginWithGoogle} from './auth.epics';

export default combineEpics(login, updateProfile, register, loginWithGoogle, loginWithFacebook, loginWithApple);
