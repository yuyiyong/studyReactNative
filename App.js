/*
/!**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *!/

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/
/*
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ViewStudy from './zComponent/viewStudy';
import TextStudy from './zComponent/textStudy/textStudy';
import List from './zComponent/navigationStudy/Main';
import TextInput1 from './zComponent/TextInput/TextInput';


export default class App extends Component {
    render() {
        return (
            <View>
                {/!*<ViewStudy/>*!/}
                {/!*<TextStudy/>*!/}
               <List />
               {/!*<TextInput1/>*!/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    globWrap: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
});
*/
/*import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';

const AppNavigaiton = createStackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});

/!*class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}

class ProfileScreen extends Component{
    render() {
        return (
            <Button
                title="Profile页"
            />

        )
    }

}*!/

const AppContainer = createAppContainer(AppNavigaiton);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}*/


import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ViewStudy from './zComponent/viewStudy';
import TextStudy from './zComponent/textStudy/textStudy';
import TextInput1 from './zComponent/TextInput/TextInput';
import Touchables from './zComponent/touchable/touchables';
import ViewPagerAndroids from './zComponent/ViewPagerAndroids/viewPagerAndroids';
import ViewPagerAndroidExample from './zComponent/ViewPagerAndroids/example/ViewPagerAndroidExample.android';
import WebViews from './zComponent/WebViews/webViews';
import ListViews from './zComponent/ListViews/listViews';
import Tab_Navigators from './zComponent/tab-navigators/tab-navigators';

const AppNavigator = createStackNavigator(
    {
        Home: {screen: ViewStudy},
        TextStudy: {screen: TextStudy},
        TextInput:{screen:TextInput1},
        Touchables:{screen:Touchables},
        ViewPageerAdroids:{screen:ViewPagerAndroids},
        Example:{screen:ViewPagerAndroidExample},
        WebViews:{screen:WebViews},
        ListViews:{screen:ListViews},
        Home_tab:{screen:Tab_Navigators}
    },
    {
        initialRouteName: 'Home',
    },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {

    return (
        <AppContainer/>
    );
};
export default App;
