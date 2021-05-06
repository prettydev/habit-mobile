import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {imgEarth} from '../../commons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const GeneralDiscussionHeader = () => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.backButtonStyle} onPress={goBack}>
                <Ionicons name={'chevron-back-outline'} size={theme.hp('4.5%')} color={'black'} />
            </TouchableOpacity>
            <Image source={imgEarth} style={styles.iconStyle} />
            <Text style={styles.titleStyle}>General discussion(say hi!)</Text>
        </View>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            width: '100%',
            backgroundColor: 'white',
            paddingVertical: theme.hp('1.2%'),
            borderBottomWidth: 2,
            borderBottomColor: '#707070',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        },
        iconStyle: {
            width: theme.hp('2.8%'),
            resizeMode: 'contain',
            marginRight: theme.wp('2%'),
        },
        titleStyle: {
            fontSize: theme.hp('2.4%'),
        },
        backButtonStyle: {
            position: 'absolute',
            left: theme.wp('3%'),
            top: theme.hp('1%'),
        },
    });
