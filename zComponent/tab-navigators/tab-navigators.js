import React, {useState, useEffect} from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const homeView = (
    <Text>homeView</Text>
);
const profileView = (
    <Text>profileView</Text>
);

const Tab_Navigators = () => {
    const [selectedTab, setSelectedTab] = useState('home');
    let tabBarHeight = 0;
    return (
        <View>
            <Text>jjjHome</Text>
            <TabNavigator
                //style={styles.container}
                //tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
                //sceneStyle={{ paddingBottom: tabBarHeight }}
            >
                <TabNavigator.Item
                    selected={selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image
                        source={'https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg'}/>}
                    renderSelectedIcon={() => <Image
                        source={'https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg'}/>}
                    badgeText="1"
                    onPress={() => setSelectedTab('home')}>
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image
                        source={'http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png'}/>}
                    renderSelectedIcon={() => <Image
                        source={'http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png'}/>}
                   // renderBadge={() => <CustomBadgeView/>}
                    onPress={() => setSelectedTab('profile')}>
                    {profileView}
                </TabNavigator.Item>
            </TabNavigator>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default Tab_Navigators;
