import React, {useState, useEffect} from 'react';
import {PixelRatio, StyleSheet, Text, View, Button, DrawerLayoutAndroid} from 'react-native';
import navigation from 'react-navigation';

const ViewStudy = (props) => {
    const [author, setAuthor] = useState('dongfangyao');
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
    }
    let navigationView = (
        <View style={styles.DLA_globalLay}>
            <Text style={styles.DLA_title}>侧导航</Text>
            <Text
                style={styles.DLA_nav}
                onPress={viewPageerAdroidsHandle}
            >ViewPageerAdroids组件</Text>
        </View>
    );
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
                        <Text style={styles.font}>团购</Text>
                    </View>
                    <View style={[styles.center, styles.flex]}>
                        <Text style={styles.font}>客栈, 公寓</Text>
                    </View>
                </View>
            </View>
        </DrawerLayoutAndroid>
    );
};
const styles = StyleSheet.create({
    globWrap: {
        // flex: 1,
        // alignItems: 'center',
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
        fontWeight: 'bold'
    },
    DLA_nav:{
        margin: 10,
        fontSize: 14,
        textAlign: 'left',
        color: '#fff',
    }
});
export default ViewStudy;
