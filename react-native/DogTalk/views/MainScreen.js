import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components'
import VedioList from './common/Vedio/VedioList.js';

const IMAGE_VEDIO = require('../public/images/vedio.png'),
      IMAGE_VEDIOACTIVE = require('../public/images/vedio_active.png'),
      IMAGE_PLUS =  require('../public/images/plus.png'),
      IMAGE_PLUSACTIVE =  require('../public/images/plus_active.png'),
      IMAGE_ELLIPSIS =  require('../public/images/ellipsis.png'),
      IMAGE_ELLIPSISACTIVE =  require('../public/images/ellipsis_active.png');

export default class MainScreen extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'vedio'
    };
  }

  _renderTabItem(img, selectedImg, tag, childView) {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === tag}
        renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
        renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
        onPress={() => this.setState({ selectedTab: tag })}>
        {childView}
      </TabNavigator.Item>
    );
  }

  static _createChildView(tag) {
    return (
      <View style={styles.constainer}>
        {tag}
      </View>
    )
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <TabNavigator hidesTabTouch={true}>
          {this._renderTabItem(IMAGE_VEDIO, IMAGE_VEDIOACTIVE, 'vedio', MainScreen._createChildView(
            <Navigator
              initialRoute={{ name: 'VedioList', component: VedioList }}  
              configureScene={() => {
                return {
                  ...Navigator.SceneConfigs.FloatFromRight,
                  defaultTransitionVelocity: 500
                }
              }}  
              renderScene={(route, navigator) => <route.component title={route.title} navigator={navigator} />}
            />
          ))}
          {this._renderTabItem(IMAGE_PLUS, IMAGE_PLUSACTIVE, 'plus', MainScreen._createChildView(222))}
          {this._renderTabItem(IMAGE_ELLIPSIS, IMAGE_ELLIPSISACTIVE, 'ellipsis',MainScreen._createChildView(333))}
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 52,
    backgroundColor: '#303030',
  },
  tabIcon: {
    width:30,
    height: 30,
    resizeMode: 'stretch',
  },

  constainer: {
    flex:1,
    backgroundColor:'#f5fcff'
  }
});