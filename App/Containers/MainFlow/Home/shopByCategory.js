import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import commonStyles from '../../Styles/commonStyles';
import images from '../../../Themes/Images';
import { height, width, totalSize } from 'react-native-dimension';
import colors from '../../../Themes/Colors';
import type from '../../../Themes/Fonts';
import { Icon } from 'react-native-elements';

class ShopByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { title: 'Waffles,Crepes Pancakes', image: images.waffleStack2, selected: true },
                { title: 'Gelato & Pastry', image: images.waffleStack, selected: false },
                { title: 'Toppings and Decorations', image: images.waffleStack3, selected: true },
                { title: 'Brands', image: images.waffleStack4, selected: true },
                { title: 'Equipments', image: images.waffleStack5, selected: true },
            ],
            products: [
                { name: 'Waffel Light', image: images.p1, brand: 'K&C', color: 'Exclusive', price: 2.500, price2: 3.200, selected: false },
                { name: 'Brown Waffle', image: images.p5, brand: 'K&C', color: 'Limited', price: 2.500, price2: 3.200, selected: true },
                { name: 'Dark Brown 1', image: images.p3, brand: 'K&C', color: 'Exclusive', price: 2.500, price2: 3.200, selected: true },
                { name: 'pancake small', image: images.p4, brand: 'K&C', color: 'Limited', price: 2.500, price2: 3.200, selected: false },
                { name: 'Brown Waffle 1', image: images.p5, brand: 'K&C', color: 'Off-White', price: 2.500, price2: 3.200, selected: true },
            ],
        };
    }

    render() {
        const navigate=this.props.navigation.navigate
        return (
            <View style={commonStyles.mainContainer}>
                <FlatList
                    data={this.state.categories}
                    renderItem={({ item }) =>
                        <View style={{ marginBottom: height(2.5) }}>
                            <View>
                                <Image source={item.image} style={styles.categoryImg} />
                                <View style={{ backgroundColor: '#00000080', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={[commonStyles.h3, { color: '#FFFF' }]}>{item.title}</Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: height(2) }}>
                                <FlatList
                                    data={this.state.products}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({ item, key }) =>
                                        <TouchableOpacity key={key} style={{ marginHorizontal: width(5) }} onPress={() => navigate('productDetail')}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={item.image} resizeMode="contain" style={[styles.ProductImgStyle, {}]} />
                                                <View style={{ alignItems: 'center', marginTop: height(1) }}>
                                                    <Text style={[commonStyles.h5, { fontFamily: type.appTextMedium }]}>{item.name}</Text>
                                                    <Text style={[commonStyles.h5, { marginVertical: height(0.5) }]}>{item.brand} x {item.color} </Text>
                                                    {/* <Text style={[styles.h5, { fontWeight: 'bold' }]}>${item.price} <Text style={[styles.h5, { fontWeight: 'normal', color: colors.steel }]}>${item.price2}</Text></Text> */}
                                                    {
                                                        item.selected ?
                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                <Text style={[commonStyles.h5, { textDecorationLine: 'line-through' }]}>$2.500</Text>
                                                                <Text style={[commonStyles.h5, { color: colors.appColor1 }]}>  $3.200</Text>
                                                            </View>
                                                            :
                                                            <View style={{}}>
                                                                <Text style={[commonStyles.h5, {}]}>$2.500</Text>
                                                            </View>
                                                    }
                                                </View>
                                                <View style={{ position: 'absolute', top: 5, right: 5 }}>
                                                    <Icon name="heart" type="evilicon" size={totalSize(2.5)} color={colors.appColor1} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

export default ShopByCategory;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    categoryImg: {
        height: height(20),
        width: width(100)
    },
    ProductImgStyle: {
        height: height(20),
        width: width(30),
        //borderRadius: 10,
        //position: 'absolute',
        //: 'center',
        //justifyContent: 'center',
        //backgroundColor: '#ffffff80'
    },
})