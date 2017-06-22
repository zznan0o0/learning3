import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, PixelRatio, Dimensions, Platform} from 'react-native';
const width = Dimensions.get('window').width,
  height = Dimensions.get('window').height;

export default class TabBarNavigator extends Component{
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.TabBarContext_container}>
          <View>
            <Text>111</Text>
          </View>
          <View>
            <Text>222</Text>
          </View>
        </ScrollView>
        <View style={styles.TabBar_container}>
          <View style={styles.TabBarItem_container} >
            <Image style={styles.TabBarItem_ico} source={{uri: 'http://atjubo.oss-cn-hangzhou.aliyuncs.com/0/image/20160819/20160819152802_0663.jpg'}}/>
            <Text style={styles.TabBarItem_Text}>首页</Text>
          </View>
          <View style={styles.TabBarItem_container}>
            <Image style={styles.TabBarItem_ico} source={{uri: 'http://atjubo.oss-cn-hangzhou.aliyuncs.com/0/image/20160819/20160819152802_0663.jpg'}}/>
            <Text style={styles.TabBarItem_Text}>第二页</Text>
          </View>
        </View>
      </View>
        
    );
    
  }
}

const tabBar_HEIGHT = 49; 

const styles = StyleSheet.create({
  TabBarContext_container:{
    position: 'absolute', left: 0, right: 0, top: 0, bottom: (tabBar_HEIGHT + 1), zIndex: 99,
    backgroundColor: '#EFEFEF',
  },

  TabBar_container: {
    position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 100,
    height: tabBar_HEIGHT,
    borderTopWidth: 1, borderTopColor: '#ccc',
    flex: 1, justifyContent: 'space-around', alignSelf: 'center', flexDirection: 'row',
  },

  TabBarItem_container: {
    flex: 1, flexDirection: 'column', alignSelf: 'center', justifyContent: 'space-around',
  },

  TabBarItem_ico: {
    alignSelf: 'center',
    width: 20, height: 20,
  },

  TabBarItem_Text: {
    textAlign: 'center',
  }
});