import React, { Component } from 'react';
import { View, Text, ProgressBarAndroid, Picker, StyleSheet, ImageBackground, ActivityIndicator, Switch, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';
import { totalSize, height, width } from 'react-native-dimension';
import colors from '../../../Themes/Colors';
import commonStyles from '../../Styles/commonStyles';
class Language extends Component {
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
                        <Text style={commonStyles.h5}>Your Language</Text>
                        <View style={{ backgroundColor: colors.steel, borderRadius: 5 }}>
                            <Picker
                                selectedValue={this.state.language}
                                style={{ height: height(8), width: width(50), }}
                                mode="dropdown"
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="English" value="java" />
                                <Picker.Item label="Spanish" value="js" />
                                <Picker.Item label="US English" value="js" />
                                <Picker.Item label="Chinees" value="js" />
                                <Picker.Item label="Urdu" value="js" />
                                <Picker.Item label="Arabi" value="js" />
                            </Picker>
                        </View>
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

export default Language;

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