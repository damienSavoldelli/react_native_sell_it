import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';
import ConfigureStore from './app/config/store';

import Home from './app/components/views/Home';
import Login from './app/components/views/Login';
import AddPost from './app/components/views/Admin/AddPost';
import UserPost from './app/components/views/Admin/UserPost';
import Article from './app/components/views/Article';

import SideDrawer from './app/components/views/SideDrawer';

const store = ConfigureStore();

EStyleSheet.build();

Navigation.registerComponent(
  'sell_it_app.Login',
  () => Login,
  store,
  Provider,
);

Navigation.registerComponent(
  'sell_it_app.Home',
  () => Home,
  store,
  Provider,
);

Navigation.registerComponent(
  'sell_it_app.AddPost',
  () => AddPost,
  store,
  Provider,
);

Navigation.registerComponent(
  'sell_it_app.UserPost',
  () => UserPost,
  store,
  Provider,
);

Navigation.registerComponent(
  'sell_it_app.SideDrawer',
  () => SideDrawer,
  store,
  Provider,
);

Navigation.registerComponent(
  'sell_it_app.Article',
  () => Article,
  store,
  Provider,
);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sell_it_app.Login',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true,
    },
  },
});
