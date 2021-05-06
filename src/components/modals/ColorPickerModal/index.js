import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {useTheme} from 'react-native-paper';
import {colorListOne, colorListTwo} from './data';
import {useStyles} from './styles';
import {Divider} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ColorPickerModal = ({open, color, onClose, onChange, premium}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    const handleBack = () => {
        onClose();
    };

    if (!open) {
        return null;
    }

    if (premium) {
        return (
            <Modal animationType="slide" transparent={true} visible={open}>
                <View style={styles.root}>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={handleBack} style={styles.handleBackIcon}>
                            <Ionicons name={'chevron-back'} size={theme.wp('8%')} color={'black'} />
                        </TouchableOpacity>
                        <Text style={[theme.styles.c2, {marginTop: theme.hp('2%')}]}>Choose a color</Text>
                        <View style={styles.colorsWrapper}>
                            {colorListOne.map(colorItem => (
                                <TouchableOpacity
                                    onPress={() => {
                                        onChange(colorItem);
                                    }}
                                    key={colorItem}
                                    style={[styles.colorItem, {backgroundColor: colorItem}]}>
                                    {colorItem === color && (
                                        <Feather name={'check'} color={'white'} size={theme.wp('6%')} />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Divider />
                        <View style={styles.colorsWrapper}>
                            {colorListTwo.map(colorItem => (
                                <TouchableOpacity
                                    onPress={() => {
                                        onChange(colorItem);
                                    }}
                                    key={colorItem}
                                    style={[styles.colorItem, {backgroundColor: colorItem}]}>
                                    {colorItem === color && (
                                        <Feather name={'check'} color={'white'} size={theme.wp('6%')} />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    return (
        <Modal animationType="slide" transparent={true} visible={open}>
            <View style={styles.root}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={handleBack} style={styles.handleBackIcon}>
                        <Ionicons name={'chevron-back'} size={theme.wp('8%')} color={'black'} />
                    </TouchableOpacity>
                    <Text style={[theme.styles.c2, {marginTop: theme.hp('2%')}]}>Choose a color</Text>
                    <View style={styles.colorsWrapper}>
                        {colorListOne.map((colorItem, index) =>
                            index < 2 ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        onChange(colorItem);
                                    }}
                                    key={colorItem}
                                    style={[styles.colorItem, {backgroundColor: colorItem}]}>
                                    {colorItem === color && (
                                        <Feather name={'check'} color={'white'} size={theme.wp('6%')} />
                                    )}
                                </TouchableOpacity>
                            ) : (
                                <View
                                    key={colorItem}
                                    style={[
                                        styles.colorItem,
                                        {backgroundColor: colorItem, opacity: 0.3, ...theme.styles.shadow},
                                    ]}
                                />
                            ),
                        )}
                    </View>
                    <Divider />
                    <View style={styles.colorsWrapper}>
                        {colorListTwo.map(colorItem => (
                            <View
                                key={colorItem}
                                style={[
                                    styles.colorItem,
                                    {backgroundColor: colorItem, opacity: 0.3, ...theme.styles.shadow},
                                ]}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    );
};
