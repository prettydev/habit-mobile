import React from 'react';
import {useTheme} from 'react-native-paper';
import {useStyles} from './styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {HomeScreen, MessagesScreen, AuthScreen} from '../../screens';
import {TabBar} from './TabBar';

const Tab = createMaterialTopTabNavigator();

export const AppTabNavigator = () => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <Tab.Navigator
            initialRouteName={'Habit'}
            tabBar={props => <TabBar {...props} />}
            screenOptions={{
                backgroundColor: '#6e012a',
            }}
        >
            <Tab.Screen name="Habit" component={HomeScreen} />
            <Tab.Screen name="Message" component={MessagesScreen} />
            <Tab.Screen name="Auth" component={AuthScreen} />
        </Tab.Navigator>
    );
};
