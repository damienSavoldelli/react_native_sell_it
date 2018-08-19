import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import FalseIcon from '../../../assets/images/circle.png';

const LoadTabs = () => {
  Promise.all([
    Icon.getImageSource('bars', 20, 'white'),
    Icon.getImageSource('dollar', 20, 'white'),
    Icon.getImageSource('search', 20, 'white'),
  ]).then((sources) => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'sell_it_app.Home',
          label: 'Home',
          title: 'Home',
          icon: sources[2],
        },
        {
          screen: 'sell_it_app.AddPost',
          label: 'Sell it',
          title: 'Sell it',
          icon: sources[1],
        },
      ],
    });
  });
};

export default LoadTabs;
