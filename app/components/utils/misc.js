import { Dimensions, Platform, AsyncStorage } from 'react-native';


export const getOrientation = value => (
  Dimensions.get('window').height > value ? 'portrait' : 'landscape'
);

export const setOrientationListner = callback => Dimensions.addEventListener('change', callback);

export const removeOrientationListener = () => (
  Dimensions.removeEventListener('change')
);

export const getPlateform = () => ((Platform.OS === 'ios') ? 'ios' : 'android');

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
