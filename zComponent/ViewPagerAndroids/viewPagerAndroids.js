import React, {useState, useEffect} from 'react';
import ViewPager from '@react-native-community/viewpager';
import {
    View,
    Text,
    StyleSheet,
    Image,
    AppRegistry,
    //ViewPagerAndroid,
    TouchableOpacity,
    Button,
} from 'react-native';


const PAGES = 5;
const BGCOLOR = ['#fdc083', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
const IMAGE_URLS = [
    'http://yesky.img.zz314.com/2017-03-31/1b73567607e7a2da81f4eebe644df3fb.png',
    'http://language.chinadaily.com.cn/images/attachement/jpg/site1/20150914/0023ae98988b17606e870c.jpg',
    'http://p9.pstatp.com/origin/37e100013e4516793a40',
    'http://up.meipic.com/19/pic/af/b9/0d/afb90d8eb9c8b46ae5bea1508ca35bde.jpg',
    'http://himg2.huanqiu.com/attachment2010/2014/1212/20141212052519932.jpg',
];

const ProgressBar = (props) => {
    /*useEffect(() => {

    });
*/
    let fractionalPosition =
        props.progress.position + props.progress.offset;
    let progressBarSize =
        (fractionalPosition / (props.numberOfPages - 1)) * props.size;

    console.log('fractionalPosition', fractionalPosition);
    console.log('progressBarSize', parseFloat(progressBarSize));
    return (
        <View style={[styles.progressBarContainer, {width: props.size}]}>
            <View
                style={[styles.progressBar, {width: progressBarSize}]}
            />
        </View>
    );
};

const PP = (props) => {
    let fractionalPosition =
        props.progress.position + props.progress.offset;
    let progressBarSize =
        (fractionalPosition / (props.numberOfPages - 1)) * props.size;
    return (
        <View style={[styles.progressBarContainer, {width: props.size}]}>
            <View
                style={[styles.progressBar, {width: progressBarSize}]}
            />
        </View>


    );
};


const ViewPagerAndroids = () => {
    const [progress, setProgress] = useState({
        position: 0,
        offset: 0,
    });

    const onPageScroll = (e) => {
        setProgress(e.nativeEvent);
    };

    const pages = [];
    const thumbsUp = '\uD83D\uDC4D';
    for (let i = 0; i < PAGES; i++) {
        let pageStyle = {
            backgroundColor: BGCOLOR[i % BGCOLOR.length],
            alignItems: 'center',
            padding: 20,
        };
        if (i < PAGES) {
            //collapsable 如果一个View只用于布局他的子组件,则他可能会为了优化而从原生布局树种移除.
            //把此属性设为false可以禁用这个优化
            pages.push(
                <View key={i} style={pageStyle} collapsable={false}>
                    <View style={{
                        width: 400,
                        height: 500,
                    }}>
                        <Image
                            style={styles.image}
                            source={{uri: IMAGE_URLS[i % BGCOLOR.length]}}
                            //resizeMode='contain'
                            // source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT230B6VG_XsRcfC3rcfJHfQL800ZCuFnUqxegIA4n_TCoGSFn-'}}
                        />
                        <Text>{thumbsUp}</Text>
                    </View>

                </View>,
            );
        }
    }
    return (
        <View style={styles.container}>
            <ViewPager
                style={styles.viewPager}
                initialPage={0}
                onPageScroll={onPageScroll}
            >
                {/* <Button
                title={'订单'}
            />*/}
                {pages}

            </ViewPager>
            <View style={styles.buttons}>
                <View>
                    <PP numberOfPages={pages.length} size={140} progress={progress}/>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    font: {
        fontSize: 20,
    },
    wrappe: {
        height: 200,
        //backgroundColor:"#f00"
    },
    image: {
        flex: 1,
        width: 400,
        //height: 400,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    container: {
        flex: 1,
    },
    startupBtn: {},
    viewPager: {flex: 1},
    buttons: {
        //flexDirection: 'row',
        height: 100,
        backgroundColor: 'greenyellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressBarContainer: {
        height: 10,
        margin: 10,
        borderColor: '#00f',
        borderWidth: 2,
    },
    progressBar: {
        alignSelf: 'flex-start',
        flex: 1,
        backgroundColor: '#ff2013',
    },
});
export default ViewPagerAndroids;
