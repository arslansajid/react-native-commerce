import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, FlatList, Modal } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension'
import { Icon } from 'react-native-elements';
import colors from '../../../Themes/Colors';
import type from '../../../Themes/Fonts';
import images from '../../../Themes/Images';
import commonStyles from '../../Styles/commonStyles';
//import Modal from 'react-native-modal';
class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisibleFilter: false,
            isModalVisibleSort: false,
            filterBy: ['Shirt & Pent', 'Shoes', 'Jacket', 'Sandlen', 'Belt', 'Trouzers', 'Suit', 'Bag', 'Shirt'],
            Categories: [
                {
                    category: 'Category 12',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },
                {
                    category: 'Category 646',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },
                {
                    category: 'Category 66',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },
                {
                    category: 'Category 35131',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },
                {
                    category: 'Category 646',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },
                {
                    category: 'Category 646',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },
                {
                    category: 'Category 4s53d',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },
                {
                    category: 'Category 7as',
                    items: ['Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Air Jordan 1', 'Belt', 'Air Jordan 1', 'Suit', 'Air Jordan 1', 'Air Jordan 1', 'Shoes', 'Jacket', 'Sandlen', 'Air Jordan 1', 'Air Jordan 1', 'Suit', 'Bag']
                },

            ],
            items: [
                { title: 'Golden Waff B', image: images.p1, selected: true },
                { title: 'Air Waffle', image: images.p3, selected: false },
                { title: 'Athi 1', image: images.p4, selected: true },
                { title: 'Brown W 2', image: images.p5, selected: false },
                { title: 'Sport DS3', image: images.p3, selected: true },
                { title: 'Waffle 1', image: images.p1, selected: false },
                { title: 'Athi 1', image: images.p4, selected: true },
                { title: 'Waffle 2', image: images.p5, selected: false },
                { title: 'Brown DS3', image: images.p1, selected: true },
                { title: 'Waffle 1', image: images.p3, selected: false },
                { title: 'Athi 1', image: images.p4, selected: true },
                { title: 'Dark 2', image: images.p5, selected: false },
            ],
            sort: ['Designer', 'Fabric', 'Beliebtheit', 'Kategory', 'Sale', 'Style'],
            filters: ['Designer', 'Fabric', 'Beliebtheit'],
            multiSliderValue: [3, 7],
        };
    }
    multiSliderValuesChange = values => {
        this.setState({
            multiSliderValue: values,
        });
    };
    toggleModalFilter = () => {
        this.setState({ isModalVisibleFilter: !this.state.isModalVisibleFilter })
    }
    toggleModalSort = () => {
        this.setState({ isModalVisibleSort: !this.state.isModalVisibleSort })
    }
    static navigationOptions = {
        header: null,
        title: 'TShirts',

        headerRight: (
            <View>
                <Icon name="md-cart" type="ionicon" color={colors.winterSale_txt1} size={totalSize(2.5)} />
            </View>
        ),
        headerStyle: {
            backgroundColor: '#ffffff',
            elevation: 0
        },
        headerTintColor: colors.winterSale_txt1,
        headerTitleStyle: {
            fontSize: totalSize(2),
            fontFamily: type.winterSale_bold,
        },
    }

    render() {
        const navigate = this.props.navigation.navigate
        return (
            <View style={styles.mainContainer}>
                <View style={styles.RowCompContainer}>
                    <Icon name="ios-arrow-back" type="ionicon" color={"#000000"} size={totalSize(2.5)} onPress={() => this.props.navigation.goBack()} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={commonStyles.h4}>All</Text>
                        <Text style={commonStyles.h5}>75 Products</Text>
                    </View>
                    <Icon name="md-cart" type="ionicon" color={colors.winterSale_txt1} size={totalSize(2.5)} />
                </View>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={this.toggleModalFilter} style={{ backgroundColor: '#ffffff', borderRadius: 2.5, borderWidth: 0.5, borderColor: colors.winterSale_txt3, marginHorizontal: width(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginVertical: 5 }}>
                                <Icon name="settings" type="octicon" size={totalSize(2)} color={colors.winterSale_txt1} />
                                <Text style={[styles.h5, { marginLeft: 5 }]}>Filter</Text>
                            </View>
                        </TouchableOpacity>
                        <FlatList
                            horizontal
                            data={this.state.filterBy}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 2.5, borderWidth: 0.5, borderColor: colors.winterSale_txt3, marginRight: width(2) }}>
                                    <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                                        <Text style={[styles.h5, {}]}>{item}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </ScrollView>
                </View> */}
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{ width: width(90), marginHorizontal: width(5), flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: height(8) }}>
                                {
                                    this.state.items.map((i, k) => {
                                        return (
                                            <TouchableOpacity style={{ alignItems: 'center', marginVertical: 10, backgroundColor: 'transparent' }} onPress={() => navigate('productDetail')}>
                                                <Image source={i.image} resizeMode="contain" style={styles.ProductImgStyle} />
                                                <View style={{ position: 'absolute', right: 0, top: 0 }}>
                                                    <Icon name='heart-outline' type="material-community" color={colors.winterSale_txt3} size={totalSize(2.5)} />
                                                </View>
                                                <View style={{ alignItems: 'center', marginVertical: height(2) }}>
                                                    <Text style={[commonStyles.h5, { fontFamily: type.appTextMedium }]}>{i.title}</Text>
                                                    <Text style={[commonStyles.h5, { marginVertical: height(0.5) }]}>K&C x Brown</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={[commonStyles.h5, { textDecorationLine: 'line-through' }]}>$2.5</Text>
                                                        <Text style={[commonStyles.h5, { color: colors.appColor1 }]}>  $3.2</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <Modal
                    visible={this.state.isModalVisibleFilter}
                    transparent
                    animationType='slide'

                >
                    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
                        <View style={{ marginHorizontal: width(5), alignItems: 'center', marginVertical: height(2.5), justifyContent: 'center' }}>
                            <Text style={styles.h4}>Filter</Text>
                            <View style={{ position: 'absolute', left: 0 }}>
                                <Icon name="close" size={totalSize(3)} onPress={this.toggleModalFilter} />
                            </View>
                            <Text style={[styles.h5, { color: colors.steel, position: 'absolute', right: 0 }]}>Clear Filters</Text>
                        </View>
                        <View style={{ marginHorizontal: width(5), alignItems: 'flex-start', marginTop: height(5) }}>
                            <Text style={styles.h3}>Sort By</Text>
                        </View>
                        {
                            this.state.sort.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{ marginHorizontal: width(5), borderBottomWidth: 0.5, borderBottomColor: colors.steel }}>
                                        <View style={{ marginHorizontal: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: height(1.5) }}>
                                            <Text style={styles.h5}>{item}</Text>
                                            <View>
                                                {
                                                    item === 'Fabric' ?
                                                        <Icon name="radio-button-checked" type="material" size={totalSize(2)} onPress={this.toggleModalFilter} />
                                                        :
                                                        <Icon name="radio-button-unchecked" type="material" size={totalSize(2)} onPress={this.toggleModalFilter} />
                                                }
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                        <View style={{ marginHorizontal: width(5), alignItems: 'flex-start', marginTop: height(5) }}>
                            <Text style={styles.h3}>Filter By</Text>
                        </View>
                        {
                            this.state.filters.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{ marginHorizontal: width(5), borderBottomWidth: 0.5, borderBottomColor: colors.steel }}>
                                        <View style={{ marginHorizontal: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: height(1.5) }}>
                                            <Text style={styles.h5}>{item}</Text>
                                            <View>
                                                <Icon name="ios-arrow-forward" type="ionicon" size={totalSize(2)} onPress={this.toggleModalFilter} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </Modal>
            </View>
        );
    }
}

export default AllProducts;

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
        color: colors.winterSale_txt1,
        //  fontWeight: 'bold',
        fontFamily: type.winterSale_bold
    },
    h2: {
        fontSize: totalSize(4),
        color: colors.winterSale_txt1,
        //fontWeight: 'bold',
        fontFamily: type.winterSale_bold
    },
    h3: {
        fontSize: totalSize(3),
        color: colors.winterSale_txt1,
        //fontWeight: 'bold',
        fontFamily: type.winterSale_bold
    },
    h4: {
        fontSize: totalSize(2),
        color: colors.winterSale_txt1,
        //  fontWeight: 'bold',
        fontFamily: type.winterSale_bold
    },
    h5: {
        fontSize: totalSize(1.5),
        color: colors.winterSale_txt1,
        //fontWeight: 'bold',
        fontFamily: type.winterSale_normal
    },
    h6: {
        fontSize: totalSize(1.25),
        color: colors.winterSale_txt3,
        // fontWeight: 'bold',
        fontFamily: type.winterSale_normal
    },
    BorderedButtonView: {
        height: height(6),
        width: width(44),
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
        backgroundColor: colors.winterSale_txt1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ProductImgStyle: {
        height: height(25),
        width: width(40),
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
        //borderRadius: 10,
        //position: 'absolute',
        //: 'center',
        //justifyContent: 'center',
        //backgroundColor: '#ffffff80'
    },
    inputStyle: {
        height: height(6),
        width: width(40),
        fontSize: totalSize(1.5),
        // backgroundColor: 'red',
        //marginHorizontal: 10
    },
    inputContainer: {
        height: height(5),
        width: width(50),
        borderRadius: 100,
        backgroundColor: '#ffffff',
        //marginHorizontal: 10,
        //elevation: 5,
        borderWidth: 0.5,
        borderColor: colors.steel,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

})