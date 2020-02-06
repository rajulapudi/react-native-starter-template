// @flow

import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';

import AuthScreen from '../screens/Auth';
import FindPlace from '../screens/FindPlace';
import SharePlace from '../screens/SharePlace';
import PlaceDetail from '../screens/PlaceDetail';

import {
  AUTH_SCREEN,
  FIND_PLACE,
  SHARE_PLACE,
  PLACE_DETAIL,
} from './screenNames';

const store = configureStore();

function WrappedComponent(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default function() {
  Navigation.registerComponent(AUTH_SCREEN, () => WrappedComponent(AuthScreen));
  Navigation.registerComponent(FIND_PLACE, () => WrappedComponent(FindPlace));
  Navigation.registerComponent(SHARE_PLACE, () => WrappedComponent(SharePlace));
  Navigation.registerComponent(PLACE_DETAIL, () =>
    WrappedComponent(PlaceDetail),
  );
  console.info('All screens have been registered...');
}
