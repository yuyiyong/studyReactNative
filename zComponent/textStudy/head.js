import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';

const Head = () => {
    return (
        <View style={styles.flex}>
            <Text style={styles.font1}>网易
            <Text style={styles.font2}>新闻</Text>
            <Text style={styles.font3}>有态度"</Text></Text>
        </View>
    );
};
const styles = StyleSheet.create({
    flex: {
        marginTop: 25,
        height: 50,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor:'#EF2D36',
        alignItems:'center',
    },
    font1: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#f00'
    },
    font2:{
      color:'#fff',
        backgroundColor:'#EC1D1C',
    },
    font3:{
        color:'#8c8c8c'
    },
});
module.exports=Head;
