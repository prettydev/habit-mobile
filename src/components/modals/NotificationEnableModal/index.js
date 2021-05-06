import React from 'react';
import {Image, Text, TouchableOpacity, View, Linking} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Overlay} from 'react-native-elements';
import {useStyles} from './styles';
import {Button} from '../../elements';
import {imgBell} from '../../../commons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const NotificationEnableModal = ({open, onClose}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <Overlay visible={open} onBackdropPress={onClose}>
            <View style={styles.root}>
                <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                    <AntDesign name={'close'} size={theme.hp('5%')} color={'black'} />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Nooo, your notifications are disabled...</Text>
                    <Image source={imgBell} style={styles.bellStyle} />
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        Your reminders will not work. We recommend you to turn notifications <Text>ON.</Text>
                    </Text>
                </View>
                <Button
                    onPress={Linking.openSettings}
                    title={'GO TO SETTINGS'}
                    style={styles.buttonStyle}
                    titleStyle={styles.buttonTextStyle}
                />
            </View>
        </Overlay>
    );
};
