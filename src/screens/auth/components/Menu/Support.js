import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {imgEmail1, imgMessanger1, imgWhatsapp} from '../../../../commons';
import {useStyles} from './styles';
import {useTheme} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Support = ({visible, backToMenuHome}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    const onWhatsAppTapped = () => {};

    if (!visible) {
        return null;
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.supportHeader}>
                <TouchableOpacity onPress={backToMenuHome}>
                    <AntDesign name={'arrowleft'} color={'black'} size={theme.hp('3%')} />
                </TouchableOpacity>
                <Text style={{fontSize: theme.hp('2.6%'), marginLeft: 10}}>Support</Text>
            </View>
            <View style={{marginTop: theme.hp('2%')}}>
                {/*<TouchableOpacity style={styles.supportItem} onPress={() => onWhatsAppTapped()}>*/}
                {/*    <Image source={imgWhatsapp} style={{height: 29, width: 28, marginLeft: 20}} resizeMode="contain" />*/}
                {/*    <Text style={{fontSize: 17, marginLeft: 20}}>WhatsApp</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={styles.supportItem} onPress={() => onWhatsAppTapped()}>*/}
                {/*    <Image*/}
                {/*        source={imgMessanger1}*/}
                {/*        style={{height: 29, width: 28, marginLeft: 20}}*/}
                {/*        resizeMode="contain"*/}
                {/*    />*/}
                {/*    <Text style={{fontSize: 17, marginLeft: 20}}>Facebook Messenger</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={styles.supportItem} onPress={() => onWhatsAppTapped()}>
                    <Image source={imgEmail1} style={{height: 29, width: 28, marginLeft: 20}} resizeMode="contain" />
                    <Text style={{fontSize: 17, marginLeft: 20}}>Contact via email</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
