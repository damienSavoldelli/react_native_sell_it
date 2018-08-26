import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'


import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export class SideDrawer extends Component {
  state = {
    buttons: [
      {
        value: 'Home',
        iconName: 'home',
        goTo: 'sell_it_app.Home',
        typeGoTo: 'tab',
        index: 0,
        privacy: false,
      },
      {
        value: 'Sell',
        iconName: 'dollar',
        goTo: 'sell_it_app.AddPost',
        typeGoTo: 'tab',
        index: 1,
        privacy: false,
      },
      {
        value: 'My post',
        iconName: 'th-list',
        goTo: 'sell_it_app.UserPost',
        typeGoTo: 'view',
        index: null,
        privacy: true,
      },
    ]
  }
  
  button(button) {
    return (
      <Icon.Button
        key={button.value}
        name={button.iconName}
        backgroundColor='#474143'
        iconStyle={{ width:15 }}
        color='#FFF'
        size={18}
        onPress={() => {
          this.props.navigator.handleDeepLink({
            link: button.goTo, 
            payload: {
              typeLink: button.typeGoTo,
              indexLink: button.index
            }
          })
        }}
      >
        <Text style={styles.buttonText}>{button.value}</Text>
      </Icon.Button>
    )    
  }

  renderButtons(buttons) {
    return buttons.map(button => (
      !button.privacy 
      ? this.button(button) 
      : this.props.User.userData 
        ? this.button(button)
        : null
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
         {this.renderButtons(this.state.buttons)}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    User: state.User
  }
}

export default connect(mapStateToProps, null)(SideDrawer);
