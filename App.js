import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';
import FindPlace from './src/screens/FindPlace';
import SharePlace from './src/screens/SharePlace';

/* Register All Screens  */
Navigation.registerComponent(`screen.AuthScreen`, () => AuthScreen);
Navigation.registerComponent(`screen.FindPlace`, () => FindPlace);
Navigation.registerComponent(`screen.SharePlace`, () => SharePlace);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'screen.AuthScreen',
      },
    },
  });
});
