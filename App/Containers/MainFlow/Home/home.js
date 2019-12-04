import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension'
import colors from '../../../Themes/Colors';
import images from '../../../Themes/Images';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import type from '../../../Themes/Fonts';
import commonStyles from '../../Styles/commonStyles';
import FontistoIcon from 'react-native-vector-icons/Fontisto'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInstruction: true,
            showSignin: false,
            images: [
                'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/1/012234_01.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/61v9qNwZvsL._UL1000_.jpg',
                'https://cdn.shopify.com/s/files/1/1278/7797/products/air-jordan-1-retro-high-og-chicago-white-black-varsity-red-012234_3_1024x.jpg?v=1514412414',
                'https://cdn.shopify.com/s/files/1/0230/0485/products/robformat_copy_f5670ffe-82e1-436c-ac0f-5588dc8c66a2_large.jpg?v=1518651047'
            ],
            topTabs: ['Interests', 'Mens Wear', 'Womens Wear', 'Winter', 'Holiday', 'Party', 'Outing'],
            offers: [
                { title: 'For Professionals', image: images.waffleStack2, selected: true },
                { title: 'On Sale Now', image: images.waffleStack, selected: false },
                { title: 'Exclusive', image: images.waffleStack3, selected: true },
                { title: 'New Arrival', image: images.waffleStack, selected: true },
                { title: 'For Men', image: images.waffleStack2, selected: true },
                { title: 'On Sale Now', image: images.waffleStack, selected: false },
                { title: 'Exclusive', image: images.waffleStack3, selected: true },
                { title: 'New Arrival', image: images.waffleStack, selected: true },
            ],
            products: [
                { name: 'Waffel Light', image: images.p1, brand: 'K&C', color: 'Exclusive', price: 2.500, price2: 3.200, selected: false },
                { name: 'Brown Waffle', image: images.p5, brand: 'K&C', color: 'Limited', price: 2.500, price2: 3.200, selected: true },
                { name: 'Dark Brown 1', image: images.p3, brand: 'K&C', color: 'Exclusive', price: 2.500, price2: 3.200, selected: true },
                { name: 'pancake small', image: images.p4, brand: 'K&C', color: 'Limited', price: 2.500, price2: 3.200, selected: false },
                { name: 'Brown Waffle 1', image: images.p5, brand: 'K&C', color: 'Off-White', price: 2.500, price2: 3.200, selected: true },
            ],
            product2: [
                { name: 'Medium Cake', image: images.p4, brand: 'K&C', color: 'Exclusive', price: 2.500, price2: 3.200, selected: false },
                { name: 'Pancake 1X', image: images.p5, brand: 'K&C', color: 'Limited', price: 2.500, price2: 3.200, selected: true },
                { name: 'Dark Brown 1', image: images.p3, brand: 'K&C', color: 'Exclusive', price: 2.500, price2: 3.200, selected: true },
                { name: 'pancake small', image: images.p4, brand: 'K&C', color: 'Limited', price: 2.500, price2: 3.200, selected: false },
                { name: 'Brown Pan 1', image: images.p5, brand: 'K&C', color: 'Off-White', price: 2.500, price2: 3.200, selected: true },
            ],
            interests: [
                { title: 'Winter-Style', image: images.waffleStack3, },
                { title: 'Accessories', image: images.waffleStack3, },
                { title: 'Sneaker-Drops', image: images.waffleStack3, },
                { title: 'Holiday', image: images.waffleStack3, },
            ],
            categories: [
                { title: 'Waffles,Crepes Pancakes', image: images.waffleStack2, selected: true },
                { title: 'Gelato & Pastry', image: images.waffleStack, selected: false },
                { title: 'Toppings and Decorations', image: images.waffleStack3, selected: true },
                { title: 'Brands', image: images.waffleStack4, selected: true },
                { title: 'Equipments', image: images.waffleStack5, selected: true },
            ],
        };
    }

    render() {
        const navigate = this.props.navigation.navigate
        return (

            <View style={styles.mainContainer}>
                <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ position: 'absolute', left: width(5) }}>
                        <Icon name="menu" size={totalSize(2)} onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                    {/* <View style={{ position: 'absolute', left: width(5) }}>
                        <Icon name="md-photos" type="ionicon" size={totalSize(2.5)} onPress={()=>navigate('gallery')}/>
                    </View> */}
                    {/* <Text style={styles.h4}>Waffle World</Text> */}
                    <Image source={images.logo} resizeMode="contain" style={{ height: totalSize(7.5), width: totalSize(7.5) }} />
                    <View style={{ position: 'absolute', right: width(5) }}>
                        <Icon name="md-cart" type="ionicon" color={colors.appTextColor1} size={totalSize(2)} />
                    </View>

                </View>
                <View style={{}}>
                    <TouchableOpacity style={[commonStyles.InputConainer, { height: height(5), borderColor: colors.steel, alignSelf: 'center', borderRadius: 5 }]}>
                        <Icon name="search" color={colors.steel} size={totalSize(2.5)} />
                        <TextInput
                            //editable={false}
                            placeholder="Search products"
                            placeholderTextColor={colors.steel}
                            style={{ height: height(6), width: width(70), fontSize: totalSize(1.5), }}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: width(10), justifyContent: 'space-between', marginVertical: height(2) }}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigate('shopByCategory')}>
                            <FontistoIcon name="nav-icon-grid" color={colors.appTextColor1} size={totalSize(1.5)} />
                            <Text style={commonStyles.h6}>Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigate('offers')}>
                            <FontistoIcon name="fire" color={colors.appTextColor1} size={totalSize(1.5)} />
                            <Text style={commonStyles.h6}>Special Offers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigate('repeatOrders')}>
                            <FontistoIcon name="spinner-refresh" color={colors.appTextColor1} size={totalSize(1.5)} />
                            <Text style={commonStyles.h6}>Repeat Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{}}>
                        <View style={{ height: height(25) }}>
                            <Swiper width={width(100)} height={height(25)} paginationStyle={{ bottom: -height(2.5) }} autoplay dotStyle={{ height: totalSize(0.75), width: totalSize(1.5), borderRadius: 100 }} activeDotStyle={{ height: totalSize(0.75), width: totalSize(2.5), borderRadius: 100 }} dotColor={colors.steel} activeDotColor={colors.appColor1} style={{ backgroundColor: 'transparent' }}>
                                {
                                    this.state.offers.map((item, key) => {
                                        return (
                                            <View>
                                                <Image source={item.image} style={styles.offerImgStyle} />
                                                {/* <View style={styles.imgOverlayStyle}>
                                                        <Text style={[styles.h2, { color: '#ffffff' }]}>{item.title}</Text>
                                                        <Text style={[styles.h5, { color: '#ffffff' }]}>Start Shopping</Text>
                                                    </View> */}
                                            </View>
                                        )
                                    })
                                }
                            </Swiper>
                        </View>
                        <View style={{ marginVertical: height(2.5) }}>
                            <View style={{ marginHorizontal: width(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: height(2) }}>
                                <Text style={styles.h4}>Most Popular</Text>
                                <Text style={[commonStyles.h5, {}]} onPress={() => navigate('allProducts')}>View All</Text>
                                {/* <TouchableOpacity style={{ backgroundColor: colors.winterSale_txt1, borderRadius: 2.5 }}>
                                                        <Text style={[styles.h5, { marginHorizontal: 5, marginVertical: 2.5, color: "#ffffff" }]}>Shop Now</Text>
                                                    </TouchableOpacity> */}
                                {/* <Icon name="ios-arrow-down" type="ionicon" color={colors.winterSale_txt2} size={totalSize(2.5)} /> */}
                            </View>
                            <View style={{ width: width(100), marginVertical: height(2) }}>
                                <FlatList
                                    data={this.state.products}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({ item, key }) =>
                                        <TouchableOpacity key={key} style={{ marginHorizontal: width(5) }} onPress={() => navigate('productDetail')}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={item.image} resizeMode="contain" style={[styles.ProductImgStyle, {}]} />
                                                <View style={{ alignItems: 'center', marginTop: height(2) }}>
                                                    <Text style={[styles.h5, { fontWeight: 'bold' }]}>{item.name}</Text>
                                                    <Text style={[styles.h5, { marginVertical: height(0.5) }]}>{item.brand} x {item.color} </Text>
                                                    {/* <Text style={[styles.h5, { fontWeight: 'bold' }]}>${item.price} <Text style={[styles.h5, { fontWeight: 'normal', color: colors.steel }]}>${item.price2}</Text></Text> */}
                                                    {
                                                        item.selected ?
                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                <Text style={[styles.h5, { textDecorationLine: 'line-through' }]}>$2.500</Text>
                                                                <Text style={[styles.h5, { color: colors.appColor1 }]}>  $3.200</Text>
                                                            </View>
                                                            :
                                                            <View style={{}}>
                                                                <Text style={[styles.h5, {}]}>$2.500</Text>
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
                            {/* <View style={{ marginBottom: height(2.5), marginTop: height(1) }}>
                                    <TouchableOpacity style={{ backgroundColor: colors.appColor1, borderRadius: 100 }} onPress={() => navigate('allProducts')}>
                                        <Text style={[styles.h4, { marginHorizontal: 15, marginVertical: 7.5, color: "#ffffff" }]}>View Products</Text>
                                    </TouchableOpacity>
                                </View> */}
                        </View>
                        <View style={{ marginVertical: height(2.5) }}>
                            <View style={{ marginHorizontal: width(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: height(2) }}>
                                <Text style={styles.h4}>Instruction Videos</Text>
                                {/* <Text style={[commonStyles.h5, {}]}>View All</Text> */}
                                {/* <TouchableOpacity style={{ backgroundColor: colors.winterSale_txt1, borderRadius: 2.5 }}>
                                                        <Text style={[styles.h5, { marginHorizontal: 5, marginVertical: 2.5, color: "#ffffff" }]}>Shop Now</Text>
                                                    </TouchableOpacity> */}
                                {/* <Icon name="ios-arrow-down" type="ionicon" color={colors.winterSale_txt2} size={totalSize(2.5)} /> */}
                            </View>
                            <View style={{ marginVertical: height(2) }}>
                                <FlatList
                                    data={this.state.offers}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({ item, key }) =>
                                        <TouchableOpacity key={key} style={{ marginHorizontal: width(5) }} onPress={() => navigate('video')}>
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Image source={item.image} style={[styles.VideoThumbImage, {}]} />
                                                <View style={{ position: 'absolute', backgroundColor: '#00000080', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, right: 0, left: 0, bottom: 0 }}>
                                                    <Text style={[commonStyles.h6, { color: '#FFFFFF', margin: 5 }]}>How to use Waffle maker 2 </Text>
                                                </View>
                                                <View style={{ position: 'absolute' }}>
                                                    <Icon name="md-play-circle" type="ionicon" size={totalSize(5)} color={'#000000bf'} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                            {/* <View style={{ marginBottom: height(2.5), marginTop: height(1) }}>
                                    <TouchableOpacity style={{ backgroundColor: colors.appColor1, borderRadius: 100 }} onPress={() => navigate('allProducts')}>
                                        <Text style={[styles.h4, { marginHorizontal: 15, marginVertical: 7.5, color: "#ffffff" }]}>View Products</Text>
                                    </TouchableOpacity>
                                </View> */}
                        </View>
                        <View style={{ marginVertical: height(2.5) }}>
                            <View style={{ marginHorizontal: width(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: height(2) }}>
                                <Text style={styles.h4}>Categories</Text>
                                {/* <Text style={[commonStyles.h5, {}]}>View All</Text> */}
                                {/* <TouchableOpacity style={{ backgroundColor: colors.winterSale_txt1, borderRadius: 2.5 }}>
                                                        <Text style={[styles.h5, { marginHorizontal: 5, marginVertical: 2.5, color: "#ffffff" }]}>Shop Now</Text>
                                                    </TouchableOpacity> */}
                                {/* <Icon name="ios-arrow-down" type="ionicon" color={colors.winterSale_txt2} size={totalSize(2.5)} /> */}
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: height(2), flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                {
                                    this.state.categories.map((item, key) => {
                                        return (
                                            <TouchableOpacity key={key} style={{ marginVertical: height(1), marginLeft: width(5) }} onPress={() => navigate('video')}>
                                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image source={item.image} style={[styles.categoryImage, {}]} />
                                                    <View style={{ position: 'absolute', backgroundColor: '#00000080', borderRadius: 5, right: 0, left: 0, bottom: 0, top: 0, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={[commonStyles.h5, { color: '#FFFFFF', textAlign: 'center' }]}>{item.title}</Text>
                                                    </View>
                                                    {/* <View style={{ position: 'absolute' }}>
                                                        <Icon name="md-play-circle" type="ionicon" size={totalSize(5)} color={'#000000bf'} />
                                                    </View> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // alignItems: 'center',
        //backgroundColor: colors.silver
    },
    compContainer: {
        width: width(90),
        alignItems: 'flex-start',
        marginVertical: height(2.5)
    },
    h1: {
        fontSize: totalSize(5),
        color: colors.appTextColor1,
        //fontWeight: 'bold',
        fontFamily: type.appTextMedium
    },
    h2: {
        fontSize: totalSize(4),
        color: colors.appTextColor1,
        //fontWeight: 'bold',
        fontFamily: type.appTextMedium
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
        // fontWeight: 'bold',
        fontFamily: type.appTextMedium
    },
    h5: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor1,
        //fontWeight: 'bold',
        fontFamily: type.appTextRegular
    },
    h6: {
        fontSize: totalSize(1.25),
        color: colors.appTextColor1,
        // fontWeight: 'bold',
        fontFamily: type.appTextRegular
    },
    offerImgStyle: {
        height: height(25),
        width: width(100),
        //borderRadius: 10,
    },
    offer2ImgStyle: {
        height: height(50),
        width: width(90)
    },
    offer3ImgStyle: {
        height: height(20),
        width: width(95)
    },
    imgOverlayStyle: {
        height: height(40),
        width: width(100),
        //borderRadius: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040'
    },
    ofr3OverlayStyle: {
        height: height(20),
        width: width(95),
        //borderRadius: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040'
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
    VideoThumbImage: {
        height: height(20),
        width: width(35),
        borderRadius: 5,
        //position: 'absolute',
        //: 'center',
        //justifyContent: 'center',
        //backgroundColor: '#ffffff80'
    },
    categoryImage: {
        height: height(12.5),
        width: width(25),
        borderRadius: 5,
        //position: 'absolute',
        //: 'center',
        //justifyContent: 'center',
        //backgroundColor: '#ffffff80'
    },
    btnStyle: {
        height: height(8),
        width: width(90),
        borderRadius: 10,
        backgroundColor: colors.appColor1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        height: height(5),
        width: width(50),
        borderRadius: 100,
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
        //elevation: 5,
        borderWidth: 0.5,
        borderColor: colors.steel,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    inputStyle: {
        height: height(6),
        width: width(40),
        fontSize: totalSize(1.5)
    },
    imgStyle: {
        height: height(35),
        width: width(42.5),
        borderRadius: 10,
    },
    imgOverlay: {
        height: height(35),
        width: width(42.5),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff80',
        position: 'absolute',
    },
})