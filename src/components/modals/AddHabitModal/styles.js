import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: '#0000007f',
            justifyContent: 'flex-end',
        },
        content: {
            backgroundColor: 'white',
            height: '93%',
            borderTopRightRadius: theme.wp('2%'),
            borderTopLeftRadius: theme.wp('2%'),
        },
        closeIcon: {
            position: 'absolute',
            top: theme.hp('2%'),
            left: theme.hp('2%'),
        },
        saveText: {
            position: 'absolute',
            top: theme.hp('2%'),
            right: theme.hp('2%'),
        },
        lampContainer: {
            width: theme.hp('3.2%'),
            height: theme.hp('3.2%'),
            borderRadius: theme.hp('1.6%'),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.7,
        },
        habitNameWrapper: {
            width: '100%',
            marginTop: theme.hp('2%'),
            borderBottomWidth: 0.9,
            justifyContent: 'center',
            alignItems: 'center',
        },
        habitNameContainer: {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        habitName: {
            width: '90%',
            marginTop: theme.hp('1%'),
            borderBottomWidth: 0.5,
            justifyContent: 'center',
            marginBottom: theme.hp('1%'),
            padding: 0,
            fontSize: theme.hp('2.4%'),
            fontWeight: 'bold',
        },
        itemContainer: {
            width: '100%',
            marginTop: 20,
            borderBottomWidth: 0.5,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'row',
            paddingBottom: 5,
        },
        colorPicker: {
            width: theme.hp('4%'),
            height: theme.hp('4%'),
            borderRadius: 5,
        },
        repeatItem: {
            height: 25,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
        },
        textStyle1: {
            fontSize: theme.hp('1.6%'),
        },
        textStyle2: {
            fontSize: theme.hp('2%'),
        },
        textStyle3: {
            fontSize: theme.hp('1.8%'),
            paddingVertical: theme.hp('2%'),
        },
        textStyle4: {
            fontSize: theme.hp('1.7%'),
        },
        textStyle5: {
            color: 'white',
            fontSize: theme.hp('1.8%'),
        },
        dayContainer: {
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: theme.hp('3%'),
            paddingBottom: theme.hp('1.3%'),
        },
        weekContainer: {
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        timeContainer: {
            width: '40%',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        dayItem: {
            width: theme.hp('5%'),
            height: theme.hp('5%'),
            borderRadius: theme.hp('2.5%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        timeItem: {
            width: theme.hp('4%'),
            height: theme.hp('4%'),
            borderRadius: theme.hp('2%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        addRemindTimes: {
            alignSelf: 'center',
        },
        remindTimeItem: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: theme.hp('1%'),
        },
        remindTime: {
            width: '80%',
            backgroundColor: '#B9B9B9',
            flexDirection: 'row',
            paddingVertical: theme.hp('1%'),
            paddingHorizontal: theme.wp('2%'),
            borderRadius: theme.wp('1%'),
            justifyContent: 'space-between',
        },
        remindDelete: {
            width: '20%',
            alignItems: 'flex-end',
        },
    });
