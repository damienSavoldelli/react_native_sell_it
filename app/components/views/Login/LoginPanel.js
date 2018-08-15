import React, { Component } from 'react';
import {
  Text, View, Animated, Image,
} from 'react-native';

import styles from './styles';
import LoginForm from './LoginForm';
import BackImage from '../../../assets/images/loginPanel.jpg';


export class LoginPanel extends Component {
  state = {
    animFinished: false,
    backImage : new Animated.Value(0),
    inputForm: new Animated.Value(0)
  }

  componentDidUpdate(prevProps) {    
    if(this.props.show !== prevProps.show && this.props.show && !this.state.animFinished) {
      Animated.parallel([
        Animated.timing(this.state.backImage, {
          toValue:1,
          duration:1000,
        }),
        Animated.timing(this.state.inputForm, {
          toValue:1,
          duration:1500
        })
      ]).start(() => {
        this.setState({animFinished: true});
      })
    }
  }
  render() {
    const {platform, orientation} = this.props;
    return (
      <View>
        <Animated.View
          style={{ opacity: this.state.backImage }}
        >
        {
          (orientation === 'portrait') && 
          <Image 
            style={styles.ImageLoginPanel}
            source={BackImage}
            resizeMode={'contain'}
          />
        }
          
        </Animated.View>

        <Animated.View
          style={{ 
            opacity: this.state.inputForm, 
            top : this.state.inputForm.interpolate({
              inputRange: [0, 1],
              outputRange:[100, 30],
            })
          }}
        >
          <LoginForm 
            platform={platform}
          />
        </Animated.View>
      </View>
    );
  }
}

export default LoginPanel;
