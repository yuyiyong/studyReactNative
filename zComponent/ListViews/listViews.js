import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SectionList, FlatList} from 'react-native';

const ListViews = () => {
    return (
        <View style={styles.flex}>
          {/*  <SectionList
                //style={styles.container}
                renderItem={
                    ({item, index, section}) => <Text style={styles.contains} key={index}>{item.key}</Text>
                }
                renderSectionHeader={({section: {title}}) => (
                    <Text style={[{fontWeight: 'bold'}, styles.title]}>{title}</Text>
                )}
                sections={[
                    {title: 'Title1', data: [{key: 'item1'}, {key: 'item2'}]},
                    {title: 'Title2', data: [{key: 'item3'}, {key: 'item4'}]},
                    {title: 'Title3', data: [{key: 'item5'}, {key: 'item6'}]},
                ]}
                keyExtractor={(item, index) => {
                    //console.log('111',item.key + index);
                    return item.key + index;
                }}
            />*/}
            <FlatList
                onEndReached={({distanceFromEnd})=> {
                    console.log("distanceFromEnd",distanceFromEnd);
                    console.log("是你说的链上");
                }}

                data={[{key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                onEndReachedThreshold={0.5}
            />
           {/* <View style={styles.globWraps}>
                <View style={styles.top1}>
                    <Text>上</Text>
                </View>
                <View style={styles.bottom1}>
                    <Text>中</Text>
                </View>
            </View>*/}
        </View>
    );
};
export default ListViews;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //height: 400
        // backgroundColor:'#f00',
        //flex: 1,
    },
    flex: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-between',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        height: 40,
        backgroundColor: '#4682B4',
        lineHeight: 40,
        textAlign: 'center',
    },
    contains: {
        backgroundColor: '#87CEEB',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        height: 35,
        lineHeight: 35,
    },
    globWraps: {
        flex: 100,
        backgroundColor: '#c6ff68',
    },
    top1: {
        flex: 1,
        //backgroundColor: 'yellow',
    },
    bottom1: {
        flex: 2,
        backgroundColor: 'red',
    },
    item: {
        height: 40,
        lineHeight: 40,
        //backgroundColor: '#ebb2b8',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
