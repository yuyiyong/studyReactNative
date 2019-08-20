import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Images from '../image/image';
import Pickers from '../pickers/pickers';
import ProgressBarAndroids from '../ProgressBarAndroids/ProgressBarAndroids';

//const imgs = ['haha','hahah','nihao']

const imgs = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566293790983&di=969248f812c97d97d4e72de6814d08de&imgtype=0&src=http%3A%2F%2Fnews.mydrivers.com%2FImg%2F20120128%2F2012012810392885.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566293790981&di=3d1390c2c605001bfdc432facb86bb2d&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F5c5a4a0f4f967198c9dd9ccb46174efc61a4707b.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566293790975&di=ef59c0de5a803a4e326c2a30b45fce4e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F04%2F20150704104151_GVFcN.jpeg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=506341610,3070080366&fm=26&gp=0.jpg',
];
const imgs1 = [
    require('../image/setting/img/7a722219gy1g4tltho4u3j20u016gjvc.jpg'),
    require('../image/setting/img/0120190619174047.jpg'),
    require('../image/setting/img/images.jpg'),
    require('../image/setting/img/images23.jpg'),
];

const Touchables = () => {
    const show = (text) => {
        alert(text);
    };
    return (
        <ScrollView>
            <TouchableHighlight
                onPress={() => show('高亮..')}
                underlayColor='#f00'   // 背景颜色
            >
                <Text style={styles.item}>高亮.........</Text>
            </TouchableHighlight>

            <TouchableOpacity
                onPress={() => show('透明')}
            >
                <Text style={styles.item}>透明度..........</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback
                onPress={() => show('withoutFeedback')}
            >
                <Text style={styles.item}>withoutFeedback</Text>
            </TouchableWithoutFeedback>

            <Text style={styles.title}>图形 Image组件</Text>
            <Images
                imgs={imgs1}
            />
            <Text style={styles.title}>Picker组件</Text>
            <Pickers/>
            <Text style={styles.title}>ProgressBarAndroids组件</Text>
            <ProgressBarAndroids/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 30,
        textAlign: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
    },

});
export default Touchables;
