import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

export default function Sidebar() {
  return (
    <View
      style={[styles.container, {width: Dimensions.get('window').width * 0.6}]}>
      <Text>Sidebar</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    flex: 1,
  },
});
