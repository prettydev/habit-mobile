import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
    SendLinkScreen,
    MessagesScreen,
    BusinessNetworkingScreen,
    GeneralDiscussionScreen,
    MovieScreen,
    BookScreen,
} from '../screens';
import SplashScreen from 'react-native-splash-screen';
import {GeneralDiscussionHeader} from './headers';
import {AppTabNavigator} from './tabs';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

const AppNavigator = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen
                    name="Home"
                    component={AppTabNavigator}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name="SendLink"
                    component={SendLinkScreen}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name="Messages"
                    component={MessagesScreen}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name="GeneralDiscussion"
                    component={GeneralDiscussionScreen}
                    options={{
                        header: props => <GeneralDiscussionHeader {...props} />,
                    }}
                />
                <Stack.Screen name="Book" component={BookScreen} />
                <Stack.Screen name="Movie" component={MovieScreen} />
                <Stack.Screen name="BusinessNetworking" component={BusinessNetworkingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
