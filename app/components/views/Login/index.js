import React, { Component } from 'react';
import {
  View, TouchableWithoutFeedback, Keyboard, ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
  getOrientation, setOrientationListner, removeOrientationListener, getPlateform, getTokens, setTokens
} from '../../utils/misc';

import { AutoSigin } from '../../../store/actions/User';

import styles from './styles';

import Logo from './Logo';
import LoginPanel from './LoginPanel';
import LoadTabs from '../Tabs';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      platform: getPlateform(),
      orientation: getOrientation(500),
      logoAnimation: false,      
    };

    setOrientationListner(this.changeOrientation);
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

  componentDidMount() {
    getTokens((values) => {      
      if (values[0][1] === null) {
        this.setState({loading:false});
      } else {
        this.props.AutoSigin(values[1][1]).then(() => {
          if (!this.props.User.userData.token) {
            this.setState({loading:false});
          } else {
            setTokens(this.props.User.userData, () => {
              LoadTabs();
            });
          }
        });
      }
      
    })
  }

  componentWillUnmount() {
    removeOrientationListener();
  }


  render() {
    const { platform, orientation, logoAnimation, loading } = this.state;
    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator
            size="large"
          />
        </View>
      )
    }
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

const mapStateToProps = (state) => {
  return {
    User: state.User
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({AutoSigin}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
