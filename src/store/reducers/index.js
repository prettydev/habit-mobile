import {combineReducers} from 'redux';
import {authReducer} from './auth.reducer';
import {navigationRef} from '../../navigator';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    nav: state => {
        return {...state, ...navigationRef.current};
    },
});
