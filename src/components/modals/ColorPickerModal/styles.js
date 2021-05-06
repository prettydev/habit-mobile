import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            width: '100%',
            backgroundColor: '#0000003f',
            justifyContent: 'flex-end',
        },
        content: {
            backgroundColor: 'white',
            height: theme.hp('92%'),
            borderTopRightRadius: theme.wp('2%'),
            borderTopLeftRadius: theme.wp('2%'),
            width: '100%',
            position: 'relative',
        },
        colorsWrapper: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: theme.wp('20%'),
            paddingVertical: theme.hp('4%'),
        },
        colorItem: {
            width: theme.wp('11%'),
            height: theme.wp('11%'),
            marginHorizontal: theme.wp('1%'),
            marginVertical: theme.hp('1.2%'),
            borderRadius: theme.wp('1%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        handleBackIcon: {
            position: 'absolute',
            top: theme.hp('2%'),
            left: theme.wp('5%'),
            zIndex: 2,
        },
    });
