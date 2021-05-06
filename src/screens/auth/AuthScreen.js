import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Menu} from './components/Menu';
import {Profile} from './components/Profile';

export const AuthScreen = () => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const [active, setActive] = useState('profile');
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={[styles.item, {backgroundColor: active === 'profile' ? '#F2F2F2' : 'transparent'}]}
                    onPress={() => {
                        setActive('profile');
                    }}>
                    <Text style={[theme.styles.c4, {color: active === 'profile' ? 'black' : '#8B8B8B'}]}>
                        My Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, {backgroundColor: active === 'menu' ? '#F2F2F2' : 'transparent'}]}
                    onPress={() => {
                        setActive('menu');
                    }}>
                    <Text style={[theme.styles.c4, {color: active === 'menu' ? 'black' : '#8B8B8B'}]}>Menu</Text>
                </TouchableOpacity>
            </View>
            <Profile visible={active === 'profile'} />
            <Menu visible={active === 'menu'} />
        </SafeAreaView>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            width: '100%',
            backgroundColor: 'white',
        },
        menuContainer: {
            width: '95%',
            alignSelf: 'center',
            marginTop: theme.hp('1%'),
            backgroundColor: '#E1E1E1',
            borderRadius: theme.wp('1%'),
            paddingVertical: theme.wp('1%'),
            paddingHorizontal: theme.wp('2%'),
            flexDirection: 'row',
            alignItems: 'center',
        },
        item: {
            width: '50%',
            borderRadius: theme.wp('1%'),
            height: theme.hp('5%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
