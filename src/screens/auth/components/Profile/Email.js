import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {mailFormat} from '../../../../commons';
import {Button, Input, Paper} from '../../../../components';
import {Overlay} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from "@react-navigation/native";

export const Email = () => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [agreeGetEmail, setAgreeGetEmail] = useState(false);
    const [visible, setVisible] = useState(false);

    const next = () => {
        if (email && mailFormat.test(email)) {
            setVisible(true);
        } else {
            alert('Please enter a valid email');
        }
    };

    const sendLink = () => {
        setVisible(false);
        navigation.navigate('SendLink', {email});
    };

    const goBack = () => {
        setVisible(false);
        navigation.goBack();
    };

    return (
        <View style={styles.root}>
            <Overlay
                isVisible={visible}
                onBackdropPress={() => {
                    setVisible(false);
                }}>
                <View style={{width: theme.wp('90%'), alignItems: 'center', padding: theme.hp('2%')}}>
                    <MaterialIcons style={styles.iconStyle} name={'email'} size={theme.hp('4%')} color={'white'} />
                    <Text>We fount an account for</Text>
                    <Text style={{fontSize: theme.hp('2%'), marginVertical: theme.hp('1%')}}>{email}</Text>
                    <Text>We can email you a link to LOG IN</Text>
                    <Button title={'SEND LINK'} onPress={sendLink} style={{marginTop: theme.hp('3%')}} />
                    <Paper onPress={goBack} style={{width: '100%'}}>
                        <Text>GO BACK</Text>
                    </Paper>
                </View>
            </Overlay>
            <Text style={styles.textStyle}>Create an account to continue</Text>
            <Input
                value={email}
                name={'email'}
                onChangeText={(name, value) => setEmail(value)}
                placeholder={'Email'}
                style={styles.inputStyle}
            />
            <Button title={'CONTINUE'} onPress={next} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: theme.hp('3%')}}>
                <CheckBox
                    value={agreeGetEmail}
                    boxType={'square'}
                    style={{
                        width: 18,
                        height: 10,
                        marginRight: 10,
                        marginVertical: 5,
                    }}
                    tintColors={'#5D5D5D'}
                    lineWidth={1}
                    onValueChange={newValue => setAgreeGetEmail(newValue)}
                />
                <Text style={{color: '#5D5D5D', fontFamily: theme.fonts.regular, fontSize: theme.hp('1.8%')}}>
                    I agree to get emails from Habio
                </Text>
            </View>
        </View>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            height: '90%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.wp('10%'),
        },
        inputStyle: {
            textAlign: 'center',
            marginVertical: theme.hp('2%'),
        },
        textStyle: {
            fontSize: 20,
        },
        iconStyle: {
            width: theme.hp('7%'),
            height: theme.hp('7%'),
            backgroundColor: 'black',
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: theme.hp('3.5%'),
            marginBottom: theme.hp('3%'),
        },
    });
