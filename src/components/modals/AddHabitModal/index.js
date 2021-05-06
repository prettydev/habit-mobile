import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image, Switch, ScrollView, Modal} from 'react-native';
import {useTheme} from 'react-native-paper';
import {ColorPickerModal} from '../ColorPickerModal';
import {NotificationEnableModal} from '../NotificationEnableModal';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {imgLamp} from '../../../commons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {useStyles} from './styles';

const week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const times = [1, 2, 3, 4];

export const AddHabitModal = forwardRef((props, ref) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('#FC4356');
    const [repeat, setRepeat] = useState('daily');
    const [days, setDays] = useState([]);
    const [weeks, setWeeks] = useState([]);
    const [remindTimes, setRemindTimes] = useState([]);
    const [timePerDay, setTimePerDay] = useState(1);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
    const [openNotificationModal, setOpenNotificationModal] = useState(false);

    const close = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open() {
            setOpen(true);
        },
    }));

    const openColorPicker = () => {
        setIsOpenColorPicker(true);
    };

    const handleColorPickerClose = () => {
        setIsOpenColorPicker(false);
    };

    const handleOpenNotificationModal = () => {
        setOpenNotificationModal(true);
    };

    const handleCloseNotificationModal = () => {
        setOpenNotificationModal(false);
    };

    const handleColorPickerChange = color => {
        setColor(color);
        setIsOpenColorPicker(false);
    };

    const handleSelectDay = day => {
        const index = days.indexOf(day);
        if (index > -1) {
            delete days[index];
        } else {
            days.push(day);
        }
        setDays(Object.assign([], days));
    };

    const handleTimePickerChange = (event, selectedDate) => {
        setShowTimePicker(false);
        remindTimes.push(moment(selectedDate).format('LT'));
        setRemindTimes(Object.assign([], remindTimes));
    };

    return (
        <>
            <Modal animationType="slide" transparent={true} visible={open}>
                <View style={styles.root}>
                    <View style={styles.content}>
                        <TouchableOpacity style={styles.closeIcon} onPress={close}>
                            <EvilIcons name={'close'} size={18} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveText} onPress={handleOpenNotificationModal}>
                            <Text style={theme.styles.h5}>Save</Text>
                        </TouchableOpacity>
                        <Text style={[theme.styles.c2, {width: '60%', alignSelf: 'center'}]}>New habit</Text>
                        <ScrollView>
                            <View style={{width: '100%', paddingHorizontal: theme.wp('5%')}}>
                                <View style={styles.habitNameWrapper}>
                                    <View style={styles.habitNameContainer}>
                                        <TextInput style={styles.habitName} placeholder={'Name your habit'} />
                                        <View style={styles.lampContainer}>
                                            <Image
                                                source={imgLamp}
                                                style={{width: theme.hp('1.4%'), resizeMode: 'contain'}}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.itemContainer}>
                                    <Text style={styles.textStyle2}>Colors</Text>
                                    <TouchableOpacity
                                        onPress={openColorPicker}
                                        style={[styles.colorPicker, {backgroundColor: color}]}
                                    />
                                </View>
                                <View style={[styles.itemContainer, {flexDirection: 'column'}]}>
                                    <View
                                        style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                                        <Text style={styles.textStyle2}>Repeat</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setRepeat('daily');
                                                }}
                                                style={[
                                                    styles.repeatItem,
                                                    {backgroundColor: repeat === 'daily' ? 'grey' : 'white'},
                                                ]}>
                                                <Text style={{color: repeat === 'daily' ? 'white' : 'grey'}}>
                                                    Daily
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setRepeat('weekly');
                                                }}
                                                style={[
                                                    styles.repeatItem,
                                                    {backgroundColor: repeat === 'weekly' ? 'grey' : 'white'},
                                                ]}>
                                                <Text style={{color: repeat === 'weekly' ? 'white' : 'grey'}}>
                                                    Weekly
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.dayContainer}>
                                        {week.map(item => (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    handleSelectDay(item);
                                                }}
                                                key={item}
                                                style={[
                                                    styles.dayItem,
                                                    {backgroundColor: days.includes(item) ? '#B9B9B9' : 'white'},
                                                ]}>
                                                <Text
                                                    style={[
                                                        styles.textStyle1,
                                                        {color: days.includes(item) ? 'white' : 'black'},
                                                    ]}>
                                                    {item}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                <View style={[styles.itemContainer, {flexDirection: 'column'}]}>
                                    <View
                                        style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                                        <Text style={styles.textStyle2}>Times per day</Text>
                                        <View style={styles.timeContainer}>
                                            {times.map(item => (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setTimePerDay(item);
                                                    }}
                                                    key={item}
                                                    style={[
                                                        styles.timeItem,
                                                        {backgroundColor: timePerDay === item ? '#B9B9B9' : 'white'},
                                                    ]}>
                                                    <Text
                                                        style={[
                                                            styles.textStyle1,
                                                            {color: timePerDay === item ? 'white' : 'black'},
                                                        ]}>
                                                        {item}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>
                                    <Text style={styles.textStyle3}>
                                        {'Advice:  '}
                                        <Text style={styles.textStyle4}>
                                            don't overcomplicate it, keep it at 1 unless you need to.
                                        </Text>
                                    </Text>
                                </View>
                                {remindTimes.map((time, index) => (
                                    <View style={styles.remindTimeItem} key={JSON.stringify(time)}>
                                        <View style={styles.remindTime}>
                                            <Text style={styles.textStyle5}>Reminder {index + 1}</Text>
                                            <Text style={styles.textStyle5}>{time}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                delete remindTimes[index];
                                                setRemindTimes(Object.assign([], remindTimes));
                                            }}
                                            style={styles.remindDelete}>
                                            <Text style={styles.textStyle2}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                                <TouchableOpacity
                                    style={styles.addRemindTimes}
                                    onPress={() => {
                                        setShowTimePicker(true);
                                    }}>
                                    <Ionicons name={'add'} size={theme.hp('6%')} color={'#FC4356'} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            {showTimePicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={handleTimePickerChange}
                    onTouchCancel={() => setShowTimePicker(false)}
                />
            )}
            <ColorPickerModal
                open={isOpenColorPicker}
                color={color}
                onClose={handleColorPickerClose}
                onChange={handleColorPickerChange}
                premium
            />
            <NotificationEnableModal open={openNotificationModal} onClose={handleCloseNotificationModal} />
        </>
    );
});
