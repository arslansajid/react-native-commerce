import React, { Component } from 'react';
import { View, Modal, TouchableNativeFeedback, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { width, height, totalSize } from 'react-native-dimension';
import images from '../../../Themes/Images'
import { Icon } from 'react-native-elements';
const Viewerimages = [
    {
        props: {
            // headers: ...
            source: require('../../../Assets/Images/waffle_stack.jpg')
        },
        freeHeight: true
    },
    {
        props: {
            // headers: ...
            source: require('../../../Assets/Images/waffle_stack2.jpg')
        },
        freeHeight: true
    },
    {
        // Simplest usage.
        // url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
        // url:
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
        // You can pass props to <Image />.
        props: {
            // headers: ...
            source: require('../../../Assets/Images/waffle_stack3.jpg')
        },
        freeHeight: true
    },
    {
        props: {
            // headers: ...
            source: require('../../../Assets/Images/waffle_stack4.jpg')
        },
        freeHeight: true
    },
    {
        props: {
            // headers: ...
            source: require('../../../Assets/Images/waffle_stack5.gif')
        },
        freeHeight: true
    },
];

export default class Gallery extends Component {
    state = {
        index: 0,
        modalVisible: false,
        imagesList: [
            { image: images.waffleStack },
            { image: images.waffleStack2 },
            { image: images.waffleStack3 },
            { image: images.waffleStack4 },
            { image: images.waffleStack5 },
            { image: images.waffleStack },
            { image: images.waffleStack },
            { image: images.waffleStack2 },
            { image: images.waffleStack3 },
            { image: images.waffleStack4 },
            { image: images.waffleStack5 },
            { image: images.waffleStack },
            { image: images.waffleStack },
            { image: images.waffleStack2 },
            { image: images.waffleStack3 },
            { image: images.waffleStack4 },
            { image: images.waffleStack5 },
            { image: images.waffleStack },
            { image: images.waffleStack },
            { image: images.waffleStack2 },
            { image: images.waffleStack3 },
            { image: images.waffleStack4 },
            { image: images.waffleStack5 },
            { image: images.waffleStack },
        ]
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ width: width(100), flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                        {
                            this.state.imagesList.map((item, key) => {
                                return (
                                    <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
                                        <Image source={item.image} resizeMode="contain" style={{ height: height(10), width: width(30), margin: 5 }} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={() => this.setState({ modalVisible: false })}
                >
                    <View style={{ flex: 1 }}>
                        <ImageViewer
                            imageUrls={Viewerimages}
                            index={this.state.index}
                            onSwipeDown={() => {
                                console.log('onSwipeDown');
                            }}
                            onMove={data => console.log(data)}
                            enableSwipeDown={true}
                        />
                        <View style={{ position: 'absolute', top: 0, right: 0 }}>
                            <Icon name="close" reverse color="transparent" reverseColor="#ffff" size={totalSize(3)} onPress={() => this.setState({ modalVisible: false })} />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}