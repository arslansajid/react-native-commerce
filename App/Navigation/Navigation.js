import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { totalSize, height, width } from 'react-native-dimension';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Splash from '../Containers/IntroFlow/splash'
import Signin from '../Containers/AuthFlow/signin'
import Signup from '../Containers/AuthFlow/signup'
import Home from '../Containers/MainFlow/Home/home'
import Orders from '../Containers/MainFlow/Orders/orders'
import Offers from '../Containers/MainFlow/Offers/offers'
import Notification from '../Containers/MainFlow/Notifications/notification'
import Profile from '../Containers/MainFlow/Profile/profile'
import colors from '../Themes/Colors'
import { Icon } from 'react-native-elements'
import ProductDetail from '../Containers/MainFlow/Home/productDetail';
import AllProducts from '../Containers/MainFlow/Home/allProducts';
import Gallery from '../Containers/MainFlow/Home/gallery';
import Favourites from '../Containers/MainFlow/Favourites/favourites';
import images from '../Themes/Images';
import commonStyles from '../Containers/Styles/commonStyles';
import type from '../Themes/Fonts';
import RepeatOrders from '../Containers/MainFlow/Orders/repeatOrders';
import AboutUs from '../Containers/MainFlow/Profile/aboutUs';
import TermsAndCond from '../Containers/MainFlow/Profile/Terms&Cond';
import PrivacyPolicy from '../Containers/MainFlow/Profile/privacyPolicy';
import ContactUs from '../Containers/MainFlow/Profile/contactUs';
import NotificationSetting from '../Containers/MainFlow/Notifications/notificationSetting';
import Language from '../Containers/MainFlow/Profile/language';
import ChangePassword from '../Containers/MainFlow/Profile/changePassword';
import ShopByCategory from '../Containers/MainFlow/Home/shopByCategory';
import Location from '../Containers/MainFlow/Profile/location';
import ShopByBrand from '../Containers/MainFlow/Home/shopByBand';

const IntroStack = createStackNavigator({
    splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    }
})

const AuthStack = createStackNavigator({
    signin: {
        screen: Signin,
        navigationOptions: {
            header: null
        }
    },
    signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    }
})

const MainAppTab = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Icon name="home-variant" color={tintColor} size={totalSize(3)} type='material-community' />
                    :
                    <Icon name="home-variant-outline" color={tintColor} size={totalSize(2.5)} type='material-community' />
            )
        }
    },
    Orders: {
        screen: Orders,
        navigationOptions: {
            tabBarLabel: 'Orders',
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Icon name="calendar-month" color={tintColor} size={totalSize(3)} type='material-community' />
                    :
                    <Icon name="calendar-month-outline" color={tintColor} size={totalSize(2.5)} type='material-community' />
            )
        }
    },
    Notifications: {
        screen: Notification,
        navigationOptions: {
            tabBarLabel: 'Notification',
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Icon name="bell" color={tintColor} size={totalSize(3)} type='material-community' />
                    :
                    <Icon name="bell-outline" color={tintColor} size={totalSize(2.5)} type='material-community' />
            )
        }
    },
    Favourites: {
        screen: Favourites,
        navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Icon name="ios-heart" color={tintColor} size={totalSize(3)} type='ionicon' />
                    :
                    <Icon name="md-heart-empty" color={tintColor} size={totalSize(2.5)} type='ionicon' />
            )
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Icon name="account" color={tintColor} size={totalSize(3)} type='material-community' />
                    :
                    <Icon name="account-outline" color={tintColor} size={totalSize(2.5)} type='material-community' />
            )
        }
    }
},
    {
        tabBarOptions: {
            activeTintColor: colors.appColor1,
            inactiveTintColor: colors.steel,
            labelStyle: { fontSize: totalSize(1.5) }
        }
    }
)
const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

            </View>
            <View style={{ flex: 7 }}>
                <ScrollView >
                    <DrawerItems {...props} />
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Orders'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5), }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="calendar-month" type="material-community" color={colors.appColor1} size={totalSize(2.5)} iconStyle={{ marginRight: width(10) }} />
                            <Text style={commonStyles.h4}>Your Orders</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('repeatOrders'); props.navigation.toggleDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="refresh" type="font-awesome" color={colors.appColor1} size={totalSize(2.5)} iconStyle={{ marginRight: width(10) }} />
                            <Text style={commonStyles.h4}>Repeat Orders</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('offers'); props.navigation.toggleDrawer() }} style={{ marginHorizontal: width(5), }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="fire" type="material-community" color={colors.appColor1} size={totalSize(2.5)} iconStyle={{ marginRight: width(10) }} />
                            <Text style={commonStyles.h4}>Special Offers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('shopByCategory'); props.navigation.toggleDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="view-grid" type="material-community" color={colors.appColor1} size={totalSize(2)} iconStyle={{ marginRight: width(12) }} />
                            <Text style={commonStyles.h4}>Shop by Category</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('shopByBrand'); props.navigation.toggleDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="tag-text-outline" type="material-community" color={colors.appColor1} size={totalSize(2)} iconStyle={{ marginRight: width(12) }} />
                            <Text style={commonStyles.h4}>Shop by Brand</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Favourites'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="heart-outline" type="material-community" color={colors.appColor1} size={totalSize(2)} iconStyle={{ marginRight: width(12) }} />
                            <Text style={commonStyles.h4}>Favourites</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('gallery'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5), borderBottomWidth: 1, borderBottomColor: colors.steel }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="md-photos" type="ionicon" color={colors.appColor1} size={totalSize(2)} iconStyle={{ marginRight: width(12) }} />
                            <Text style={commonStyles.h4}>Gallery</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Profile'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="account-circle-outline" type="material-community" color={colors.appColor1} size={totalSize(2.5)} iconStyle={{ marginRight: width(10) }} />
                            <Text style={commonStyles.h4}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('language'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(25) }}>
                        <View style={{ flex: 1, marginVertical: height(1) }}>
                            <Text style={[commonStyles.h5, { fontFamily: type.appTextMedium }]}>Language</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('changePassword'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(25) }}>
                        <View style={{ flex: 1, marginVertical: height(1) }}>
                            <Text style={[commonStyles.h5, { fontFamily: type.appTextMedium }]}>Change Password</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('aboutUs'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5), borderTopWidth: 1, borderTopColor: colors.steel }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="information-variant" type="material-community" color={colors.appColor1} size={totalSize(2)} iconStyle={{ marginRight: width(12) }} />
                            <Text style={commonStyles.h4}>About Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('contactUs'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="customerservice" type="antdesign" color={colors.appColor1} size={totalSize(2.5)} iconStyle={{ marginRight: width(10) }} />
                            <Text style={commonStyles.h4}>Contact Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('termsAndCond'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="text-document" type="entypo" color={colors.appColor1} size={totalSize(2.5)} iconStyle={{ marginRight: width(10) }} />
                            <Text style={commonStyles.h4}>Terms and Condition</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('privacyPolicy'); props.navigation.closeDrawer() }} style={{ marginHorizontal: width(5) }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: height(2) }}>
                            <Icon name="security" type="material-community" color={colors.appColor1} size={totalSize(2.5)} iconStyle={{ marginRight: width(10) }} />
                            <Text style={commonStyles.h4}>Privacy Policy</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{}}>
                    <Image source={images.logo} resizeMode="contain" style={{ height: totalSize(10), width: totalSize(10), borderRadius: 5 }} />
                </View>
            </View>
        </View>
    </SafeAreaView>
)
const MainDrawer = createDrawerNavigator({
    MainTab: {
        screen: MainAppTab,
        navigationOptions: {
            //header: null,
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon name="home-outline" color={tintColor} size={totalSize(2.5)} type='material-community' />
            )
        }
    }
},
    {
        contentComponent: props => <CustomDrawerComponent {...props} />,
        drawerType: 'slide',
        contentOptions: {
            inactiveTintColor: colors.steel,
            activeTintColor: colors.appColor1,
            labelStyle: commonStyles.h4,
        },
    }
)

const AppStack = createStackNavigator({
    mainDrawer: {
        screen: MainDrawer,
        navigationOptions: {
            header: null
        }
    },
    productDetail: {
        screen: ProductDetail,
        navigationOptions: {
            header: null
        }
    },
    allProducts: {
        screen: AllProducts,
        navigationOptions: {
            header: null
        }
    },
    gallery: {
        screen: Gallery,
        navigationOptions: {
            title: 'Gallery',
            headerStyle: { elevation: 0 }
        }
    },
    offers: {
        screen: Offers,
        navigationOptions: {
            title: 'Special Offers',
            headerStyle: { elevation: 0 }
        }
    },
    repeatOrders: {
        screen: RepeatOrders,
        navigationOptions: {
            title: 'Repeat Orders',
            headerStyle: { elevation: 0 }
        }
    },
    location: {
        screen: Location,
        navigationOptions: {
            // header:null,
            title: 'Location',
            headerStyle: { elevation: 0 }
        }
    },
    aboutUs: {
        screen: AboutUs,
        navigationOptions: {
            title: 'About Us',
            headerStyle: { elevation: 0 }
        }
    },
    termsAndCond: {
        screen: TermsAndCond,
        navigationOptions: {
            title: 'Terms and Conditions',
            headerStyle: { elevation: 0 }
        }
    },
    privacyPolicy: {
        screen: PrivacyPolicy,
        navigationOptions: {
            title: 'Privacy Policy',
            headerStyle: { elevation: 0 }
        }
    },
    contactUs: {
        screen: ContactUs,
        navigationOptions: {
            title: 'Contact Us',
            headerStyle: { elevation: 0 }
        }
    },
    notificationSetting: {
        screen: NotificationSetting,
        navigationOptions: {
            title: 'Notification Setting',
            headerStyle: { elevation: 0 }
        }
    },
    language: {
        screen: Language,
        navigationOptions: {
            title: 'language',
            headerStyle: { elevation: 0 }
        }
    },
    changePassword: {
        screen: ChangePassword,
        navigationOptions: {
            title: 'Change Password',
            headerStyle: { elevation: 0 }
        }
    },
    shopByCategory: {
        screen: ShopByCategory,
        navigationOptions: {
            // header:null,
            title: 'Catagories',
            headerStyle: { elevation: 0 }
        }
    },
    shopByBrand: {
        screen: ShopByBrand,
        navigationOptions: {
            // header:null,
            title: 'Brands',
            headerStyle: { elevation: 0 }
        }
    },

})

export default createAppContainer(createSwitchNavigator({
    Intro: IntroStack,
    Auth: AuthStack,
    App: AppStack
},
    {
        initialRouteName: 'Intro'
    }
))