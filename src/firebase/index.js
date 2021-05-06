import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/messaging';
import '@react-native-firebase/auth';
import '@react-native-firebase/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyBdhxOFaznNROVngyWxsgWJ74KWNkodiTo',
    authDomain: 'habio-83680.firebaseapp.com',
    databaseURL: 'https://habio-83680-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'habio-83680',
    storageBucket: 'habio-83680.appspot.com',
    messagingSenderId: '306481469472',
    appId: '1:306481469472:web:96773536f4bc9e1dcac445',
    measurementId: 'G-F4GZ1MW6LV',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore();
}

export default firebase;
