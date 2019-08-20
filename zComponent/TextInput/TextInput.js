import React, {useState, useEffect} from 'react';
import {TextInput, View, Text, StyleSheet, PixelRatio} from 'react-native';
import ViewPagerAndroids from '../ViewPagerAndroids/viewPagerAndroids';
let onePT = 1 / PixelRatio.get();
const TextInput1 = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(null);


    const hide = (val) => {
        setShow(false);
        setValue(val);
    };
    const getValue = (text) => {
        console.log("text",text);

        if(text){
            setShow(true);
            setValue(text);
        }else{
            setShow(false)
            setValue(null)
        }

    };
    return (
        <View style={{position: 'relative'}}>
            <View
                style={[ styles.flexDirection, styles.topStatus]}
            >
                <View
                    style={[styles.flex, styles.input]}
                >
                    <TextInput
                        returnKeyType="web-search"
                        placeholder="请输入关键词"
                        value={value}
                        onChangeText={getValue}
                    />
                </View>
                <View style={styles.btn}>
                    <Text style={styles.search}>搜索</Text>
                </View>

            </View>
            {
                show ? <View style={styles.result}>
                    <Text
                        onPress={() => hide(value + '搜索条件一')}
                        style={styles.item}
                    >
                        {value + '搜索条件一'}
                    </Text>
                    <Text
                        onPress={() => hide(value + '搜索条件二')}
                        style={styles.item}
                    >
                        {value + '搜索条件二'}
                    </Text>
                    <Text
                        onPress={() => hide(value + '搜索条件三')}
                        style={styles.item}
                    >
                        {value + '搜索条件三'}
                    </Text>
                </View> : null
            }
        </View>
    );
};
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flexDirection: {
       flexDirection: 'row',
    },
    topStatus: {
        marginTop: 25,
    },
    input: {
        height: 45,
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    btn: {
        width: 45,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    item: {
        fontSize: 16,
        paddingTop:5,
        paddingBottom:10,
    },
    result:{
        marginTop: onePT,
        marginLeft:18,
        marginRight: 5,
        height:200,
        position:'absolute',
        top:70,
        zIndex:10,
        backgroundColor: '#fff'
    },
});

export default TextInput1;
