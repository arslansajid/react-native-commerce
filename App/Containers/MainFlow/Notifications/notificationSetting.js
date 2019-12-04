import React, { Component } from 'react';
import { View, Text, ProgressBarAndroid, Image, StyleSheet, ImageBackground, ActivityIndicator, Switch, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';
import { totalSize, height, width } from 'react-native-dimension';
import colors from '../../../Themes/Colors';
import commonStyles from '../../Styles/commonStyles';
class NotificationSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.maincontainer}>
                <View style={styles.componentContainer}>
                    <View style={styles.componentSubContainer}>
                        <Text style={commonStyles.h5}>Allow App Notification</Text>
                        <Switch />
                    </View>
                </View>
                {/* <View style={styles.componentContainer}>
                    <View style={styles.componentSubContainer}>
                        <View>
                            <Text style={commonStyles.h5}>Allow Location</Text>
                        </View>
                        <Switch />
                    </View>
                </View> */}
            </View>
        );
    }
}

export default NotificationSetting;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        alignItems: 'center'
    },
    componentContainer: {
        alignItems: 'center',
        width: width(90),
        borderBottomWidth: 1,
        borderBottomColor: colors.steel
    },
    componentSubContainer: {
        width: width(90),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height(2)
    },
})