import React, { Component } from 'react';
import {
  TouchableHighlight,
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
  constructor(props) {
    super(props);
  
    this.state = {
      isStart: true,
      isPause: true,
    };
  }

  _onLoadStart(){
    console.log(this)
  }

  _onLoad(){
    console.log('_onLoad')
  }

  _onProgress(){
    console.log('_onProgress')
  }

  _onEnd(){
    this.setState({
      isPause: true
    })
  }

  _onError(){
    console.log('_onError')
  }

  _onBuffer(){
    console.log('_onBuffer')
  }

  _onPress(){
    if(this.state.isStart){
      this.setState({
        isStart: false
      })
    }

    this.setState({
      isPause: !this.state.isPause
    })
  }

  render(){
    return (
      <TouchableHighlight onPress={() => this._onPress()}>
        <View style={styles.vedio_container}>
          {this.state.isPause && <Image style={styles.play} source={IMAGE_PLAY}/>}
          {this.state.isStart && <Image style={styles.thumb} source={IMAGE_IMG_2203}/>}
          {!this.state.isStart && <Video
                    ref={(ref) => {
                      this.player = ref;
                    }}    
                    source={{uri: this.props.vedioUrl}} 
                    rate={1}
                    volume={1}
                    muted={false}
                    paused={this.state.isPause}
                    resizeMode="cover"
                    repeat={false}
                    playInBackground={false}
                    onLoadStart={this._onLoadStart}
                    onLoad={() => this._onLoad()} 
                    onProgress={this._onProgress}
                    onEnd={() => this._onEnd()}
                    onError={this._onError}
                    onBuffer={this._onBuffer}
                    style={styles.vedio_video}
                  />}
        </View>
      </TouchableHighlight>
      
    );
  }
}

class RemarkItem extends Component{
  render(){
    return (
      <View style={styles.remark_item}>
        <View style={{marginRight: 10}}>
          <View style={styles.remark_itemPerson}>
            <Image style={styles.remark_image} source={{uri: 'https://avatars7.githubusercontent.com/u/13981470?v=4&s=460'}}/>
            <Text style={styles.remark_name}>Kenshin</Text>
          </View>
        </View>
        <Text>
          very good
        </Text>
      </View>
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
          ListFooterComponent={<Text style={{textAlign: 'center'}}>{'没有更多了'}</Text>}
          showsVerticalScrollIndicator={false}
          style={styles.remark}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vedio_container: {
    position: 'relative',
    width: width,
    height: width * 0.6
  },

  vedio_video: {
    width: width,
    height: width * 0.6,
  },

  thumb: {
    width: width,
    height: width * 0.6,
    resizeMode: 'cover',
  },

  play: {
    position: 'absolute',
    zIndex: 10,
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
  },

  remark_item: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },

  remark_itemPerson:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  remark_image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'cover',
  },

  remark_name: {
    marginLeft: 5,
  }
})