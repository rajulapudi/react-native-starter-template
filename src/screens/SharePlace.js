import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import PlaceInput from '../components/PlaceInput/PlaceInput';
import {connect} from 'react-redux';
import {addPlace} from '../store/actions';
import {Navigation} from 'react-native-navigation';

class SharePlace extends Component {
  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }
  componentWillUnmount() {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }
  navigationButtonPressed = ({buttonId}) => {
    console.log('button pressed');
    const {componentId} = this.props;

    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  };
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
