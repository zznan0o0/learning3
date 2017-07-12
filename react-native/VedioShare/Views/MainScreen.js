import React, { Component } from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import { TabNavigator, StackNavigator } from "react-navigation";
import VedioList from './Veido/VedioList.js';
import VedioDetail from './Veido/VedioDetail.js'

const IMAGE_VEDIO = require('../public/images/vedio.png'),
      IMAGE_PLUS =  require('../public/images/plus.png'),
      IMAGE_ELLIPSIS =  require('../public/images/ellipsis.png');


class test2 extends Component{
  render() {
    return (
      <View>
        <Image source={IMAGE_VEDIO}/>
        <Text>test2</Text>
      </View>
    );
  }
}

const tabNavigator = TabNavigator({
  VedioList: {
    screen: VedioList,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={IMAGE_VEDIO}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },

  test2: {
    screen: test2, 
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={IMAGE_PLUS}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },

  test3: {
    screen: test2, 
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={IMAGE_ELLIPSIS}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  }

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    inactiveTintColor: '#ccc',
    activeTintColor: '#ee745d',
    indicatorStyle: {
      borderBottomColor: '#ffffff',
      borderBottomWidth: 2,
    },
    dicatorStyle: {
      borderBottomColor: '#ffffff',
      borderBottomWidth: 2,
    },
    style: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#F1EEEE'
    },

    iconStyle: {
      width: 30,
      height: 30,
    }
  }
});

const mainNavigator = StackNavigator({
  tabNavigator: { screen: tabNavigator },
  VedioDetail: { screen: VedioDetail }
}, {
  headerMode: 'none'
});

const styles = StyleSheet.create({
  icon: {
    width:30, height: 30,
    resizeMode: 'cover',
  },
});


export {mainNavigator}