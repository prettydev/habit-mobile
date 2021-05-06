import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

export const BookScreen = () => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <View style={styles.root}>
            <Text>Book Screen</Text>
        </View>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            height: '100%',
            width: '100%',
        },
    });
