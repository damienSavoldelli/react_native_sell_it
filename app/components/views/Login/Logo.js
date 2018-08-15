import React, { Component } from 'react';
import {
  Text, View, Animated, Easing,
} from 'react-native';

import styles from './styles';

class Logo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellAnim: new Animated.Value(0),
      itAnim: new Animated.Value(0),
    };

    Animated.sequence([
      Animated.timing(this.state.sellAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutCubic,
      }),
      Animated.timing(this.state.itAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.easeOutCubic,
      }),
    ]).start(() => {
      this.props.showLogin();
    });
  }

  render() {
    const { sellAnim, itAnim } = this.state;

    return (
      <View style={
          this.props.orientation === 'portrait'
            ? styles.logoPortrait
            : styles.logoLandscape
          }
      >
        <Animated.View
          style={{
            opacity: sellAnim,
            top: sellAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          }}
        >
          <Text style={styles.sell}>Sell</Text>
        </Animated.View>
        <Animated.View
          style={{
            opacity: itAnim,
          }}
        >
          <Text style={styles.it}>It</Text>
        </Animated.View>
      </View>
    );
  }
}

export default Logo;
