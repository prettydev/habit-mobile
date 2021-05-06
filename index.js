/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {decode, encode} from 'base-64';
navigator.geolocation = require('@react-native-community/geolocation');
if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

AppRegistry.registerComponent(appName, () => App);
