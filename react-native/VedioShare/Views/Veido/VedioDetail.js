import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

export default class VeidoDetail extends Component{
  render(){
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>{params.title}</Text>
      </View>
    );
  }
}