import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { totalSize, height, width } from 'react-native-dimension';
import colors from '../../Themes/Colors';
import type from '../../Themes/Fonts';

export default StyleSheet.create({
    bgContainer: {
        flex: 1,
        height: null,
        width: null
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    h1: {
        fontSize: totalSize(5),
        color: colors.appTextColor1,
        fontFamily: type.appTextMedium
    },
    h2: {
        fontSize: totalSize(4),
        color: colors.appTextColor1,
        fontFamily: type.appTextMedium
    },
    h3: {
        fontSize: totalSize(3),
        color: colors.appTextColor1,
        fontFamily: type.appTextMedium
    },
    h4: {
        fontSize: totalSize(2),
        color: colors.appTextColor1,
        fontFamily: type.appTextMedium
    },
    h5: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor1,
        fontFamily: type.appTextRegular
    },
    h6: {
        fontSize: totalSize(1.25),
        color: colors.appTextColor1,
        fontFamily: type.appTextRegular
    },
    logoStyle: {
        height: totalSize(30),
        width: totalSize(30)
    },
    smalllogoStyle: {
        height: totalSize(20),
        width: totalSize(20)
    },
    InputConainer: {
        width: width(80),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: colors.appColor1
    },
    buttonColored: {
        height: height(7),
        width: width(80),
        backgroundColor: colors.appColor1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBorderd: {
        height: height(7),
        width: width(80),
        //backgroundColor: colors.appColor1,
        borderWidth: 1,
        borderColor: colors.appColor1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: totalSize(2),
        color: '#ffff',
        fontFamily: type.appTextMedium
    },
    inputStyle: {
        height: height(7),
        width: width(65),
        fontSize: totalSize(2),
        color: '#000000'
        //backgroundColor: colors.appColor1,
        // borderWidth: 1,
        // borderColor: colors.appColor1,
        // borderRadius: 100,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})
