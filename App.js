import { Navigation } from 'react-native-navigation';

<<<<<<< HEAD
import Login from './app/Login';
import Home from './app/Home';
import AddPost from './app/Admin/AddPost';

Navigation.registerComponent('sellitApp.Login', () => Login);
Navigation.registerComponent('sellitApp.Home', () => Home);
Navigation.registerComponent('sellitApp.AddPost', () => AddPost);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sellitApp.Login',
=======
import Home from './app/Home';
import Login from './app/Login';
import AddPost from './app/Admin/AddPost';


Navigation.registerComponent('sell_it_app.Login', () => Login);
Navigation.registerComponent('sell_it_app.Home', () => Home);
Navigation.registerComponent('sell_it_app.AddPost', () => AddPost);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sell_it_app.Login',
>>>>>>> gitignore
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true,
    },
  },
});
