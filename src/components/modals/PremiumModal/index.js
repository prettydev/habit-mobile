import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, Alert} from 'react-native';
import {useTheme} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Paper} from '../../elements';
import {useStyles} from './styles';

export const PremiumModal = ({open, onClose}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <Modal animationType="slide" transparent={true} visible={open}>
            <View
                style={[
                    styles.commitModalContainer,
                    styles.commitModal,
                    {
                        flexDirection: 'column',
                    },
                ]}>
                <View style={{flex: 1}}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <EvilIcons name={'close'} size={26} style={styles.closeIconCommitModal} />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 4}}>
                    <Text style={styles.commitModalTitle}>Commit to a better you!</Text>
                    {isAnnual ? (
                        <Text style={styles.commitModalDesc}>
                            Create unlimited habits, unlock all colors, stats, iCloud sync and support our team to keep
                            improving!
                        </Text>
                    ) : (
                        <Text style={styles.commitModalDesc}>
                            Create unlimited habits, unlock all colors, stats, iCloud sync and support our team to keep
                            improving!
                        </Text>
                    )}
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsAnnual(!isAnnual);
                        }}
                        style={styles.membershipWrapper}
                        pointerEvents={'box-none'}>
                        <Paper style={{...styles.memberShipItem, zIndex: isAnnual ? 2 : 5}}>
                            <Text style={styles.membershipTitle}>Monthly membership</Text>
                            <Text>$1.47 / Week</Text>
                            <FontAwesome5 name={'check'} size={theme.hp('2.4')} color={'black'} />
                        </Paper>
                        <Paper style={{...styles.memberShipItem, zIndex: isAnnual ? 5 : 2}}>
                            <Text style={styles.membershipTitle}>Annual membership</Text>
                            <Text>$0.97/ Week</Text>
                            <FontAwesome5 name={'check'} size={theme.hp('2.4')} color={'black'} />
                        </Paper>
                        {isAnnual && (
                            <View style={styles.savePercentContainer}>
                                <View style={styles.savePercent}>
                                    <Text style={styles.savePercentText}>Save 36%</Text>
                                </View>
                            </View>
                        )}
                        <View style={styles.membershipOverLayer} />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 4}}>
                    <Paper style={styles.continueBtn}>
                        <Text style={styles.continueBtnTxt}>Continue</Text>
                    </Paper>
                    <Text style={[styles.textAlignCenter, styles.textBold]}>Cancel anytime,</Text>
                    <Text style={styles.textAlignCenter}>$90.72 billed yearly, automatically renews.</Text>
                    <Text style={[styles.textAlignCenter, styles.textUnderLine]}>Restore purchase.</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={[styles.textUnderLine, {color: 'white'}, {marginHorizontal: theme.hp('2%')}]}>
                        Privacy Policy,
                    </Text>
                    <Text style={[styles.textUnderLine, {color: 'white'}]}>Terms of Service.</Text>
                </View>
            </View>
        </Modal>
    );
};
