import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useTheme} from 'react-native-paper';

export const GeneralDiscussionScreen = () => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <View style={styles.root}>
            <View style={styles.postItem}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{
                            uri:
                                'https://lh3.googleusercontent.com/proxy/X0AAHQJlLtJ3lsFFh9C5GgHpDFGTdHyJG46_fMidagiUTFwidgee4LWAAJZ8rm77ygkzZ-nj6rh-xg3Mpdc6sdiwr3aalJjhDWi7Ui4yhHDZ377eOC6IZsHot10z',
                        }}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.postContent}>
                    <Text style={styles.titleStyle}>
                        Oscar Jovani <Text style={styles.timeStyle}>4:20 PM</Text>
                    </Text>
                    <Text style={styles.messageStyle}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old.
                    </Text>
                </View>
            </View>

            <View style={styles.postItem}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{
                            uri:
                                'https://lh3.googleusercontent.com/proxy/X0AAHQJlLtJ3lsFFh9C5GgHpDFGTdHyJG46_fMidagiUTFwidgee4LWAAJZ8rm77ygkzZ-nj6rh-xg3Mpdc6sdiwr3aalJjhDWi7Ui4yhHDZ377eOC6IZsHot10z',
                        }}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.postContent}>
                    <Text style={styles.titleStyle}>
                        Oscar Jovani <Text style={styles.timeStyle}>4:20 PM</Text>
                    </Text>
                    <Text style={styles.messageStyle}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old.
                    </Text>
                </View>
            </View>

            <View style={styles.postItem}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{
                            uri:
                                'https://lh3.googleusercontent.com/proxy/X0AAHQJlLtJ3lsFFh9C5GgHpDFGTdHyJG46_fMidagiUTFwidgee4LWAAJZ8rm77ygkzZ-nj6rh-xg3Mpdc6sdiwr3aalJjhDWi7Ui4yhHDZ377eOC6IZsHot10z',
                        }}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.postContent}>
                    <Text style={styles.titleStyle}>
                        Oscar Jovani <Text style={styles.timeStyle}>4:20 PM</Text>
                    </Text>
                    <Text style={styles.messageStyle}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old.
                    </Text>
                </View>
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
            padding: theme.wp('5%'),
        },
        postItem: {
            flexDirection: 'row',
            marginTop: theme.hp('2%'),
        },
        avatarContainer: {
            width: theme.wp('15%'),
            height: theme.wp('15%'),
            borderWidth: 0.5,
            margin: theme.wp('2%'),
            borderRadius: theme.wp('1%'),
            borderColor: '#8080807f',
            overflow: 'hidden',
        },
        avatar: {
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
        },
        postContent: {
            width: '80%',
            paddingTop: theme.hp('0.5%'),
        },
        titleStyle: {
            fontSize: theme.hp('2.4%'),
        },
        messageStyle: {
            fontSize: theme.hp('2%'),
        },
        timeStyle: {
            fontSize: theme.hp('2%'),
            color: '#989898',
        },
    });
