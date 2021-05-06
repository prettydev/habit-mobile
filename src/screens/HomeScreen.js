import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {AddHabitModal, Paper} from '../components';
import Emoji from 'react-native-emoji';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {YearView} from '../components';

export const HomeScreen = () => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const addHabitRef = useRef(null);
    const [openYearView, setOpenYearView] = useState(false);

    const addHabit = () => {
        if (addHabitRef && addHabitRef.current) {
            addHabitRef.current.open();
        }
    };

    return (
        <View active={'home'} style={styles.root}>
            <Paper
                shadow
                style={{padding: theme.wp('1.5%'), marginTop: theme.hp('2%')}}
                onPress={() => setOpenYearView(!openYearView)}>
                <Text style={styles.textStyle1}>
                    <Text style={styles.textStyle2}>262</Text>
                    <Text>{' days left this year '}</Text>
                    <Emoji name="wink" style={{fontSize: 16}} />
                </Text>
            </Paper>
            {!openYearView && (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={addHabit} style={styles.addNewHabit}>
                        <Text style={styles.textStyle3}>Add new habit</Text>
                        <Ionicons name={'add'} size={theme.hp('6%')} />
                    </TouchableOpacity>
                    <Text style={{marginTop: theme.hp('2%')}}>
                        Time to <Text style={styles.textStyle4}>level up</Text> your life
                    </Text>
                </View>
            )}
            <YearView style={styles.root} visible={openYearView} />
            <AddHabitModal ref={addHabitRef} />
        </View>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            padding: theme.wp('2.5%'),
            backgroundColor: 'white',
        },
        textStyle1: {},
        textStyle2: {},
        textStyle4: {
            fontSize: theme.hp('2.4%'),
        },
        textStyle3: {
            fontSize: theme.hp('2.5%'),
        },
        addNewHabit: {
            backgroundColor: '#F6F6F6',
            width: '70%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: theme.hp('4%'),
            paddingVertical: theme.hp('2%'),
            borderRadius: theme.hp('3%'),
            flexDirection: 'row',
        },
    });
