import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useStyles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Paper, ProgressBar} from '../../elements';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Line} from 'react-native-svg';
import {imgArrowUp} from '../../../commons';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const viewMode = ['Last 30 days', 'Last 90 days', 'Last year', 'Lifetime'];

export const HabitEditModal = ({open, habit, onClose}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const [mode, setMode] = useState(viewMode[0]);
    const [values, setValues] = useState({...habit} || {});

    useEffect(() => {
        setValues({...habit});
    }, [habit]);

    const HorizontalLine = ({y}) => (
        <Line key={'zero-axis'} x1={'0%'} x2={'100%'} y1={y(0)} y2={y(0)} stroke={'black'} strokeWidth={1} />
    );

    const HorizontalLine2 = ({y}) => (
        <Line
            key={'zero-axis'}
            x1={'0%'}
            x2={'100%'}
            y1={y(0)}
            y2={y(0)}
            stroke={'black'}
            strokeDasharray={[1, theme.wp('16%')]}
            strokeWidth={8}
        />
    );

    const VerticalLine = ({y}) => (
        <Line key={'zero-axis'} x1={'0%'} x2={'0%'} y1={y(0)} y2={y(100)} stroke={'black'} strokeWidth={2} />
    );

    const VerticalLine2 = ({y}) => (
        <Line
            key={'zero-axis'}
            x1={'0%'}
            x2={'0%'}
            y1={y(0)}
            y2={y(100)}
            stroke={'black'}
            strokeDasharray={[1, theme.hp('4.171%')]}
            strokeWidth={10}
        />
    );

    if (!open) {
        return null;
    }

    return (
        <Modal animationType="slide" transparent={true} visible={open}>
            <View style={styles.root}>
                <Paper style={styles.content}>
                    <ScrollView style={{flex: 1, width: '100%'}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity style={styles.close} onPress={onClose}>
                                <AntDesign name={'close'} size={theme.hp('2%')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.edit}>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                            <View style={styles.topPanel}>
                                <Text style={styles.title}>{values.title}</Text>
                                <View style={styles.percentContainer}>
                                    <Text style={styles.textPercent}>{values.progress * 100}%</Text>
                                    <Image source={imgArrowUp} style={styles.imageArrowUp} />
                                    <Text style={styles.textUpBy}>Up by 14% last 30 days</Text>
                                </View>
                                <ProgressBar progress={values.progress} color={values.color} />
                            </View>
                            <View style={styles.chartContainer}>
                                <View style={styles.chartHeader}>
                                    <View style={styles.headerItem}>
                                        <Text style={styles.headerText1}>Best Streak</Text>
                                        <Text style={styles.headerText2}>
                                            37 <Text style={styles.headerText3}>Days</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.headerItem}>
                                        <Text style={styles.headerText1}>Total Days</Text>
                                        <Text style={styles.headerText2}>
                                            120 <Text style={styles.headerText3}>Days</Text>
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.chart}>
                                    <YAxis
                                        data={[0, 25, 50, 75, 100]}
                                        contentInset={{top: theme.hp('5.7%'), bottom: theme.hp('5.5%')}}
                                        svg={{
                                            fontSize: theme.hp('1.8%'),
                                            fill: 'black',
                                        }}
                                        numberOfTicks={4}
                                        formatLabel={(value, index) => value}
                                    />
                                    <View style={{flex: 1, marginLeft: 0, marginRight: theme.wp('2%')}}>
                                        <LineChart
                                            style={{flex: 1, paddingLeft: theme.wp('2.5%')}}
                                            data={[0, 20, 30, 40, 30, 50]}
                                            contentInset={{top: theme.hp('4.95%'), bottom: theme.hp('1.5%'), left: 0}}
                                            curve={shape.curveNatural}
                                            yMax={100}
                                            xMax={5.2}
                                            showGrid={false}
                                            numberOfTicks={5}
                                            svg={{
                                                stroke: '#FC4356',
                                                strokeWidth: 5,
                                            }}>
                                            <Grid />
                                            <HorizontalLine />
                                            <HorizontalLine2 />
                                            <VerticalLine />
                                            <VerticalLine2 />
                                        </LineChart>
                                        <XAxis
                                            style={{height: theme.hp('4.4%'), width: '100%'}}
                                            data={[0, 1, 2, 3, 4, 5]}
                                            formatLabel={(value, index) => '10/04'}
                                            contentInset={{left: theme.wp('3%'), right: theme.wp('5%')}}
                                            svg={{fontSize: 10, fill: 'grey'}}
                                        />
                                    </View>
                                </View>
                                <View style={styles.viewModeContainer}>
                                    {viewMode.map(item => (
                                        <TouchableOpacity
                                            key={item}
                                            onPress={() => {
                                                setMode(item);
                                            }}
                                            style={[styles.viewModeItem, item === mode ? styles.active : {}]}>
                                            <Text>{item}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={{padding: 20, flex: 1, backgroundColor: 'white'}}>
                                    <Calendar
                                        // Initially visible month. Default = Date()
                                        current={moment().format('YYYY-MM-DD')}
                                        // Handler which gets executed on day press. Default = undefined
                                        onDayPress={day => {
                                            console.log('selected day', day);
                                        }}
                                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                                        monthFormat={'MMMM yyyy'}
                                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                                        onMonthChange={month => {
                                            console.log('month changed', month);
                                        }}
                                        // Hide month navigation arrows. Default = false
                                        hideArrows={true}
                                        // Do not show days of other months in month page. Default = false
                                        hideExtraDays={true}
                                        // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
                                        // day from another month that is visible in calendar page. Default = false
                                        disableMonthChange={true}
                                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                                        firstDay={1}
                                        markedDates={{
                                            '2021-04-05': {selected: true},
                                            '2021-04-07': {selected: true},
                                            '2021-04-08': {selected: true},
                                            '2021-04-09': {selected: true},
                                            '2021-04-11': {selected: true},
                                        }}
                                    />
                                </View>
                                <View style={styles.actionsButtons}>
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Text style={styles.actionButtonText}>Reset progress</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Text style={styles.actionButtonText}>Delete habit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Paper>
            </View>
        </Modal>
    );
};
