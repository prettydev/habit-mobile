import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        root: {
            width: theme.wp('80%'),
            position: 'relative',
            padding: theme.wp('2%'),
        },
        buttonStyle: {
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 0.5,
        },
        buttonTextStyle: {
            color: 'black',
        },
        bellStyle: {
            width: theme.wp('10%'),
            height: theme.wp('10%'),
            resizeMode: 'contain',
        },
        titleWrapper: {
            flexDirection: 'row',
            marginTop: theme.hp('8%'),
            padding: theme.wp('5%'),
        },
        title: {
            fontSize: theme.hp('2.8'),
            width: '85%',
            fontWeight: 'bold',
        },
        descriptionWrapper: {
            paddingHorizontal: theme.wp('5%'),
            paddingVertical: theme.wp('2%'),
        },
        description: {
            fontSize: theme.hp('2.4'),
        },
        closeIcon: {
            position: 'absolute',
            top: theme.hp('2%'),
            left: theme.wp('2%'),
        },
    });
