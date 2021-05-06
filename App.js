import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/store';
import theme from './src/theme';
import AppNavigator from './src/navigator';
import FlashMessage from 'react-native-flash-message';

// firebase
import firebase from './src/firebase';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';

//
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance: createFirestoreInstance,
};

const App: () => React$Node = () => {
    return (
        <PaperProvider theme={theme}>
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
                    <AppNavigator />
                    <FlashMessage position="top" />
                </ReactReduxFirebaseProvider>
            </Provider>
        </PaperProvider>
    );
};

export default App;
