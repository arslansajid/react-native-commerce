import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import commonStyles from '../../Styles/commonStyles';
import { height, width, totalSize } from 'react-native-dimension';
import colors from '../../../Themes/Colors';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={commonStyles.mainContainer}>
                <View style={{ marginTop: height(2) }}>
                    <Text style={commonStyles.h4}>Enter Your old Password</Text>
                    <TextInput
                        placeholder='Old Password'
                        style={styles.inputStyle}
                    />
                </View>
                <View style={{ marginTop: height(2) }}>
                    <Text style={commonStyles.h4}>Enter new password</Text>
                    <TextInput
                        placeholder='********'
                        style={styles.inputStyle}
                    />
                </View>
                <View style={{ marginTop: height(2) }}>
                    <Text style={commonStyles.h4}>Confirm new password</Text>
                    <TextInput
                        placeholder='********'
                        style={styles.inputStyle}
                    />
                </View>
                <TouchableOpacity style={[commonStyles.buttonColored, { width: width(90), borderRadius: 5, marginVertical: height(5) }]}>
                    <Text style={[commonStyles.h4, { color: '#FFFF' }]}>Change Password</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ChangePassword;

const styles = StyleSheet.create({
    inputStyle: {
        height: height(7),
        width: width(90),
        backgroundColor: colors.silver,
        fontSize: totalSize(1.5),
        borderRadius: 5
    }
})
