import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ImportantNews = (props) => {

    const show = (title) => {
        alert(title);
    };

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>要闻</Text>
            {props.newsArr.map((item, key) => <Text
                key={key}
                onPress={() => show(item)}
                numberOfLines={1}
                style={styles.news_item}
            >{item}</Text>)}
        </View>
    );
};

const styles = StyleSheet.create({
    layout:{

    },
    news_item: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        textAlign: 'left',
        paddingLeft: 30,
        padding: 10,
    },
    title: {
        fontSize: 20,
        color: '#f00',
        fontWeight: 'bold',

    },
});
module.exports = ImportantNews;
