import React, {useState, useEffect} from 'react';
import {PixelRatio, StyleSheet, Text, View, Button, DrawerLayoutAndroid} from 'react-native';
import navigation from 'react-navigation';
import {require} from '../MyUtils/request';

const ViewStudy = (props) => {
    const [data, setData] = useState('无数据');
    const handle = () => {
        const {navigate} = props.navigation;
        navigate('TextStudy');
    };
    const searchInputHandle = () => {
        const {navigate} = props.navigation;
        navigate('TextInput');
    };
    const touchableHandle = () => {
        const {navigate} = props.navigation;
        navigate('Touchables');
    };
    const viewPageerAdroidsHandle = () => {
        const {navigate} = props.navigation;
        navigate('ViewPageerAdroids');
    };

    const home  = () => {
        const {navigate} = props.navigation;
        navigate('Home_tab')
    }

    const example = () => {
        const {navigate} = props.navigation;
        navigate('Example');
    };
    const webViewHandle = () => {
        const {navigate} = props.navigation;
        navigate('WebViews')
    }
    const ListViewHandle = () => {
        const {navigate} = props.navigation;
        navigate('ListViews');
    }
    let navigationView = (
        <View style={styles.DLA_globalLay}>
            <Text style={styles.DLA_title}>侧导航</Text>
            <Text
                style={styles.DLA_nav}
                onPress={viewPageerAdroidsHandle}
            >ViewPageerAdroids组件</Text>
            <Text
                style={styles.DLA_nav}
                onPress={example}
            >
                ViewPageAdroids例子
            </Text>
            <Text
                style={styles.DLA_nav}
                onPress={home}
            >
                tab-home
            </Text>
        </View>
    );
    const connects = () => {
        require('https://www.easy-mock.com/mock/5d5ce7c4bcf7a833e3876a55/MyTest/test').then(
            (res) => {
                console.log(res.data.message);
                setData(res.data.message);
            },
        );
    };
    return (
        <DrawerLayoutAndroid
            drawerWidth={200}
            drawerPosition={DrawerLayoutAndroid.positions.Right}
            renderNavigationView={() => navigationView}
        >
            <View style={styles.contain}>
                <View style={[styles.item, styles.center]}>
                    <Text
                        style={styles.font}
                        onPress={() => handle()}
                    >新闻</Text>
                </View>
                <View style={[styles.item, styles.lineLeftRight]}>
                    <View
                        style={[styles.center, styles.flex, styles.lineCenter]}
                    >
                        <Text
                            style={styles.font}
                            onPress={() => searchInputHandle()}
                        >查找drawerLayout</Text>
                    </View>
                    <View style={[styles.center, styles.flex]}>
                        <Text
                            style={styles.font}
                            onPress={() => touchableHandle()}
                        >touchable,image</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={[styles.center, styles.flex, styles.lineCenter]}>
                        <Text onPress={() => webViewHandle()} style={styles.font}>webView</Text>
                    </View>
                    <View style={[styles.center, styles.flex]}>
                        <Text onPress={()=>ListViewHandle()} style={styles.font}>ListViews</Text>
                    </View>
                </View>

            </View>
            <View style={styles.globWrap}>
                <Button
                    title="链接"
                    style={styles.btn}
                    onPress={() => connects()}
                />
                <Text style={styles.testData}>{data}</Text>
            </View>
        </DrawerLayoutAndroid>
    );

};
const styles = StyleSheet.create({
    globWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contain: {
        //marginTop: 300,
        margin: 5,
        //flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row',
        backgroundColor: '#FF1F65',
        height: 84,
        borderRadius: 5,
        padding: 2,
        /* justifyContent: 'center',
         alignItems: 'center',*/
    },
    item: {
        flex: 1,
        height: 80,
        // borderWidth: 1,
        // borderColor: '#FF1F65',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex: {
        flex: 1,
    },
    font: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
    },
    lineLeftRight: {
        borderLeftWidth: 2 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
    },
    DLA_globalLay: {
        flex: 1,
        backgroundColor: '#6c7cff',
    },
    DLA_title: {
        margin: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    DLA_nav: {
        margin: 10,
        fontSize: 14,
        textAlign: 'left',
        color: '#fff',
    },
    testData: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    btn: {
        // flex:1,
        // height:50,
        width: 300,
        fontWeight: 'bold',
        color: 'black',
    },
});
export default ViewStudy;
