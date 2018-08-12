import { Navigation } from 'react-native-navigation';

import FalseIcon from '../../../assets/images/circle.png';

const LoadTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'sell_it_app.Home',
        label: 'Home',
        title: 'Home',
        icon: FalseIcon,
      },
      {
        screen: 'sell_it_app.AddPost',
        label: 'Sell it',
        title: 'Sell it',
        icon: FalseIcon,
      },
    ],
  });
};

export default LoadTabs;
