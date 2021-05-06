import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        root: {
            width: '100%',
            backgroundColor: 'white',
            paddingBottom: theme.hp('1%'),
        },
        title: {
            width: '100%',
            fontSize: theme.hp('4.6%'),
            textAlign: 'center',
            marginTop: theme.hp('1%'),
            fontWeight: 'bold',
        },
        tabBarItem: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: theme.hp('5%'),
        },
        tabMenuItem: {
            width: theme.wp('11%'),
            height: theme.hp('4.2%'),
            borderRadius: theme.wp('1.2%'),
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
    });
