import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useStyles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabBarItem = ({navigation, route, descriptors, state, index}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {options} = descriptors[route.key];

    const isFocused = state.index === index;

    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };

    const tabBarIcons = [
        <MaterialCommunityIcons
            name={'check-circle-outline'}
            size={theme.hp('3.2%')}
            color={isFocused ? 'white' : theme.colors.lightGray}
        />,
        <Ionicons
            name={'chatbubbles-outline'}
            size={theme.hp('3.4%')}
            color={isFocused ? 'white' : theme.colors.lightGray}
        />,
        <MaterialCommunityIcons
            name={'account-circle'}
            size={theme.hp('3.8%')}
            style={{backgroundColor: isFocused ? theme.colors.gray : 'white'}}
            color={isFocused ? 'white' : theme.colors.lightGray}
        />,
    ];

    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}>
            <View style={[styles.tabMenuItem, {backgroundColor: isFocused ? theme.colors.gray : 'white'}]}>
                {tabBarIcons[index]}
            </View>
        </TouchableOpacity>
    );
};

export const TabBar = ({state, ...rest}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    return (
        <View style={styles.root}>
            <Text style={styles.title}>HABIT</Text>
            <View style={{flexDirection: 'row'}}>
                {state.routes.map((route, index) => (
                    <TabBarItem {...rest} route={route} state={state} index={index} key={index} />
                ))}
            </View>
        </View>
    );
};
