import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function startMainTabs() {
  Promise.all([
    Icon.getImageSource('place', 30, 'red'),
    Icon.getImageSource('share', 30, 'red'),
    Icon.getImageSource('menu', 30, 'black'),
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'screen.SideBar',
            },
          },
          center: {
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
                        icon: sources[0],
                        testID: 'FIRST_TAB_BAR_BUTTON',
                        text: 'FIND',
                      },
                      topBar: {
                        leftButtons: [
                          {
                            id: 'sideMenu',
                            icon: sources[2],
                            title: 'Menu',
                          },
                        ],
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
                        icon: sources[1],
                        testID: 'SECOND_TAB_BAR_BUTTON',
                        text: 'SHARE',
                      },
                      topBar: {
                        leftButtons: [
                          {
                            id: 'sideMenu',
                            icon: sources[2],
                            title: 'Menu',
                          },
                        ],
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
}
