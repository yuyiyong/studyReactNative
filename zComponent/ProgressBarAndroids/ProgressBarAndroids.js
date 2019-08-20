import React, {useState, useEffect} from 'react';
import {View, Text,ProgressBarAndroid} from 'react-native';

const ProgressBarAndroids = () => {
    return (
        <View>
            <ProgressBarAndroid
                styleAttr="LargeInverse" //直的Horizontal, 圆形:LargeInverse
            />
            <Text style={{marginBottom:40}}>ProgressBarAndroids</Text>
        </View>
    );
};
export default ProgressBarAndroids;
