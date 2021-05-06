import {DefaultTheme} from 'react-native-paper';
import {Dimensions, Platform} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const isIos = Platform.OS === 'ios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const colors = {
    default: 'black',
    primary: 'black',
    primaryOpacity: '#ea920de5',
    primaryLight: '#fcb315',
    secondary: '#60c2d4',
    lightgray: '#dcdcdc',
    lightGray: '#D4D4D4',
    gray: '#AFAFAF',
    ghostwhite: 'ghostwhite',
    danger: '#f52f2f',
    success: '#4caf50',
    btnContinue: '#4caf50',
    overlayColor: 'rgba(0,0,0,0.5)',
    bgDark: '#e8e8e8',
    black: '#000000',
};

const fontSizes = {
    default: 15,
    normal: 20,
    large: 26,
    extraLarge: 28,
};

const fonts = {
    black: isIos ? 'Roboto-Black' : 'RobotoBlack',
    blackItalic: isIos ? 'Roboto-BlackItalic' : 'RobotoBlackItalic',
    regular: isIos ? 'Roboto-Regular' : 'RobotoRegular',
    italic: isIos ? 'Roboto-Italic' : 'RobotoItalic',
    medium: isIos ? 'Roboto-Medium' : 'RobotoMedium',
    bold: isIos ? 'Roboto-Bold' : 'RobotoBold',
    boldItalic: isIos ? 'Roboto-BoldItalic' : 'RobotoBoldItalic',
    semiBold: isIos ? 'Roboto-Medium' : 'RobotoMedium',
    extraBold: isIos ? 'Roboto-Bold' : 'RobotoBold',
    extraLight: isIos ? 'Roboto-BoldItalic' : 'RobotoBoldItalic',
    light: isIos ? 'Roboto-Light' : 'RobotoLight',
    lightItalic: isIos ? 'Roboto-LightItalic' : 'RobotoLightItalic',
    thinItalic: isIos ? 'Roboto-ThinItalic' : 'RobotoThinItalic',
};

const borderRadius = {
    normal: 4,
    large: 8,
    extraLarge: 12,
};

const styles = {
    h1: {
        fontSize: hp('4.5%'),
        fontFamily: fonts.bold,
        color: colors.default,
    },
    c1: {
        fontSize: hp('4.5%'),
        fontFamily: fonts.bold,
        color: colors.default,
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
    },
    c2: {
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.default,
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
    },
    c4: {
        fontSize: hp('2%'),
        fontFamily: fonts.bold,
        color: colors.default,
        width: '100%',
        textAlign: 'center',
    },
    h4: {
        fontSize: fontSizes.extraLarge,
        fontFamily: fonts.bold,
        color: colors.default,
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: fontSizes.extraLarge,
        fontFamily: fonts.bold,
        textTransform: 'uppercase',
    },
    subtitle: {
        fontSize: fontSizes.normal,
        fontFamily: fonts.bold,
        textTransform: 'uppercase',
    },
    description: {
        fontSize: fontSizes.normal,
        fontFamily: fonts.regular,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderWidth: 0.5,
        borderColor:'#0000003f',
        elevation: 4,
    },
};

export default {
    ...DefaultTheme,
    colors,
    fonts,
    fontSizes,
    borderRadius,
    styles,
    screenHeight,
    screenWidth,
    wp,
    hp,
};
