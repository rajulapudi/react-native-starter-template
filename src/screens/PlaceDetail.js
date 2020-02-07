import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {deletePlace} from '../store/actions';
import {Navigation} from 'react-native-navigation';

class PlaceDetail extends Component {
  deleteHandler = () => {
    this.props.deletePlace(this.props.selectedPlace.key);
    Navigation.pop(this.props.componentId);
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={this.props.selectedPlace.image}
            style={styles.placeImage}
          />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.deleteHandler}
            style={{alignItems: 'center'}}>
            <Icon name="delete" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(null, {deletePlace})(PlaceDetail);

const styles = StyleSheet.create({
  container: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
});
