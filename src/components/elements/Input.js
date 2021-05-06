import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

export const Input = ({name, value, onChangeText, isInvalid, style,  ...props}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <TextInput
            name={name}
            value={value}
            autoCapitalize="none"
            onChangeText={text => onChangeText(name, text)} //... Bind the name here
            style={[styles.textInputStyle, style]}
            {...props}
        />
    );
};

const useStyles = theme =>
    StyleSheet.create({
        textInputStyle: {
            backgroundColor: 'white',
            width: '100%',
            height: theme.hp('6%'),
            maxWidth: 400,
            borderColor: theme.colors.default,
            borderRadius: theme.wp('2%'),
            fontSize: 18,
            fontFamily: theme.fonts.regular,
            borderWidth: 0.7,
            borderStyle: 'solid',
        },
    });
