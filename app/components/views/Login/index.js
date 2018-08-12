import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import LoadTabs from '../Tabs';

export class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="got to home"
          onPress={() => {
            LoadTabs();
          }}
        />
      </View>
    );
  }
}

export default Login;
