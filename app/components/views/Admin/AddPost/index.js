import React, { Component } from 'react';
import { Text, View, ScrollView, Button, Modal } from 'react-native';

import { navigatorDrawer } from '../../../utils/misc';
import Input from '../../../utils/Input';
import ValidationRules from '../../../utils/validationRules'

import styles from './styles';

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      hasErrors: false,
      modalVisible: false,
      modalSuccess: false,
      arrErrors: [],
      form: {
        category: {
          value: '',
          name: 'category',
          valid: false,
          type: 'picker',
          options: ['Select a category', 'Sports', 'Music', 'Clothing', 'Electronics'],
          rules: {
            isRequired: true,
          },
          errorMsg: 'You need to select a category',
        },
        title: {
          value: '',
          name: 'title',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            maxLength:40,
          },
          errorMsg: 'You need to enter a title, max of 50 character',
        },
        description: {
          value: '',
          name: 'description',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            maxLength:200,
          },
          errorMsg: 'You need to enter a title, max of 200 character',
        },
        price: {
          value: '',
          name: 'price',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            maxLength:6,
          },
          errorMsg: 'You need to enter a price, max of 6',
        },
        email: {
          value: '',
          name: 'price',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isEmail:true,
          },
          errorMsg: 'You need to enter a email, a valide email',
        },
      },
    };

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDrawer(event, this);
    });
  }

  updateInput = (target, value) => {
    let formCopy = this.state.form;
    formCopy[target].value = value;

    let rules = formCopy[target].rules;

    formCopy[target].valid = ValidationRules(value, rules, formCopy);
    
    this.setState({hasErrors: false, form:formCopy})
  }

  submitFormHandler = () => {
    let isFormValid = true;
    let formToSubmit = {};

    const formCopy = this.state.form;

    for (let key in formCopy) {
      isFormValid = isFormValid && formCopy[key].valid;
      formToSubmit[key] = formCopy[key].value;
    }
    if (isFormValid) {
      console.log('====================================');
      console.log("Data to submit", formToSubmit);
      console.log('====================================');

      this.setState({
        loading:true,
        modalSuccess: true,
      })
      
    } else {
      let arrErrors = [];

      for(let key in formCopy) {
        if(!formCopy[key].valid) {
          arrErrors.push(formCopy[key].errorMsg)
        }
      }

      this.setState({
        loading:false,
        hasErrors: true,
        modalVisible: true,
        arrErrors
      })
    }
  }

  showErrorsArray(errors) {
    return (
      errors 
      ? 
        errors.map((item, i) => (
          <Text key={i} style={styles.errorItem}>- {item}</Text>
        ))
      : null
    );   
  }

  clearErrors = () => {
    this.setState({
      hasErrors: false,
      modalVisible: false,
      arrErrors: []
    })
  }

  resetSellitScreen = () => {
    const formCopy = this.state.form;

    for(let key in formCopy) {
      formCopy[key].valid = false;
      formCopy[key].value = '';
    }

    this.setState({
      loading: false,
      modalSuccess: false,
      hasErrors: false,
      modalVisible: false,
      arrErrors: []
    })

    this.props.navigator.switchToTab({
      tabIndex:0
    })
  }

  render() {
    const { form, loading, modalVisible, arrErrors, modalSuccess } = this.state;
    return (
      <ScrollView>
        <Button 
          title='Got back home'
          onPress={() => {
            this.resetSellitScreen();
          }}
        />

        <View style={styles.postFormContainer}>
          <View style={styles.postFormTitle}>
            <Text style={styles.mainTitle}> Sell your things </Text>
          </View>

          <View style={{ flex:1, alignItems:'center' }}>
            <Text style={styles.subTitle}>Choose a category</Text>
          </View>

          <View>
            <Input
              placeholder="Select a category"
              type={form.category.type}
              value={form.category.value}
              onValueChange={value => this.updateInput('category', value)}
              options={form.category.options}
              overrideStyle={styles.picker}
            />
          </View>


          <View style={{ flex:1, alignItems:'center' }}>
            <Text style={styles.subTitle}>Describe what you'r selling</Text>
          </View>

          <View>
            <Text>Title of Description</Text>
            <Input
              placeholder="Enter a title"
              type={form.title.type}
              value={form.title.value}
              onChangeText={value => this.updateInput('title', value)}
              overrideStyle={styles.inputText}
            ></Input>
          </View>
          <View>
            <Input
              placeholder="Enter a description"
              type={form.description.type}
              value={form.description.value}
              onChangeText={value => this.updateInput('description', value)}
              multiline={true}
              numberOfLine={4}
              overrideStyle={styles.inputTextMultiLine}
            ></Input>
          </View>
          <View>
            <Text style={{ marginTop:20, marginBottom:10 }}>Add her how much you want for the item</Text>

            <Input
              placeholder="Enter a price"
              type={form.price.type}
              value={form.price.value}
              onChangeText={value => this.updateInput('price', value)}
              overrideStyle={styles.inputText}
              keyboardType={'numeric'}
            ></Input>
          </View>

           <View style={{ flex:1, alignItems:'center' }}>
            <Text style={styles.subTitle}>Add your contact data</Text>
          </View>

          <View>
            <Text style={{ marginTop:10, marginBottom:10 }}>Your Email</Text>

            <Input
              placeholder="Enter a email"
              type={form.email.type}
              value={form.email.value}
              onChangeText={value => this.updateInput('email', value)}
              overrideStyle={styles.inputText}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            ></Input>
          </View>

          {
            !loading
            ? <Button
              title='Sell it'
              color='lightgrey'
              onPress={this.submitFormHandler}
            />
            : null
          }

          <Modal
            animationType='slide'
            visible= {modalVisible}
            onRequestClose ={() => {}}
          >
            <View style={styles.modalContainer}>
              {this.showErrorsArray(arrErrors)}
              <Button 
                title='Got it !'
                onPress={() => this.clearErrors()}
              />
            </View>
          </Modal>

          <Modal
            animationType='slide'
            visible= {modalSuccess}
            onRequestClose ={() => {}}
          >
            <View style={styles.modalContainer}>
              <Text>Good Job !!</Text>
              <Button 
                title='Got it !'
                onPress={() => this.resetSellitScreen()}
              />
            </View>
          </Modal>

        </View>
      </ScrollView>

    );
  }
}

export default AddPost;
