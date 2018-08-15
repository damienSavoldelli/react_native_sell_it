import React from 'react';
import { TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
  input: {
    width: '100%',
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 2,
    fontSize: 18,
    padding: 5,
    marginTop: 10,
  },
});

const Input = (props) => {
  let template = null;

  const { type } = props;

  switch (type) {
    case 'textinput':
      template = (
        <TextInput
          underlineColorAndroid="transparent"
          {...props}
          style={[styles.input, props.overrideStyle]}
        />
      );
      break;

    default:
      return template;
  }

  return template;
};


export default Input;
