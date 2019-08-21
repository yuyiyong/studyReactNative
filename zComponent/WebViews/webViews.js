import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView,} from 'react-native-webview'
import Dimensions from 'Dimensions';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WebViews = () => {
    return (
        <View style={styles.flex}>
            <WebView
                style={{height:height,width:width}}
                source={{uri:'https://kking.me/businessadmin/#/user/login'}}
            >

            </WebView>

        </View>
    );
};
const styles = StyleSheet.create({
   flex:{
       flex: 1,
   }
});
export default WebViews;

