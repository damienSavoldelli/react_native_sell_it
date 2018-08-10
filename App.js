import { Navigation } from 'react-native-navigation';

import Login from './app/Login';
import Home from './app/Home';
import AddPost from './app/Admin/AddPost';

Navigation.registerComponent('sellitApp.Login', () => Login);
Navigation.registerComponent('sellitApp.Home', () => Home);
Navigation.registerComponent('sellitApp.AddPost', () => AddPost);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sellitApp.Login',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true,
    },
  },
});
