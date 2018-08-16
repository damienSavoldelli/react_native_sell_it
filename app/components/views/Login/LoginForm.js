import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Signup, Signin } from '../../../store/actions/User'

import styles from './styles';

import { setTokens, getTokens } from '../../utils/misc';

import Input from '../../utils/Input';
import ValidationRules from '../../utils/validationRules';

import LoadTabs from '../Tabs';

export class LoginForm extends Component {

  state = {
    type:'Login',
    action: 'Login',
    actionMode: 'Not user, Register',
    hasErrors : false,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          isEmail: true,
        },
      },
      password:{
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          minLength: 6,
        },
      },
      confirmPassword:{
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPassword: "password",
        },
      },
    }
  }

  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      type: type === 'Login' ? 'Register' : 'Login',
      action: type === 'Login' ? 'Register' : 'Login',
      actionMode: type === 'Login' ? 'Not registered Login' : 'Not a user, Register',
    })
  }

  renderConfimrPassword = () => (
    this.state.type !== 'Login' ?
      <Input 
        placeholder="Confirm your password"
        type={this.state.form.confirmPassword.type}
        textContentType={"password"}
        defaultValue={this.state.form.confirmPassword.value}
        onChangeText={value => this.updateInput('confirmPassword', value)}
        autoCapitalize={'none'}
        keyboardType={'default'}
        secureTextEntry
      />
    : null
  )

  updateInput = (target, value) => {
    let formCopy = this.state.form;
    formCopy[target].value = value;

    let rules = formCopy[target].rules;

    formCopy[target].valid = ValidationRules(value, rules, formCopy);
    
    this.setState({hasErrors: false, form:formCopy})
  }

  manageAcces = () => {
    if (!this.props.User.userData.uid) {
      this.setState({hasErrors: true});
    } else {
      setTokens(this.props.User.userData, () => {
        this.setState({hasErrors: false});
        LoadTabs();        
      });
    }
  }

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};

    const formCopy = this.state.form;

    for (let key in formCopy) {
      if (this.state.type === 'Login') {
        if (key !== 'confirmPassword') {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }
    if (isFormValid) {
      if (this.state.type == 'Login') {
        this.props.Signin(formToSubmit).then(() => {
          this.manageAcces()
        })
      } else {
        this.props.Signup(formToSubmit).then(() => {
          this.manageAcces()
        })
      }
      
    } else {
      this.setState({hasErrors: true})
    }
  }

  renderHasErrors = () => (
    this.state.hasErrors ?
    <View style={styles.errors}>
      <Text style={styles.error}>Oops, check your infos</Text>
    </View>
    : null
  )

  cleanErrors = () => {
    this.setState({hasErrors: false})
  }

  render() {
    const { action, actionMode, form } = this.state;
    const { email, password } = form;
    return (
      <View>
        <Input 
          placeholder="Enter your email"
          type={email.type}
          textContentType={"emailAddress"}
          defaultValue={email.value}
          onChangeText={ value => this.updateInput('email', value) }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          onFocus={this.cleanErrors}
        />
        <Input 
          placeholder="Enter your password"
          type={password.type}
          textContentType={"password"}
          defaultValue={password.value}
          onChangeText={value => this.updateInput('password', value)}
          autoCapitalize={'none'}
          keyboardType={'default'}
          secureTextEntry
          onFocus={this.cleanErrors}
        />
        
        {this.renderConfimrPassword()}
        {this.renderHasErrors()}

        <View style={styles.button}>
          <Button
            title={action}
            color='#FD9727'
            onPress={this.submitUser}
          />
        </View>

        <View style={styles.button}>
          <Button
            title={actionMode}
            color='lightgrey'
            onPress={this.changeFormType}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="I'll do it later"
            color='lightgrey'
            onPress={() => LoadTabs()}
          />
        </View>
        
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    User: state.User
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({Signup, Signin}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
