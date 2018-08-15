import { Dimensions, Platform } from 'react-native';


export const getOrientation = value => (
  Dimensions.get('window').height > value ? 'portrait' : 'landscape'
);

export const setOrientationListner = callback => Dimensions.addEventListener('change', callback);

export const removeOrientationListener = () => (
  Dimensions.removeEventListener('change')
);

export const getPlateform = () => ((Platform.OS === 'ios') ? 'ios' : 'android');
