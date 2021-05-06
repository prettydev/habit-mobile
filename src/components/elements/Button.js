import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Button = ({title, onPress, style, titleStyle}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
                <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={[styles.buttonStyle, style]}>
            <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        </View>
    );
};

export const ForgotPasswordButton = props => {
    const theme = useTheme();
    const styles = useStyles(theme);
    return (
        <TouchableOpacity {...props} style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </TouchableOpacity>
    );
};

export const RegisterAsMemberButton = props => {
    const theme = useTheme();
    const styles = useStyles(theme);
    return (
        <TouchableOpacity {...props} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register as a member</Text>
            <AntDesign size={28} color="white" name="arrowright" />
        </TouchableOpacity>
    );
};

export const ViewDealsAndOffersButton = props => {
    const theme = useTheme();
    const styles = useStyles(theme);
    return (
        <TouchableOpacity {...props} style={styles.viewDealsAndOffersButton}>
            <View style={styles.registerButtonTextContainer}>
                <Text style={styles.registerButtonText}>View Deals and Offers</Text>
            </View>
            <View style={styles.nextIconContainer}>
                <AntDesign size={28} color="white" name="arrowright" />
            </View>
        </TouchableOpacity>
    );
};

const useStyles = theme => ({
    buttonStyle: {
        width: '100%',
        height: theme.hp('6%'),
        maxWidth: 400,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: theme.colors.primary,
        marginVertical: theme.hp('2%'),
        borderRadius: theme.wp('1.5%'),
    },
    titleStyle: {
        fontSize: 18,
        color: 'white',
        fontFamily: theme.fonts.regular,
    },
    forgotPasswordButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    forgotPasswordText: {
        fontFamily: theme.fonts.regular,
        color: 'black',
        fontSize: theme.fontSizes.default,
    },
    registerButton: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        paddingHorizontal: 15,
    },
    registerButtonTextContainer: {
        width: '90%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 15,
    },
    registerButtonText: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.normal,
        color: 'white',
        fontFamily: theme.fonts.bold,
    },
    viewDealsAndOffersButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: theme.borderRadius.normal,
        overflow: 'hidden',
    },
    nextIconContainer: {
        backgroundColor: theme.colors.primaryLight,
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
