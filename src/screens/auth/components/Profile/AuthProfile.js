import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {Avatar} from '../../../../components';
import {AboutMeModal} from '../../../../components/modals/AboutMeModal';

export const AuthProfile = () => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const authUser = useSelector(state => state.firebase.profile);
    const [openAboutMe, setOpenAboutMe] = useState(false);

    return (
        <View style={styles.root}>
            <View style={styles.flexRowCenter}>
                <Avatar />
                <Text style={styles.textName}>{authUser.name}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.textAboutMe}>About me</Text>
                <TouchableOpacity
                    onPress={() => {
                        setOpenAboutMe(true);
                    }}>
                    <View style={styles.textInput}>
                        <Text style={[styles.aboutMe, {color: authUser.aboutMe ? 'black' : 'grey'}]}>
                            {authUser.aboutMe || 'Type...'}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{alignItems: 'flex-end', marginRight: theme.wp('3%')}}>
                    <Text>{authUser.aboutMe?.length || '0'}/300</Text>
                </View>
            </View>
            <AboutMeModal
                visible={openAboutMe}
                onClose={() => {
                    setOpenAboutMe(false);
                }}
            />
        </View>
    );
};
