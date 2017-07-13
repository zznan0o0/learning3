import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';

import Video from 'react-native-video';

const IMAGE_IMG_2203 =  require('../../public/images/IMG_2203.png'),
  IMAGE_PLAY =  require('../../public/images/play.png');



//test data
const test = {
  list: []
}

for(let i = 0; i < 30; i++){
  test.list.push({
    imgUrl: 'https://avatars1.githubusercontent.com/u/13981470?v=3&s=460',
    name: 'KenSshin',
    content: 'very good',
    key: i
  });
}

const {width, height} = Dimensions.get('window');

class Vedio extends Component{
    _onLoadStart(){
    console.log('_onLoadStart')
  }

  _onLoad(){
    console.log('_onLoad')
  }

  _onProgress(){
    console.log('_onProgress')
  }

  _onEnd(){
    console.log('_onEnd')
  }

  _onError(){
    console.log('_onError')
  }

  _onBuffer(){
    console.log('_onBuffer')
  }

  render(){
    return (
      <View style={styles.vedio}>
        {true && <Text>1111</Text>}
        <Video
          source={{uri: this.props.vedioUrl}} 
          rate={1}
          volume={1}
          muted={false}
          paused={true}
          resizeMode="cover"
          repeat={false}
          playInBackground={false}
          onLoadStart={this._onLoadStart}
          onLoad={this._onLoad} 
          onProgress={this._onProgress}
          onEnd={this._onEnd}
          onError={this._onError}
          onBuffer={this._onBuffer}
          style={styles.vedio}
        />
      </View>
    );
  }
}

class RemarkItem extends Component{
  render(){
    return (
      <Text>11111</Text>
    );
  }
}

export default class VeidoDetail extends Component{
  _line(){
    return (
      <View style={styles.line}></View>
    );
  }

  render(){
    let { params } = this.props.navigation.state;
    return (
      <View>
        <Vedio vedioUrl={params.vedioUrl}/>
        <FlatList
          ItemSeparatorComponent={this._line}
          data={test.list}
          renderItem={({item, index}) => <RemarkItem keys={index} />}
          ListFooterComponent={<Text>{'2222'}</Text>}
          ListHeaderComponent={<Text>{'333'}</Text>}
          showsVerticalScrollIndicator={false}
          style={styles.remark}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vedio: {
    position: 'relative',
    width: width,
    height: width * 0.6
  },

  thumb: {
    width: width,
    resizeMode: 'cover',
  },

  play: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 46,
    height: 46,
    paddingTop: 9,
    paddingLeft: 18,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 23,
  },

  line: {
    marginLeft: 10,
    marginRight: 10,
    height: 1,
    backgroundColor:'#E2E2E2'
  },

  remark: {
    height: height - (width * 0.6) - 25,
    marginLeft:5, marginRight: 5,
  }
})