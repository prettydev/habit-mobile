import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Paper} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const PageNotFound = ({navigation}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    
    return (
        <Overlay visible={modalVisible} onClose={() => setModalVisible(false)} closeOnTouchOutside fullScreen='true'
            animationType="zoomIn" containerStyle={{backgroundColor: 'rgba(112, 112, 112, 0.78)'}}
            childrenWrapperStyle={{backgroundColor: 'rgba(255,255,255,255)', borderRadius: theme.hp('2')}}
            animationDuration={500}>
            {
                (hideModal, overlayState) => (
                    <Fragment>

                    <Emoji name="confused" style={{fontSize: 32}} />
                    <Text style={styles.modalTitle}>Uh oh!</Text>
                    <Text style={styles.modalContent}>Can't find the page you're looking for</Text>
                    <Paper style={styles.goback} onPress={onClose}>
                        <Text style={[styles.textStyle, styles.whiteColor]}>
                            GO BACK
                        </Text>
                    </Paper>
                    <Paper style={styles.tryAgain} onPress={tryAgain}>
                        <Text style={styles.textStyle}>
                            TRY AGAIN
                        </Text>
                    </Paper>
                    </Fragment>
                )
            }
        </Overlay>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            height: '100%',
            width: '100%',
        },
        goback: {
            marginVertical: theme.hp('0.5%'),
            backgroundColor: 'black',
            color: 'red',
        },
        commitModalContainer: {
            flex: 1,
          },
        commitModalTitle:{
            fontWeight:'900',
            fontSize: 30,
            width:'65%',
            alignSelf: 'center',
            marginVertical: theme.hp('2%'),
            textAlign: 'center',
            flexDirection: 'row',
            color: 'white'
        },
        commitModalDesc:{
            fontWeight:'900',
            width:'80%',
            alignSelf: 'center',
            marginVertical: theme.hp('2%'),
            textAlign: 'center',
            flexDirection: 'row',
            color: 'white'
        },
        closeIconCommitModal:{
            color: 'white',
            fontWeight: '900'
        },
         closeIcon: {
            position: 'absolute',
            top: theme.hp('5%'),
            left: theme.hp('2%'),
        },
        continueBtn:{
              backgroundColor: '#96CD00',
              borderWidth: 0,
              height: theme.hp('7%'),
              marginTop: theme.hp('3%')
        },
        continueBtnTxt:{
            color:'white',
            fontSize:28,
            fontWeight:'bold'
        },
        commitModal: {
            height:'100%',
            backgroundColor: 'black',
            opacity: 0.8
        },
        modalTitle: {
            fontFamily: theme.fonts.bold,
            fontSize: 28,
            fontWeight: 'bold',
            color:'black'
        },
        textAlignCenter:{
            textAlign: 'center',
            color:'white'
        },
        textUnderLine:{
            textDecorationLine: 'underline',
        },
        modalContent:{
        paddingBottom:15,
        color: 'black'
        },
        tryAgain:{
            marginVertical: theme.hp('0.5%'),
        },
        whiteColor:{
            color:'white'
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
    });
