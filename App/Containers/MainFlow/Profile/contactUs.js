import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { totalSize, height, width } from 'react-native-dimension';
import colors from '../../../Themes/Colors';
import type from '../../../Themes/Fonts';
import commonStyles from '../../Styles/commonStyles';

class ContactUs extends Component {
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
            <View style={{ marginVertical: height(5), width: width(80), alignItems: 'center' }}>
              <Text style={commonStyles.h4}>Our Contacts</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(2.5) }}>
                <Icon name="phone" size={totalSize(2.5)} />
                <Text style={[commonStyles.h5, { marginHorizontal: 10 }]}>+023356826565453435</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(2.5) }}>
                <Icon name="email" size={totalSize(2.5)} />
                <Text style={[commonStyles.h5, { marginHorizontal: 10 }]}>waffleWorld005@gmail.com</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ContactUs;
