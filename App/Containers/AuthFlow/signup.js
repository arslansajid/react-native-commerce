import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, ActivityIndicator, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import commonStyles from '../Styles/commonStyles';
import images from '../../Themes/Images';
import { height, totalSize, width } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import colors from '../../Themes/Colors';
import type from '../../Themes/Fonts';
import Modal from 'react-native-modal';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRequestSendModalVisible: false
        };
    }
    toggleModalRequestSend = () => {
        this.setState({ isRequestSendModalVisible: !this.state.isRequestSendModalVisible })
    }
    sendRequest = () => {
        this.toggleModalRequestSend()
        setTimeout(() => { this.toggleModalRequestSend(); this.props.navigation.navigate('signin'); }, 3000)
    }
    render() {
        const navigate = this.props.navigation.navigate
        return (
            <ImageBackground source={images.waffleStack3} style={commonStyles.bgContainer} >
                <View style={[commonStyles.mainContainer, { backgroundColor: '#ffffff80' }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={images.logo} resizeMode="contain" style={commonStyles.smalllogoStyle} />
                            <View style={commonStyles.InputConainer}>
                                <Icon name="person" color={colors.appColor1} size={totalSize(2.5)} />
                                <TextInput
                                    placeholder="Full Name"
                                    placeholderTextColor="#000000"
                                    style={commonStyles.inputStyle}
                                />
                            </View>
                            <View style={[commonStyles.InputConainer, { marginTop: height(2.5) }]}>
                                <Icon name="building" type="font-awesome" color={colors.appColor1} size={totalSize(2.5)} />
                                <TextInput
                                    placeholder="Company Name"
                                    placeholderTextColor="#000000"
                                    style={commonStyles.inputStyle}
                                />
                            </View>
                            <View style={[commonStyles.InputConainer, { marginTop: height(2.5) }]}>
                                <Icon name="location-on" type="material" color={colors.appColor1} size={totalSize(2.5)} />
                                <TextInput
                                    placeholder="Address"
                                    placeholderTextColor="#000000"
                                    style={commonStyles.inputStyle}
                                />
                            </View>
                            <View style={[commonStyles.InputConainer, { marginTop: height(2.5) }]}>
                                <Icon name="phone" color={colors.appColor1} size={totalSize(2.5)} />
                                <TextInput
                                    placeholder="Telephone"
                                    placeholderTextColor="#000000"
                                    style={commonStyles.inputStyle}
                                />
                            </View>
                            <View style={[commonStyles.InputConainer, { marginTop: height(2.5) }]}>
                                <Icon name="email" color={colors.appColor1} size={totalSize(2.5)} />
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="#000000"
                                    style={commonStyles.inputStyle}
                                />
                            </View>
                            <View style={{ marginVertical: height(5), alignItems: 'center' }}>
                                <TouchableOpacity style={commonStyles.buttonColored} onPress={this.sendRequest}>
                                    <Text style={[commonStyles.textButton, {}]}>Send Request</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={commonStyles.h5}>Already have an account? <Text style={{ color: colors.appColor1, fontFamily: type.appTextMedium }} onPress={() => navigate('signin')}>Signin</Text></Text>
                        </View>
                    </ScrollView>
                </View>
                <Modal
                    isVisible={this.state.isRequestSendModalVisible}
                // onBackdropPress={this.toggleModalRequestSend}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: width(80), backgroundColor: '#FFFF', borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ alignItems: 'center', marginVertical: height(5) }}>
                                <Icon name="md-checkmark-circle-outline" type="ionicon" color={'lightgreen'} size={totalSize(10)} />
                                <Text style={commonStyles.h4}>Your Request has been send</Text>
                                <View style={{ width: width(60), alignItems: 'center' }}>
                                    <Text style={[commonStyles.h5, { textAlign: 'center', marginTop: height(1) }]}>We'll contact you in 2-3 working days and discus your request</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        );
    }
}

export default Signup;
