import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, TextInput} from 'react-native';
import startMainTabs from './startMainTabs';

export default class FindPlaceAuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Please Login</Text>
        <Button title="Switch to Sign Up" />
        <TextInput placeholder="email" />
        <TextInput placeholder="password" />
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    padding: 20,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
});
