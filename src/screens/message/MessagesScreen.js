import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Paper} from '../../components';
import {imgBook, imgEarth, imgMovie, imgNetwork} from '../../commons';

export const MessagesScreen = ({navigation}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <View active={'messages'} style={styles.root}>
            <Paper shadow style={styles.topBox}>
                <Text style={styles.textStyle1}>What is this chat for?</Text>
                <Text style={styles.textStyle2}>
                    Engage with a community of positive people building their habits just like you and "level up"
                    together!
                </Text>
            </Paper>
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('GeneralDiscussion');
                    }}>
                    <Image source={imgEarth} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>General discussion(say hi!)</Text>
                            <Text style={styles.textStyle4}>Everything.</Text>
                        </View>
                        <View style={styles.chatCount}>
                            <Text style={styles.textStyle5}>16</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('Book');
                    }}>
                    <Image source={imgBook} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>Books</Text>
                            <Text style={styles.textStyle4}>Have a book recommendation?.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('Movie');
                    }}>
                    <Image source={imgMovie} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>Movies</Text>
                            <Text style={styles.textStyle4}>I know you have a movie to share...</Text>
                        </View>
                        <View style={styles.chatCount}>
                            <Text style={styles.textStyle5}>1</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chatItemContainer}
                    onPress={() => {
                        navigation.navigate('BusinessNetworking');
                    }}>
                    <Image source={imgNetwork} style={styles.imageStyle} />
                    <View style={styles.chatItem}>
                        <View>
                            <Text style={styles.textStyle3}>Business networking</Text>
                            <Text style={styles.textStyle4}>Any business people here?</Text>
                        </View>
                        <View style={styles.chatCount}>
                            <Text style={styles.textStyle5}>3</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const useStyles = theme =>
    StyleSheet.create({
        root: {
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
        },
        content: {
            paddingHorizontal: theme.hp('2.5%'),
            paddingVertical: theme.hp('5%'),
        },
        topBox: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: theme.hp('2%'),
        },
        textStyle1: {
            fontSize: theme.hp('2.4%'),
        },
        textStyle2: {
            fontSize: theme.hp('1.8%'),
        },
        textStyle3: {
            fontSize: theme.hp('2.4%'),
        },
        textStyle4: {
            fontSize: theme.hp('2%'),
            color: '#989898',
        },
        textStyle5: {
            color: 'white',
            fontSize: theme.hp('1.8%'),
        },
        chatItemContainer: {
            flexDirection: 'row',
            paddingVertical: theme.hp('2%'),
        },
        chatItem: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#707070',
            width: '85%',
            justifyContent: 'space-between',
            height: theme.hp('8%'),
        },
        imageStyle: {
            width: theme.wp('8%'),
            height: theme.wp('8%'),
            resizeMode: 'contain',
            marginRight: theme.wp('5%'),
        },
        chatCount: {
            width: theme.hp('3%'),
            height: theme.hp('3%'),
            borderRadius: theme.hp('0.6%'),
            backgroundColor: '#F56200',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
