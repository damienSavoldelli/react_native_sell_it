import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { navigatorDrawer, navigatorDeepLink } from '../../utils/misc';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event, this);
      navigatorDrawer(event, this);
    });
  }

  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;
