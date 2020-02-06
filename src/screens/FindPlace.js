import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PlaceList from '../components/PlaceList/PlaceList';
import {connect} from 'react-redux';
import {deletePlace} from '../store/actions';
import {Navigation} from 'react-native-navigation';
import {PLACE_DETAIL} from '../navigation/screenNames';

class FindPlace extends Component {
  itemSelectHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    Navigation.push(this.props.componentId, {
      component: {
        name: PLACE_DETAIL,
        passProps: {
          selectedPlace: selPlace,
        },
        options: {
          topBar: {
            title: {
              text: selPlace.name,
            },
          },
        },
      },
    });
  };
  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places,
  };
};

export default connect(mapStateToProps, {deletePlace})(FindPlace);
