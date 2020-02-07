import {Navigation} from 'react-native-navigation';
import {AUTH_SCREEN} from './src/navigation/screenNames';
import registerScreens from './src/navigation/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {color: '#fff'},
      title: {color: 'black'},
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'black',
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    },
    sideMenu: {
      left: {
        width: 260, 
        height: 270,
        visible: false,
        enabled: true,
        shouldStretchDrawer: false,
        animationVelocity: 2500,
        animationType: 'parallax',
        openGestureMode: 'bezel',
      },
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: AUTH_SCREEN,
              options: {
                topBar: {
                  visible: false,
                },
                statusBar: {
                  style: 'dark',
                },
              },
            },
          },
        ],
      },
    },
  });
});
