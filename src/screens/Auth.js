import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import startMainTabs from './startMainTabs';

export default class FindPlaceAuthScreen extends Component {
  loginHandler = () => {
    startMainTabs()
  };
  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}
