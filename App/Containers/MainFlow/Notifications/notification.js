import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import commonStyles from '../../Styles/commonStyles';
import images from '../../../Themes/Images';
import colors from '../../../Themes/Colors';
import { Icon } from 'react-native-elements';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [1, 2, 3, 4, 5, 6, 7, 8]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginHorizontal: width(5), justifyContent: 'space-between', alignItems: 'center', marginVertical: height(2.5) }}>
                    <Text style={commonStyles.h2}>Notifications</Text>
                    <Icon name="settings-outline" type="material-community" size={totalSize(2.5)} onPress={() => this.props.navigation.navigate('notificationSetting')} />
                </View>
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.orders}
                        renderItem={({ item }) =>
                            <View style={styles.notificationCard}>
                                <Image source={images.pancakes} style={styles.notificationImg} />
                                <View style={{ width: width(70), backgroundColor: 'transparent', marginVertical: height(2) }}>
                                    <Text style={commonStyles.h5}>Your Order is on the Way</Text>
                                    <Text style={[commonStyles.h6, { color: 'grey', marginVertical: 5 }]}>It will be arrived on your door steps in a few minuts, we request you please insure that your phone is on</Text>
                                    <Text style={[commonStyles.h6, { color: colors.steel }]}>9:34PM</Text>
                                </View>
                                {/* <View style={{ position: 'absolute', right: totalSize(2) }}>
                                    <Icon name="delete-outline" type="material-community" color={colors.appColor1} size={totalSize(2.5)} />
                                </View> */}
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

export default Notification;

const styles = StyleSheet.create({
    notificationCard: {
        marginHorizontal: width(5),
        backgroundColor: '#ffff',
        borderRadius: 5,
        elevation: 2.5,
        //borderBottomWidth: 0.5,
        //borderBottomColor: colors.steel,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        marginVertical: height(1)
    },
    notificationImg: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: 5,
        marginVertical: height(1)
    }
})


