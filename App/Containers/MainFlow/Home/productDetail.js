import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, FlatList, Picker } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension'
import colors from '../../../Themes/Colors';
import type from '../../../Themes/Fonts';
import images from '../../../Themes/Images';
import { Icon } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import commonStyles from '../../Styles/commonStyles';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false,
            showDescription2: true,
            showDescription3: true,
            showDescription4: true,
            images: [
                'http://www.waffleworld.com.cy/album/Boat.gif',
                'http://www.waffleworld.com.cy/album/Boat.gif',
                'http://www.waffleworld.com.cy/album/Boat.gif',
                'http://www.waffleworld.com.cy/album/Boat.gif',
                'http://www.waffleworld.com.cy/album/Boat.gif',
                'http://www.waffleworld.com.cy/album/Boat.gif',
            ],
            descrption: [
                { title: 'Material', detail: '70% Leather, 20% Textile' },
                { title: 'Sizes', detail: '36,37,38,39,40,41' },
                { title: 'Gender', detail: 'Women' },
                { title: 'Country', detail: 'Vietnam' }
            ],
            cate: ['Related Products', 'Featured Products', 'Hot Products'],
            products: [
                { name: 'Waffle', image: images.p1, brand: 'K&C', color: 'Golden', price: 2.5, price2: 3.200 },
                { name: 'Waffle', image: images.p3, brand: 'Gormet', color: 'Brown', price: 4.25, price2: 3.200 },
                { name: 'Waffle', image: images.p4, brand: 'BakerWorld', color: 'Off-White', price: 3.5, price2: 3.200 },
                { name: 'Waffle', image: images.p5, brand: 'Malmo', color: 'Dark', price: 6.5, price2: 3.200 },
                { name: 'Waffle', image: images.p2, brand: 'K&C', color: 'Off-White', price: 9, price2: 3.200 },
            ],
        };
    }

    render() {
        const navigate = this.props.navigation.navigate
        return (
            <View style={styles.mainContainer}>
                <View style={styles.RowCompContainer}>
                    <View>
                        <Icon name="ios-arrow-round-back" type="ionicon" size={totalSize(4)} onPress={() => this.props.navigation.goBack()} />
                    </View>
                    <View>
                        <Icon name="md-cart" type="ionicon" color={colors.winterSale_txt1} size={totalSize(2.5)} />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: 'center' }}>
                        {/* <View style={styles.compContainer}>
                            <View>
                                <Icon name="ios-arrow-round-back" type="ionicon" size={totalSize(5)} onPress={() => this.props.navigation.goBack()} />
                            </View>
                        </View> */}
                        <View style={{ height: height(60), backgroundColor: 'transparent' }}>
                            <SliderBox
                                images={this.state.images}
                                inactiveDotColor={colors.steel}
                                dotStyle={{ height: totalSize(1), width: totalSize(1) }}
                                dotColor={'#000000'}
                                sliderBoxHeight={height(60)}
                                paginationBoxStyle={{ bottom: -20 }}
                            />
                            <View style={{ position: 'absolute', top: 0, right: 0 }}>
                                <Icon name="heart-outline" reverseColor="grey" color='transparent' reverse type="material-community" size={totalSize(2.5)} />
                            </View>
                            <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
                                <Icon name="share" type="feather" reverseColor="grey" color='transparent' reverse size={totalSize(2.5)} />
                            </View>
                        </View>
                        <View style={[styles.compContainer, { alignItems: 'center' }]}>
                            <Text style={[styles.h4, {}]}>Waffle Light Brown</Text>
                            <Text style={[styles.h5, { fontWeight: 'normal' }]}>K&C</Text>
                            <Text style={[styles.h3, { fontWeight: 'normal' }]}>$6.5</Text>
                        </View>
                        {/* <View style={[{}]}>
                            <View style={styles.BorderedButtonView}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{ height: height(8), width: width(80) }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ size: itemValue })
                                    }>
                                    <Picker.Item label="Select Size" value="8" />
                                    <Picker.Item label="8" value="8" />
                                    <Picker.Item label="8.5" value="8" />
                                    <Picker.Item label="8.75" value="8" />
                                    <Picker.Item label="9" value="9" />
                                    <Picker.Item label="9.2" value="9" />
                                    <Picker.Item label="9.5" value="9" />
                                </Picker>
                            </View>
                        </View> */}
                        <View style={{ backgroundColor: 'white', width: width(100), alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => this.setState({ showDescription: !this.state.showDescription })} >
                                <View style={[styles.RowCompContainer, {}]}>
                                    <Text style={[styles.h4, { fontSize: totalSize(1.5) }]}>Product Description</Text>
                                    <Icon name={this.state.showDescription ? "ios-arrow-down" : "ios-arrow-up"} type="ionicon" size={totalSize(2.5)} />
                                </View>
                            </TouchableOpacity>
                            <View style={[styles.compContainer, { marginVertical: 0, marginBottom: 2 }]}>
                                <Text style={[styles.h6, { color: 'grey' }]}>
                                    This is the detail and description of this light brown waffle This is the detail and description of this light brown waffle This is the detail and description of this light brown waffle This is the detail and description of this light brown waffle
                                </Text>

                            </View>
                        </View>
                        {/* <View style={styles.compContainer}>
                            <TouchableOpacity style={[, { borderWidth: 0.5, borderColor: colors.steel, borderRadius: 2.5 }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: totalSize(1) }}>
                                    <Text style={[styles.h4, { size: totalSize(1.75) }]}>Share   </Text>
                                    <Icon name="share" type="feather" color="#000000" size={totalSize(2)} />
                                </View>
                            </TouchableOpacity>
                        </View> */}
                        <View style={{ backgroundColor: 'white', alignItems: 'center', marginVertical: height(2.5) }}>
                            <View style={{ width: width(90), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: height(2) }}>
                                <Text style={[styles.h5, { fontWeight: 'bold' }]}>Related Products</Text>
                                <Text style={[styles.h5, {}]} onPress={() => navigate('allProducts')}>See All</Text>
                            </View>
                            <View style={{ width: width(100), marginVertical: height(2) }}>
                                <FlatList
                                    data={this.state.products}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({ item, key }) =>
                                        <TouchableOpacity key={key} style={{ marginHorizontal: width(5) }}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={item.image} resizeMode="contain" style={[styles.ProductImgStyle, {}]} />
                                                <View style={{ alignItems: 'center', marginTop: height(2) }}>
                                                    <Text style={[commonStyles.h5, { fontFamily: type.appTextMedium }]}>{item.name}</Text>
                                                    <Text style={commonStyles.h5}>{item.brand} x {item.color} </Text>
                                                    <Text style={[commonStyles.h5, { color: colors.appColor1 }]}>${item.price}</Text>
                                                </View>
                                                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                                                    <Icon name="heart" type="evilicon" size={totalSize(2.5)} color={colors.winterSale_txt1} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        </View>
                        <View style={[styles.RowCompContainer, { justifyContent: 'space-evenly' }]}>
                            <View style={{ width: width(40), alignItems: 'center' }}>
                                <Icon name="box" type="entypo" size={totalSize(7.5)} color={colors.winterSale_txt2} />
                                <Text style={[styles.h4, { fontSize: totalSize(1.5) }]}>Free Shipping In 48h</Text>
                            </View>
                            <View style={{ width: width(40), alignItems: 'center' }}>
                                <Text style={[styles.h5, { textAlign: 'center', color: 'grey' }]}>set one shipping rate for all buyers</Text>
                            </View>
                        </View>
                        <View style={[styles.RowCompContainer, { justifyContent: 'space-evenly' }]}>
                            <View style={{ width: width(40), alignItems: 'center' }}>
                                <Icon name="restore-clock" type="material-community" size={totalSize(7.5)} color={colors.winterSale_txt2} />
                                <Text style={[styles.h4, { fontSize: totalSize(1.5) }]}>Free Returns</Text>
                            </View>
                            <View style={{ width: width(40), alignItems: 'center' }}>
                                <Text style={[styles.h5, { textAlign: 'center', color: 'grey' }]}>Research similar item's shipping cost</Text>
                            </View>
                        </View>
                        <View style={[styles.RowCompContainer, { justifyContent: 'space-evenly' }]}>
                            <View style={{ width: width(40), alignItems: 'center' }}>
                                <Icon name="tag-text-outline" type="material-community" size={totalSize(7.5)} color={colors.winterSale_txt2} />
                                <Text style={[styles.h4, { fontSize: totalSize(1.5) }]}>Best Price Guaranteed</Text>
                            </View>
                            <View style={{ width: width(40), alignItems: 'center' }}>
                                <Text style={[styles.h5, { textAlign: 'center', color: 'grey' }]}>Buyers love free shipping</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: height(5) }}></View>
                    </View>
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 0 }}>
                    <View style={{ backgroundColor: '#ffff', width: width(100), alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.coloredButtonView, { marginVertical: height(2) }]}>
                            <Text style={[commonStyles.h4, { color: '#ffff' }]}>Order Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default ProductDetail;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: colors.silver
    },
    compContainer: {
        width: width(90),
        alignItems: 'flex-start',
        marginVertical: height(2.5)
    },
    RowCompContainer: {
        width: width(90),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height(2.5)
    },
    h1: {
        fontSize: totalSize(5),
        color: colors.appTextColor1,
        //  fontWeight: 'bold',
        fontFamily: type.appTextBold
    },
    h2: {
        fontSize: totalSize(4),
        color: colors.appTextColor1,
        //fontWeight: 'bold',
        fontFamily: type.appTextBold
    },
    h3: {
        fontSize: totalSize(3),
        color: colors.appTextColor1,
        //fontWeight: 'bold',
        fontFamily: type.appTextMedium
    },
    h4: {
        fontSize: totalSize(2),
        color: colors.appTextColor1,
        //  fontWeight: 'bold',
        fontFamily: type.appTextMedium
    },
    h5: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor2,
        //fontWeight: 'bold',
        fontFamily: type.winterSale_normal
    },
    h6: {
        fontSize: totalSize(1.25),
        color: colors.appTextColor2,
        // fontWeight: 'bold',
        fontFamily: type.winterSale_normal
    },
    BorderedButtonView: {
        height: height(7),
        width: width(90),
        borderWidth: 0.5,
        borderColor: colors.winterSale_txt1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    coloredButtonView: {
        height: height(8),
        width: width(90),
        // borderWidth: 0.5,
        // borderColor: colors.winterSale_txt1,
        backgroundColor: colors.appColor1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ProductImgStyle: {
        height: totalSize(12),
        width: totalSize(10),
        //borderRadius: 10,
        //position: 'absolute',
        //: 'center',
        //justifyContent: 'center',
        //backgroundColor: '#ffffff80'
    },

})