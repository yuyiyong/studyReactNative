/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/*import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import setup from './setup';
AppRegistry.registerComponent('imooc_simple',() => setup);*/
