import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const fullWidth = Dimensions.get('window').width;


export const colors = {
    accent: "#F3534A",
    primary: "#0AC4BA",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
    grayLight: "#C5CCD6",
    grayLightTransparent: "rgba(197,204,214,0.20)",
    greenPrimary: "#0AC4BA",
    greenSecondary: "#2BDA8E",
    greenLightTransparent: "rgba(41,216,143,0.20)",
  };
  


export const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,
    headerHeight: 112, // base * 7
    lineHeight: 24,
  
    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,
};



export const weight = {
    light: "200",
    regular: "normal",
    semibold: "500",
    bold: "bold",
};



export const formStyles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        height: sizes.base * 3,
        borderRadius: sizes.radius,
        opacity: 0.8,
        backgroundColor: colors.greenPrimary,
        
        width: '80%', // Default but subject to overwrite
        marginVertical: sizes.padding, // Default but subject to overwrite
    },
    btnShadow: {
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },  
    btnText: {
        textAlign: "center",
        fontSize: sizes.font,
        fontWeight: weight.semibold,
        color: colors.white // Default but subject to overwrite
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: fullWidth,
        backgroundColor: colors.white,
    },
    containerSub: {
        //alignItems: 'flex-start',
        width: '80%'
    },
    title: {
        //textAlign: 'center',
        marginBottom: sizes.padding / 2,
        //fontFamily: 'Palatino-Bold',
        fontSize: sizes.h1,
        fontWeight: "bold",
        color: colors.black,
        //textTransform: 'uppercase',
    },
    textInput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.gray2,
        borderRadius: 0,
        borderWidth: 0,
        fontSize: sizes.body,
        fontWeight: '500',
        color: colors.black,
        height: sizes.base * 3,
    },
    
    
    
    error: {
        color: colors.accent,
        fontWeight: '500',
        fontSize: sizes.body,
    },
});