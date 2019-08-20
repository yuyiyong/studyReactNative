import React, {useState, useEffect} from 'react';
import {
    View, Text, StyleSheet, PixelRatio, Image, TouchableOpacity, AppRegistry,
} from 'react-native';


const Images = (props) => {
    const [count, setCount] = useState(0);
    const [imgs, setImgs] = useState(props.imgs);
    console.log('imgss',imgs[count]);
    return (
        <View
            style={styles.win}
        >
            <View
                style={styles.image}
            >
                <Image
                    style={styles.img}
                    resizeMode='contain'
                    // source={require('./setting/img/7a722219gy1g4tltho4u3j20u016gjvc.jpg')}
                   // source={{url:'https://corp-public.zone1.meitudata.com/0120190619174047.jpg'}}
                    source={imgs[count]}
                />
            </View>
            {/* <Text>1234</Text>*/}
            <View style={styles.btns}>
                <TouchableOpacity
                    onPress={()=> {
                        if(count<=0){setCount(0)}else {
                            setCount(count-1)
                        }
                    }}
                >
                    <View>
                        <Text style={styles.btn}>上一张</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        if(count>=3){setCount(3)}else {
                            setCount(count+1)
                        }
                    }}
                >
                    <View>
                        <Text style={styles.btn}>下一张</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    win: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius:6,
        width: 300,
        height: 250,
        padding:4,
    },
    img: {
        height: 226,
        width: 296,
    },
    btns: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: '#0089ff',
        borderWidth: 1,
        borderRadius:3,
        //justifyContent: 'center',
        margin: 10,
        textAlign: 'center',
        lineHeight: 30,
        //alignItems: 'center',
    },
});
export default Images;
