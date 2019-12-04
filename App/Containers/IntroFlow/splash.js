import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native';
import commonStyles from '../Styles/commonStyles';
import images from '../../Themes/Images';
import { height } from 'react-native-dimension';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount = () => {
        setTimeout(() => { this.props.navigation.navigate('Auth') }, 2500)
    }
    render() {
        return (
            <ImageBackground source={images.waffleStack2} style={commonStyles.bgContainer} >
                <View style={[commonStyles.mainContainer, { justifyContent: 'center', backgroundColor: '#ffffff80' }]}>
                    <Image source={images.logo} resizeMode="contain" style={commonStyles.logoStyle} />
                    <View style={{ position: 'absolute', bottom: height(5) }}>
                        <ActivityIndicator color="#000000" size="small" />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Splash;
