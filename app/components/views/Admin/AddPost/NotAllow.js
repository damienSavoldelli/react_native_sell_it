import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Navigation } from 'react-native-navigation';

import styles from './styles';


import { navigatorDrawer } from '../../../utils/misc';

class NotAllow extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDrawer(event, this);
    });
  }

  render() {
    return (
      <View style={styles.notAllowContainer}>
        <Icon
          name="user-circle"
          size={60}
          color="#F96655"
        />
        <Text> You need to log in register to Sell !!! </Text>

        <Button
          title="LOGIN / REGISTER"
          color="#FD9727"
          onPress={() => {
            Navigation.startSingleScreenApp({
              screen: {
                screen: 'sell_it_app.Login',
                title: 'Login',
                navigatorStyle: {
                  navBarHidden: true,
                },
              },
            });
          }}
        />
      </View>
    );
  }
}

export default NotAllow;
