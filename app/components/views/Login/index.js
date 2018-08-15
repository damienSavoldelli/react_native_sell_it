import React, { Component } from 'react';
import {
  View, TouchableWithoutFeedback, Keyboard
} from 'react-native';

import { 
  getOrientation, setOrientationListner, removeOrientationListener, getPlateform
} from '../../utils/misc';

import styles from './styles';

import Logo from './Logo';
import LoginPanel from './LoginPanel';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platform: getPlateform(),
      orientation: getOrientation(500),
      logoAnimation: false,      
    };

    setOrientationListner(this.changeOrientation);
  }

  componentWillUnmount() {
    removeOrientationListener();
  }

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500),
    });
  }

  showLogin = () => {
    this.setState({
      logoAnimation: true,
    });
  }


  render() {
    const { platform, orientation, logoAnimation } = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Logo 
            showLogin={this.showLogin}
            orientation={orientation} 
          />
          <LoginPanel
            platform={platform} 
            show={logoAnimation}
            orientation={orientation}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;
