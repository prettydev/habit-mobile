import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/theme';
import AppNavigator from './src/navigator';
import FlashMessage from 'react-native-flash-message';
import {StateProvider} from './src/store';

const App: () => React$Node = () => {
    return (
        <StateProvider>
            <PaperProvider theme={theme}>
                {Platform.OS === 'ios' && <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />}
                <AppNavigator />
                <FlashMessage position="top" />
            </PaperProvider>
        </StateProvider>
    );
};

export default App;
