import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, PixelRatio, Dimensions, Platform} from 'react-native';
const width = Dimensions.get('window').width,
  height = Dimensions.get('window').height;

class SelectItem extends Component{
  render(){
    return (
      <View onPress={() => console.log(1111)} style={styles.TabBarItem_container} >
        <Image style={styles.TabBarItem_ico} source={{uri: this.props.url}}/>
        <Text style={styles.TabBarItem_Text}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class TabBarNavigator extends Component{
  constructor(props) {
    super(props);
  
    this.states = {
      selected: 0
    };
  }

  console(){
    console.log(111)
  }

  _renderSelect(){
    return (
      this.props.selects.map((item, key) => 
        <SelectItem url="http://atjubo.oss-cn-hangzhou.aliyuncs.com/0/image/20160819/20160819152802_0663.jpg"
          title={this.states.selected === this.props.selectId ? '被选中的' : item.title}
          selectId={key}
          key={key}
          onPress={() => console.log(1111)}
        />
      )
    )
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <View style={styles.TabBarContext_container}>
          <ScrollView>
            <Text onPress={() => console.log(1111)}>111</Text>
          </ScrollView>
          <ScrollView>
            <Text>222</Text>
          </ScrollView>
        </View>
        <View style={styles.TabBar_container}>
          {this._renderSelect()}
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