import {PermissionsAndroid, Platform} from 'react-native';
import {PERMISSIONS, check, request, RESULTS} from 'react-native-permissions';

export const requestMediaLibraryPermission = async () => {
    if (Platform.OS === 'ios') {
        const res = await check(PERMISSIONS.IOS.MEDIA_LIBRARY);
        if (res === RESULTS.GRANTED) {
            console.log('Media Library permission granted');
            return true;
        } else if (res === RESULTS.DENIED) {
            const res2 = await request(PERMISSIONS.IOS.MEDIA_LIBRARY);
            if (res2 === RESULTS.GRANTED) {
                console.log('Media Library permission granted');
                return true;
            } else {
                console.log('Media Library permission denied');
                return false;
            }
        }
    } else {
        const res = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        if (res === RESULTS.GRANTED) {
            console.log('Media Library permission granted');
            return true;
        } else if (res === RESULTS.DENIED) {
            const res2 = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
            if (res2 === RESULTS.GRANTED) {
                console.log('Media Library permission granted');
                return true;
            } else {
                console.log('Media Library permission denied');
                return false;
            }
        }
    }
};

export const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
        const res = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (res === RESULTS.GRANTED) {
            console.log('Location permission granted');
            return true;
        } else if (res === RESULTS.DENIED) {
            const res2 = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            if (res2 === RESULTS.GRANTED) {
                console.log('Location permission granted');
                return true;
            } else {
                console.log('Location permission denied');
                return false;
            }
        }
    } else {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location Permission',
                message: 'This App needs access to your location ' + 'so we can know where you are.',
            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location permission granted');
                return true;
            } else {
                console.log('Location permission denied');
                return false;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    }
};

export const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
        const res = await check(PERMISSIONS.IOS.CAMERA);
        if (res === RESULTS.GRANTED) {
            console.log('You can use the camera');
            return true;
        } else if (res === RESULTS.DENIED) {
            const res2 = await request(PERMISSIONS.IOS.CAMERA);
            if (res2 === RESULTS.GRANTED) {
                console.log('You can use the camera');
                return true;
            } else {
                console.log('Camera permission denied');
                return false;
            }
        }
    } else {
        const res = await check(PERMISSIONS.ANDROID.CAMERA);
        if (res === RESULTS.GRANTED) {
            console.log('You can use the camera');
            return true;
        } else {
            const granted = await request(PERMISSIONS.ANDROID.CAMERA, {
                title: 'Cool Photo App Camera Permission',
                message: 'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            });
            if (granted === RESULTS.GRANTED) {
                console.log('You can use the camera');
                return true;
            } else {
                console.log('Camera permission denied');
                return false;
            }
        }
    }
};

export const requestPhotoLibraryPermission = async () => {
    const res = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (res === RESULTS.GRANTED) {
        console.log('You can use the camera');
        return true;
    } else if (res === RESULTS.DENIED) {
        const res2 = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        if (res2 === RESULTS.GRANTED) {
            console.log('You can use the camera');
            return true;
        } else {
            console.log('Camera permission denied');
            return false;
        }
    }
};
