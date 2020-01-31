import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function startMainTabs() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'screen.FindPlace',
                    options: {
                      topBar: {
                        title: {
                          text: 'FIND',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../assets/beautiful-place.jpg'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  text: 'FIND',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'screen.SharePlace',
                    options: {
                      topBar: {
                        title: {
                          text: 'SHARE',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../assets/beautiful-place.jpg'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  text: 'SHARE',
                },
              },
            },
          },
        ],
      },
    },
  });
}
