/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Dimensions 
} from 'react-native';

import TabBarNavigator from './common/TabBar.js';

const selects = [
  {
    title: '首页',
    url: 'http://atjubo.oss-cn-hangzhou.aliyuncs.com/0/image/20160819/20160819152802_0663.jpg'
  },

  {
    title: '第二页',
    url: 'http://atjubo.oss-cn-hangzhou.aliyuncs.com/0/image/20160819/20160819152802_0663.jpg'
  },
]

export default class TabBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TabBarNavigator selects={selects}/>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('TabBar', () => TabBar);
