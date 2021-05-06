import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            width: '100%',
            justifyContent: 'flex-end',
            backgroundColor: '#0000009f',
        },
        content: {
            height: theme.hp('93%'),
            position: 'relative',
            width: '100%',
            flexDirection: 'column',
            paddingHorizontal: 0,
        },
        close: {
            position: 'absolute',
            left: theme.wp('5%'),
            top: theme.hp('2%'),
        },
        edit: {
            position: 'absolute',
            right: theme.wp('5%'),
            top: theme.hp('2%'),
        },
        topPanel: {
            paddingHorizontal: theme.wp('5%'),
            paddingVertical: theme.hp('2%'),
        },
        chartContainer: {
            width: theme.wp('100%'),
            backgroundColor: '#F3F3F3',
        },
        chart: {
            width: theme.wp('100%'),
            padding: theme.wp('2%'),
            height: theme.hp('35%'),
            flexDirection: 'row',
        },
        viewModeContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: theme.hp('2%'),
            paddingHorizontal: theme.wp('5%'),
        },
        viewModeItem: {
            paddingHorizontal: theme.wp('2%'),
            paddingVertical: theme.wp('1.4%'),
            borderRadius: theme.wp('2%'),
        },
        active: {
            backgroundColor: 'white',
        },
        title: {
            width: '100%',
            textAlign: 'left',
            fontSize: theme.hp('3.6%'),
            color: 'black',
            marginBottom: theme.hp('1%'),
            marginTop: theme.hp('4%'),
        },
        percentContainer: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            paddingBottom: theme.hp('2%'),
        },
        imageArrowUp: {
            width: theme.wp('6%'),
            height: theme.wp('6%'),
            resizeMode: 'contain',
        },
        textPercent: {
            fontSize: theme.hp('6%'),
            fontWeight: 'bold',
            marginBottom: -theme.hp('1%'),
        },
        textUpBy: {
            fontSize: theme.hp('2.6%'),
            fontWeight: 'bold',
            color: '#CBCBCB',
        },
        chartHeader: {
            flexDirection: 'row',
            paddingHorizontal: theme.wp('10%'),
            marginTop: theme.hp('3%'),
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-around',
        },
        headerItem: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerText1: {
            fontWeight: 'bold',
            fontSize: theme.hp('2.5%'),
            color: '#A4A4A4',
        },
        headerText2: {
            fontWeight: 'bold',
            fontSize: theme.hp('3%'),
        },
        headerText3: {
            fontSize: theme.hp('2%'),
            fontWeight: 'normal',
        },
        actionsButtons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: theme.wp('10%'),
        },
        actionButton: {
            borderWidth: 1,
            borderColor: '#C8C8C8',
            borderRadius: theme.wp('1.5%'),
            width: theme.wp('32%'),
            padding: theme.wp('1.5%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        actionButtonText: {
            color: '#EE4646',
        },
    });
