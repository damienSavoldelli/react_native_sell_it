import React from 'react';
import { TextInput, Picker } from 'react-native';
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
    case 'picker':
      template = (
        <Picker
          selectedValue={props.value}
          {...props}
        >
          {
            props.options.map((item, i) => (
              <Picker.Item key={i} label={item} value={item} />
            ))
          }
        </Picker>
      );
      break;
    default:
      return template;
  }

  return template;
};


export default Input;
