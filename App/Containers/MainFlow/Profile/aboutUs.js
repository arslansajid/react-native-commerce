import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { totalSize, height, width } from 'react-native-dimension';
import colors from '../../../Themes/Colors';
import type from '../../../Themes/Fonts';
import commonStyles from '../../Styles/commonStyles';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          <View style={{ width: width(90), marginVertical: height(5), marginHorizontal: width(5), backgroundColor: 'white', borderRadius: 10, elevation: 10, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginVertical: height(3), width: width(80), alignItems: 'center' }}>
              <Text style={commonStyles.h4}>Waffle World</Text>
              <Text style={[commonStyles.h5, { textAlign: 'justify' }]}>This is Our Story and History That describes the age of our system,This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system  This is Our Story and History That describes the age of our system. This is Our Story and History That describes the age of our system. This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system This is Our Story and History That describes the age of our system    </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AboutUs;
