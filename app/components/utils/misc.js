import { Dimensions, Platform, AsyncStorage } from 'react-native';


export const getOrientation = value => (
  Dimensions.get('window').height > value ? 'portrait' : 'landscape'
);

export const setOrientationListner = callback => Dimensions.addEventListener('change', callback);

export const removeOrientationListener = () => (
  Dimensions.removeEventListener('change')
);

export const getPlateform = () => ((Platform.OS === 'ios') ? 'ios' : 'android');


export const navigatorDrawer = (event, $this) => {
  if (event.type === 'NavBarButtonPress' && event.id === 'DrawerButton') {
    $this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
    });
  }
};

export const navigatorDeepLink = (event, $this) => {
  if (event.type === 'DeepLink') {
    $this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
    });

    if (event.payload.typeLink === 'tab') {
      $this.props.navigator.switchToTab({
        tabIndex: event.payload.indexLink,
      });
    } else {
      $this.props.navigator.showModal({
        screen: event.link,
        animationType: 'slide-horizontal',
        navigatorStyle: {
          navBarBackgroundColor: '#00ADA9',
          screenBackgroundColor: '#FFF',
        },
        backButtonHidden: false,
      });
    }
  }
};

export const getTokens = (callback) => {
  AsyncStorage.multiGet([
    '@sellitApp@token',
    '@sellitApp@refreshToken',
    '@sellitApp@expireToken',
    '@sellitApp@uid',
  ]).then((value) => {
    callback(value);
  });
};

export const setTokens = (values, callback) => {
  const now = new Date();
  const expiration = now.getTime() + (3600 * 1000);

  AsyncStorage.multiSet([
    ['@sellitApp@token', values.token],
    ['@sellitApp@refreshToken', values.refToken],
    ['@sellitApp@expireToken', expiration.toString()],
    ['@sellitApp@uid', values.uid],
  ]).then((response) => {
    callback();
  });
};


export const gridTwoColumns = (list) => {
  const newArticles = [];
  const articles = list;

  let vessel = {};
  let count = 1;
  let j = 0;

  if (articles) {
    for (let i = 0; i < articles.length; i += 1) {
      j = i + 1;

      if (count === 1) {
        vessel.blockOne = articles[i];
        count += 1;


        if (!articles[j]) newArticles.push(vessel);
      } else {
        vessel.blockTwo = articles[i];
        newArticles.push(vessel);

        count = 1;
        vessel = {};
      }
    }
  }
  return newArticles;
};
