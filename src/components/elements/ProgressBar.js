import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

export const ProgressBar = ({style, progress, color = '#FC4356'}) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        root: {
            width: '100%',
            height: theme.hp('4%'),
            borderRadius: theme.wp('3%'),
            backgroundColor: '#F6F6F6',
            overflow: 'hidden',
            justifyContent: 'center',
        },
        content: {
            width: progress * 100 + '%',
            backgroundColor: color,
            height: theme.hp('8%'),
            borderRadius: theme.hp('4%'),
        },
    });

    return (
        <View style={[styles.root, style]}>
            <View style={styles.content} />
        </View>
    );
};
