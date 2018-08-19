import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';


const navStyle = {
  navBarTextFontSize: 20,
  navBarTextColor: '#FFF',
  navBarTextFontFamily: 'RobotoCondensed-Bold',
  navBarBackgroundColor: '#00ADA9',
  navBarTitleTextCentered: true, // android only
  navBarSubTitleTextCentered: true,

};

const navLeftButton = sources => ({
  title: 'Drawer',
  id: 'DrawerButton',
  icon: sources[0],
  disableIconTint: true,
  buttonColor: '#FFF',
});

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
          navigatorStyle: navStyle,
          navigatorButtons: {
            leftButtons: [navLeftButton(sources)],
          },
        },
        {
          screen: 'sell_it_app.AddPost',
          label: 'Sell it',
          title: 'Sell it',
          icon: sources[1],
          navigatorStyle: navStyle,
          navigatorButtons: {
            leftButtons: [navLeftButton(sources)],
          },
        },
      ],
      tabsStyle: {
        tabBarButtonColor: 'grey',
        tabBarSelectedButtonColor: '#FFC636',
        tabBarTextFontFamiily: 'RobotoCondensed-Bold',
        tabBarBackgroundColor: '#FFF',
        tabBarTranslucent: false,
      },
      appStyle: {
        tabBarButtonColor: 'grey',
        tabBarSelectedButtonColor: '#FFC636',
        tabBarTextFontFamiily: 'RobotoCondensed-Bold',
        tabBarBackgroundColor: '#FFF',
        navBarButtonColor: '#FFF',
        keepStyleAcrossPush: true,
      },
      drawer: {
        left: {
          screen: 'sell_it_app.SideDrawer',
          fixedWidth: 100,
        },
      },
    });
  });
};

export default LoadTabs;
