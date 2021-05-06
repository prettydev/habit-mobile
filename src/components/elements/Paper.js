import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';

export const Paper: function = props => {
    const {children, style, hidden, onPress, shadow} = props;

    const theme = useTheme();
    const styles = useStyles(theme);

    if (onPress) {
        return (
            <>
                {hidden ? null : (
                    <TouchableOpacity
                        onPress={onPress}
                        style={{...styles.root, ...style, ...(shadow ? theme.styles.shadow : {})}}>
                        {children}
                    </TouchableOpacity>
                )}
            </>
        );
    }
    return (
        <>
            {hidden ? null : (
                <View style={{...styles.root, ...style, ...(shadow ? theme.styles.shadow : {})}}>{children}</View>
            )}
        </>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            width: '90%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 8,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 1,
            justifyContent: 'center',
            borderStyle: 'solid',
            borderWidth: 0.7,
            position: 'relative',
        },
    });
