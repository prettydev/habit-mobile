import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native-animatable';
export const ButtonNext = ({onPress, text = 'Continue', textHidden = true}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <View style={styles.root}>
            {!textHidden && <Text style={theme.styles.h1}>{text}</Text>}
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <MaterialIcons name="navigate-next" size={theme.wp('10%')} color={'white'} />
            </TouchableOpacity>
        </View>
    );
};

const useStyles = (theme) =>
    StyleSheet.create({
        root: {
            flex: 1,
            position: 'absolute',
            bottom: theme.hp('7%'),
            width: theme.wp('100%'),
            height: theme.hp('7%'),
            paddingLeft: theme.hp('7%'),
            flexDirection: 'row',
            alignItems: 'center',
        },
        button: {
            width: theme.wp('14%'),
            height: theme.wp('14%'),
            right: theme.wp('7%'),
            alignSelf: 'flex-end',
            backgroundColor: theme.colors.btnContinue,
            borderRadius: theme.wp('7%'),
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
        },
    });
