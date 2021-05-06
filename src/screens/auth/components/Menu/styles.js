import {StyleSheet} from 'react-native';

export const useStyles = theme =>
    StyleSheet.create({
        container: {
            backgroundColor: '#fff',
        },
        header_style: {
            backgroundColor: '#fff',
            height: theme.hp('4.6%'),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        header_style_text: {
            fontSize: theme.hp('2.6%'),
        },
        profile_menu_text_view: {
            height: theme.hp('5.5%'),
            width: '100%',
            justifyContent: 'center',
            marginTop: theme.hp('4.5%'),
        },
        //Home tab style
        indicatorStyle: {
            backgroundColor: 'white',
            height: 0,
        },
        indicatorContainerStyle: {
            backgroundColor: 'white',
            flex: 1,
            width: '100%',
        },

        //profile-------------------------------
        segment_profile: {
            height: theme.hp('5.5%'),
        },
        segment_profile_view: {
            height: 50,
            marginLeft: 8.5,
            marginRight: 8.5,
            marginTop: 10,
        },
        profile_menu_text: {
            marginLeft: 27.5,
            marginRight: 27.5,
            fontSize: 17,
        },
        goback: {
            marginVertical: theme.hp('0.5%'),
            backgroundColor: 'black',
            color: 'red',
        },
        modalContent: {
            paddingBottom: 15,
            color: 'black',
        },
        tryAgain: {
            marginVertical: theme.hp('0.5%'),
        },
        whiteColor: {
            color: 'white',
        },
        textStrong: {
            fontFamily: theme.fonts.bold,
            fontWeight: '900',
        },
        content: {
            flex: 1,
            paddingHorizontal: theme.hp('2.5%'),
            paddingVertical: theme.hp('5%'),
        },
        topBox: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: theme.hp('2%'),
        },
        textStyle1: {
            fontSize: theme.hp('2.4%'),
        },
        textStyle2: {
            fontSize: theme.hp('1.8%'),
        },
        textStyle3: {
            fontSize: theme.hp('2.4%'),
        },
        textStyle4: {
            fontSize: theme.hp('2%'),
            color: '#989898',
        },
        textStyle5: {
            color: 'white',
            fontSize: theme.hp('1.8%'),
        },
        chatItemContainer: {
            flexDirection: 'row',
            marginVertical: theme.hp('1%'),
            paddingVertical: theme.hp('1%'),
        },
        chatItem: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#707070',
            width: '85%',
            justifyContent: 'space-between',
            height: theme.hp('8%'),
        },
        imageStyle: {
            width: '15%',
            resizeMode: 'contain',
        },
        chatCount: {
            width: theme.hp('3%'),
            height: theme.hp('3%'),
            borderRadius: theme.hp('0.6%'),
            backgroundColor: '#F56200',
            justifyContent: 'center',
            alignItems: 'center',
        },
        supportItem: {
            height: 45,
            backgroundColor: '#F1F1F1',
            marginLeft: theme.wp('5%'),
            marginRight: theme.wp('5%'),
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: 10,
        },
        supportHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.hp('10%'),
            marginLeft: theme.wp('5%'),
        },
        modeIconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        modeItem: {
            height: theme.hp('5%'),
            width: theme.hp('5%'),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
        },
    });
