import React, {useState, useEffect} from 'react';
import {View, Text,StyleSheet,AppRegistry,ViewPagerAndroid} from 'react-native';

const ViewPagerAndroids = () => {
    return (
        <ViewPagerAndroid
            initialPage={0}
            style={[styles.flex,styles.wrappe]}
        >
            <View style={styles.center}><Text style={[styles.font,{backgroundColor:'#f00'}]}>第1个页面</Text></View>
            <View style={styles.center}><Text style={[styles.font,{backgroundColor:'#0f0'}]}>第2个页面</Text></View>
            <View style={styles.center}><Text style={[styles.font,{backgroundColor:'#00f'}]}>第3个页面</Text></View>
        </ViewPagerAndroid>

    );
};

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    font:{
        fontSize:20,
    },
    wrappe:{
        height:200,
        //backgroundColor:"#f00"
    }
})
export default ViewPagerAndroids;
