import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 10,
    backgroundColor: '#ee735c'
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  },

  headerStyle: {
    height: 45,
    paddingRight: 40
  },

  headerTitleStyle: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'normal',
  },

  textArea: {
    borderWidth: 1,
    backgroundColor: '#fff',
    marginRight: 10, marginLeft: 10, marginTop: 5, marginBottom: 5,
    paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5,
    borderRadius: 5,
    borderWidth: 0,
  },

  button: {
    marginLeft: 10, marginRight: 10, marginTop: 10,
  }
})

export default class PostRemark extends Component{
  static navigationOptions = {
    header: null
  }

  _press = () => {
    this.props.navigation.navigate('VedioList');
  }

  render(){
    return (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>用户注册</Text>
          </View>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="输入用户名"
              style={styles.textArea}
            />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="输入密码"
              style={styles.textArea}
            />
            <View style={styles.button}>
              <Button
                onPress={this._press}
                title="submit it"
                color="#ee745d"
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}
