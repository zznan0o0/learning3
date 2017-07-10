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
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import MainScreen from './views/MainScreen.js';

export default class DogTalk extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MainScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('DogTalk', () => DogTalk);
