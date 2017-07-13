import React, { Component } from 'react';
import {
  RefreshControl,
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import VeidoDetail from './VedioDetail.js';

const testData = {
  veidoList: [
    {
      title: 'EVA',
      voted: true
    },

    {
      title: '蝙蝠侠：阿卡姆骑士',
      voted: false
    }
  ],

  vedioUrl: 'https://cdn2.unrealengine.com/ueOverview%2FTopCarousel%2FSizzleForWeb2-3ac4d0248789094033bcfe038a67128bd8bb5733.mp4'
}


let cacheResults = {
  page: 1,
  items: [],
  total: 30,
  pageSize: 5,
  nowLength: 0,
}

const width = Dimensions.get('window').width,
      //test 
      IMAGE_IMG_2203 =  require('../../public/images/IMG_2203.png'),

      IMAGE_PLAY =  require('../../public/images/play.png'),
      IMAGE_HEART =  require('../../public/images/heart.png'),
      IMAGE_HEARTACTIVE =  require('../../public/images/heart-solid.png'),
      IMAGE_REMARK =  require('../../public/images/remark.png');

class Item extends Component{
  constructor(props) {
    super(props);

    this.state = {
      row: this.props.row,
      voted: this.props.row.voted
    };
  }

  _onPressVocted(){
    this.setState({
      voted: !this.state.voted 
    })
  }

  render(){
    return (
      <TouchableHighlight onPress={this.props.Press}>
        <View style={styles.item}>
          <Text style={styles.title}>{this.state.row.title}</Text>
          <Image style={styles.thumb} source={IMAGE_IMG_2203}>
            <Image style={styles.play} source={IMAGE_PLAY}/>
          </Image>
          <View style={styles.itemFooter}>
            <TouchableWithoutFeedback onPress={() => this._onPressVocted()}>
              <View style={styles.handleBox}>
                <Image style={styles.up} source={this.state.voted ? IMAGE_HEARTACTIVE : IMAGE_HEART}/>
                <Text style={styles.handleText}>喜欢</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.handleBox}>
              <Image style={styles.commentIcon} source={IMAGE_REMARK}/>
              <Text style={styles.handleText}>评论</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class VedioList extends Component{
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(cacheResults.items),
      isLoadingTail: false,
      isRefreshing: false
    };
  }

  componentDidMount() {
    this._fetchData()
  }

  _fetchData(){
    this.setState({
      isLoadingTail: true
    })

    for(let i = 0; i < cacheResults.pageSize ; i++){
      testData.veidoList.forEach((item, index) => {
        cacheResults.items.push({title: item.title + cacheResults.page * 2 * index + i, voted: item.voted})
      })
    }

    setTimeout(() => {
      cacheResults.nowLength = cacheResults.items.length;
      cacheResults.page += 1;
      this.setState({
        isLoadingTail: false,
        dataSource: this.state.dataSource.cloneWithRows(cacheResults.items)
      })
    }, 2000)    
  }

  _renderRow(row){
    return <Item Press={this._press(row)} row={row}/>
  }

  _press(row){
    return () => this.props.navigation.navigate('VedioDetail', {title: row.title, voted: row.voted, vedioUrl: testData.vedioUrl});
  }

  _hasMore(){
    return cacheResults.nowLength < cacheResults.total;
  }

  _fetchMoreData(){
    if(!this._hasMore() || this.state.isLoadingTail) {
      return;
    }

    this._fetchData();
  }

  _renderFooter(){
    if(!this._hasMore()){
      return (
        <View style={styles.loadingMore}>
          <Text style={styles.loadingText}>没有更多了</Text>
        </View>
      );
    }

    return (
      <ActivityIndicator
        style={styles.loadingMore}
      />
    );
  }

  _onRefresh(){
    if(this.state.isRefreshing) return;

    this.setState({
      isRefreshing: true
    })
    cacheResults.page = 1;

    cacheResults.items = [];

    for(let i = 0; i < cacheResults.pageSize ; i++){
      testData.veidoList.forEach((item, index) => {
        cacheResults.items.push({title: item.title + cacheResults.page * 2 * index + i})
      })
    }

    setTimeout(() => {
      cacheResults.nowLength = cacheResults.items.length;
      cacheResults.page += 1;
      this.setState({
        isRefreshing: false,
        dataSource: this.state.dataSource.cloneWithRows(cacheResults.items)
      })
    }, 2000)

  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>分享视频</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderFooter={() => this._renderFooter()}
          onEndReached={() => this._fetchMoreData()}
          onEndReachedThreshould={20}
          enableEmptySections={true}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => this._onRefresh()}
              tintColor="#ff0000"
              title='Loading...'
              titleColor="#00ff00"
              colors={['#ff0000']}
              progressBackgroundColor="#EAEAEA"
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },

  container: {
    flex: 1,
    backgroundColor: '#f5fcff'
  },

  header: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#ee735c'
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  },

  item: {
    width: width,
    marginBottom: 10,
    backgroundColor: '#fff'
  },

  title: {
    padding: 10,
    fontSize: 18,
    color: '#333'
  },

  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee'
  },

  thumb: {
    width: width,
    height: width / 2,
    resizeMode: 'stretch',
  },

  handleBox: {
    padding: 10,
    flexDirection: 'row',
    width: width / 2 - 0.5,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor: '#fff'
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

  handleText: {
    marginLeft: 12,
    fontSize: 18,
    color: '#333',
  },

  up: {
    width: 24,
    height: 24
  },

  commentIcon: {
    width: 20,
    height: 20,
  },

  loadingMore: {
    marginVertical: 20
  },

  loadingText: {
    color: '#777',
    textAlign: 'center'
  }
});