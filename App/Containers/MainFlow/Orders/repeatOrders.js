import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import commonStyles from '../../Styles/commonStyles';
import images from '../../../Themes/Images';
import colors from '../../../Themes/Colors';
import { Icon } from 'react-native-elements';

class RepeatOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [1, 2, 3, 4, 5, 6, 7, 8]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <View style={{ marginHorizontal: width(5), alignItems: 'flex-start', marginVertical: height(2.5) }}>
                    <Text style={commonStyles.h2}>Repeat Orders</Text>
                </View> */}
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.orders}
                        renderItem={({ item }) =>
                            <View style={styles.orderCard}>
                                <Image source={images.p3} resizeMode="contain" style={styles.orderImg} />
                                <View style={{ width: width(65), backgroundColor: 'transparent', marginVertical: height(2) }}>
                                    <Text style={commonStyles.h4}>Waffle Light Brown <Text style={commonStyles.h5}>X 3</Text></Text>
                                    <Text style={commonStyles.h5}>$56</Text>
                                    <Text style={[commonStyles.h6, { color: colors.steel }]}>12-19-2018 at 09:34PM</Text>
                                </View>
                                <View style={{ position: 'absolute', right: totalSize(2) }}>
                                    <Icon name="delete-outline" type="material-community" color={colors.appColor1} size={totalSize(2.5)} />
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

export default RepeatOrders;

const styles = StyleSheet.create({
    orderCard: {
        marginHorizontal: width(5),
        //backgroundColor: '#ffff',
        // borderRadius: 5,
        // elevation: 2.5,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.steel,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: height(1)
    },
    orderImg: {
        height: totalSize(7.5),
        width: totalSize(7.5),
        //borderRadius: 2.5
    }
})