import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView, } from 'react-native-webview'
import Dimensions from 'Dimensions';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WebViews = () => {
    return (
        <View style={styles.flex}>
            <WebView
                style={{ height: height, width: width }}
                source={{ uri: 'https://www.blpay.io/#/front/home' }}
                // source={{html:'<div><img src="http://s2.doyo.cn/img/59/19/132e9e9e786809000028.jpg" alt=""/></div>'}}
                injectedJavaScript={'alert("我是兑")'}  //注入js
            >

            </WebView>

        </View>
    );
};
const styles = StyleSheet.create({

    flex: {
        flex: 1,
    }
});
export default WebViews;

