import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import PlaceInput from '../components/PlaceInput/PlaceInput';
import {connect} from 'react-redux';
import {addPlace} from '../store/actions';

class SharePlace extends Component {
  placeAddedHandler = placeName => {
    this.props.addPlace(placeName);
  };
  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}


export default connect(null, {addPlace})(SharePlace);
