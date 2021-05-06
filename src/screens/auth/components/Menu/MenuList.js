import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Divider, useTheme} from 'react-native-paper';
import {imgDark, imgLight} from '../../../../commons';
import {PremiumModal} from '../../../../components';
import {useStyles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {userLogOut} from '../../../../store/actions';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MenuList = ({visible, onSupportTapped}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const [premiumModal, setPremiumModal] = useState(false);
    const authUser = useSelector(state => state.firebase.profile);
    const [isDark, setIsDark] = useState(false);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(userLogOut());
    };

    if (!visible) {
        return null;
    }

    const toggleMode = () => {
        setIsDark(!isDark);
    };

    return (
        <View>
            <TouchableOpacity style={styles.profile_menu_text_view}>
                <Text style={styles.profile_menu_text}>How our habit algorithm works</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity style={[styles.profile_menu_text_view, {marginTop: theme.hp('2.4%')}]}>
                <Text style={styles.profile_menu_text}>Rate the app</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
                style={[styles.profile_menu_text_view, {marginTop: theme.hp('2.4%')}]}
                onPress={onSupportTapped}>
                <Text style={styles.profile_menu_text}>Support</Text>
            </TouchableOpacity>
            <Divider />
            <View style={[styles.profile_menu_text_view, styles.modeIconContainer, {marginTop: theme.hp('2.4%')}]}>
                <Text style={[styles.profile_menu_text, {flex: 1}]}>Mode </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginRight: theme.wp('5%'),
                        marginBottom: theme.wp('2%'),
                        justifyContent: 'space-between',
                        flex: 0.4,
                    }}>
                    <TouchableOpacity
                        style={[styles.modeItem, {backgroundColor: isDark ? 'transparent' : '#575757'}]}
                        onPress={toggleMode}>
                        <Feather name={'sun'} size={theme.hp('3%')} color={isDark ? '#8080807f' : 'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.modeItem, {backgroundColor: isDark ? '#575757' : 'transparent'}]}
                        onPress={toggleMode}>
                        <Ionicons name={'moon'} size={theme.hp('3%')} color={isDark ? 'white' : '#8080807f'} />
                    </TouchableOpacity>
                </View>
            </View>
            {!authUser.isEmpty && (
                <>
                    <Divider />
                    <TouchableOpacity
                        onPress={logOut}
                        style={{
                            height: 45,
                            marginRight: 11,
                            marginLeft: 11,
                            marginTop: 14,
                            justifyContent: 'center',
                            borderRadius: 8,
                        }}>
                        <Text style={{fontSize: 17, marginLeft: 15, color: 'red'}}>Log Out</Text>
                    </TouchableOpacity>
                </>
            )}
            <Divider />
            <TouchableOpacity
                onPress={() => setPremiumModal(true)}
                style={{
                    height: 45,
                    backgroundColor: '#B1D848',
                    marginRight: 11,
                    marginLeft: 11,
                    marginTop: 14,
                    justifyContent: 'center',
                    borderRadius: 8,
                }}>
                <Text style={{fontSize: 17, marginLeft: 15}}>
                    Upgrade to <Text style={{fontSize: 17, fontWeight: 'bold'}}>PREMIUM</Text>
                </Text>
            </TouchableOpacity>
            <PremiumModal
                open={premiumModal}
                onClose={() => {
                    setPremiumModal(false);
                }}
            />
        </View>
    );
};
