import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, ActivityIndicator, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import commonStyles from '../Styles/commonStyles';
import images from '../../Themes/Images';
import { height, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import colors from '../../Themes/Colors';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const navigate = this.props.navigation.navigate
        return (
            <ImageBackground source={images.waffleStack3} style={commonStyles.bgContainer} >
                <View style={[commonStyles.mainContainer, { backgroundColor: '#ffffff80', justifyContent: 'center' }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={images.logo} resizeMode="contain" style={commonStyles.smalllogoStyle} />
                            <View style={{ marginVertical: height(10) }}>
                                <View style={commonStyles.InputConainer}>
                                    <Icon name="email" color={colors.appColor1} size={totalSize(2.5)} />
                                    <TextInput
                                        placeholder="Email"
                                        placeholderTextColor="#000000"
                                        style={commonStyles.inputStyle}
                                    />
                                </View>
                                <View style={[commonStyles.InputConainer, { marginTop: height(2.5) }]}>
                                    <Icon name="lock" color={colors.appColor1} size={totalSize(2.5)} />
                                    <TextInput
                                        placeholder="Password"
                                        secureTextEntry
                                        placeholderTextColor="#000000"
                                        style={commonStyles.inputStyle}
                                    />
                                </View>
                            </View>
                            <View style={{ marginVertical: height(5), alignItems: 'center' }}>
                                <TouchableOpacity style={commonStyles.buttonColored} onPress={() => navigate('App')}>
                                    <Text style={[commonStyles.textButton, {}]}>Signin</Text>
                                </TouchableOpacity>
                                <Text style={[commonStyles.h5, { marginVertical: height(2.5) }]}>OR</Text>
                                <TouchableOpacity style={[commonStyles.buttonBorderd, {}]} onPress={() => navigate('signup')}>
                                    <Text style={[commonStyles.textButton, { color: colors.appColor1 }]}>Request an Account</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default Signin;
