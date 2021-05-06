import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {useTheme} from 'react-native-paper';
import {imgRound, imgRight} from '../../../commons';
import {useStyles} from './styles';
import {HabitEditModal} from '../../modals/HabitEditModal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Read a book',
        progress: 0.95,
        color: '#FC4356',
        dates: ['2021-04-06', '2021-04-07', '2021-04-09', '2021-04-10', '2021-04-12'],
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Read a book',
        progress: 0.4,
        color: '#26BBF5',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Read a book',
        progress: 0.02,
        color: 'yellow',
    },
];

export const YearView = ({visible}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const [habit, setHabit] = useState(null);

    const closeEditModal = () => {
        setHabit(null);
    };

    const renderItem = ({item}) => (
        <View style={{width: '100%'}}>
            <View style={styles.yearViewCheckList}>
                <MaterialIcons name={'radio-button-unchecked'} color={'#808080'} size={theme.hp('3%')} />
                <MaterialIcons name={'check-circle'} color={'#808080'} size={theme.hp('3%')} />
                <MaterialIcons name={'radio-button-unchecked'} color={'#808080'} size={theme.hp('3%')} />
                <MaterialIcons name={'radio-button-unchecked'} color={'#808080'} size={theme.hp('3%')} />
                <MaterialIcons name={'check-circle'} color={'#808080'} size={theme.hp('3%')} />
            </View>
            <TouchableOpacity
                style={styles.yearViewItem}
                onPress={() => {
                    setHabit(item);
                }}>
                <View
                    style={[
                        styles.progressContent,
                        {
                            backgroundColor: item.color,
                            width: item.progress * 100 + '%',
                        },
                    ]}
                />
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 7,
                        borderBottomRightRadius: 7,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            height: 27,
                            width: 49,
                            backgroundColor: '#FFFFFF',
                            marginLeft: 26,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.progress * 100} %</Text>
                    </View>
                    <Text style={{fontSize: 18, marginLeft: 5}}> {item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    if (!visible) {
        return null;
    }

    return (
        <View style={styles.root}>
            <View style={styles.calendarContainer}>
                <CalendarStrip
                    numDaysInWeek={5}
                    dateNameStyle={styles.dateNameStyle}
                    dateNumberStyle={styles.dateNumberStyle}
                    selectedDate={new Date()}
                    showMonth={false}
                    highlightDateNameStyle={styles.highlightDateNameStyle}
                    highlightDateNumberStyle={styles.highlightDateNumberStyle}
                    style={{height: theme.hp('14%')}}
                    iconStyle={{display: 'none'}}
                    scrollable={true}
                />
            </View>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} style={{flex: 1}} />
            <HabitEditModal open={habit !== null} habit={habit} onClose={closeEditModal} />
        </View>
    );
};
