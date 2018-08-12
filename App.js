import { Navigation } from 'react-native-navigation';

import Home from './app/components/views/Home';
import Login from './app/components/views/Login';
import AddPost from './app/components/views/Admin/AddPost';

Navigation.registerComponent('sell_it_app.Login', () => Login);
Navigation.registerComponent('sell_it_app.Home', () => Home);
Navigation.registerComponent('sell_it_app.AddPost', () => AddPost);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sell_it_app.Login',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true,
    },
  },
});
