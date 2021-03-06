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
    height: 200,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 10,
    paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5,
    borderRadius: 5,
    borderWidth: 0,
    textAlignVertical: 'top',
  },

  button: {
    marginLeft: 10, marginRight: 10,
  }
})

export default class PostRemark extends Component{
  static navigationOptions = {
    title: '输入评论',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitleStyle: styles.headerTitleStyle
  }

  _press = () => {
    this.props.navigation.navigate('VedioDetail', {vedioUrl: 'https://cdn2.unrealengine.com/ueOverview%2FTopCarousel%2FSizzleForWeb2-3ac4d0248789094033bcfe038a67128bd8bb5733.mp4'});
  }

  render(){
    return (
      <ScrollView>
        <View>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="输入评论"
              multiline={true}
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

