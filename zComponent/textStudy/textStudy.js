import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Head from './head';
const Head = require('./head');
const ImportantNews = require('./importantNews');
const newsArr = [
    '央视主播李梓萌提到个反常现象 什么原因导致的？',
    '付国豪被乱港分子造谣是福建帮头目 信用卡遭盗刷',
    '世界还是那个世界 但中国已经不是那个中国(图)',
    '将中国列为“汇率操纵国” 美财长被曝“有苦衷”',
];
const TextStudy = () => {
    return (
        <View>
            <Head/>
            <List>
                习近平的2019-七月：滚石上山不松劲</List>
            <List>[为民情怀 习近平同巴西总统博索纳罗就中巴建交45周年互致贺电]</List>

            <List>5名“串谋侮辱国旗”者被拘捕 身份曝光</List>
            <List>[特朗普称中国想达贸易协议先人道应对香港 饭圈女孩撕香港暴徒]</List>
            <List>[如何结束乱局?驻英大使提4点建议 看欧美国家咋对待暴力示威者]</List>
            <List>[祸港头目李柱铭:曾破坏北京奥运被骂汉奸 李嘉诚登广告反暴力]</List>
            <List>环球时报：美国经济支撑不了对华霸凌态度</List>

            <ImportantNews newsArr={newsArr}/>

        </View>
    );
};
export default TextStudy;

const List = (props) => {
    return (
        <View style={styles.list_item}>
            <Text
                style={styles.list_item_font}
                numberOfLines={1}
            >{props.children}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    list_item: {
        height: 40,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
    },

    list_item_font: {
        fontSize: 17,
        //margin:10,
        //lineHeight: 30,
    },
});
