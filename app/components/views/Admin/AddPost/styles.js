import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  notAllowContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postFormContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  postFormTitle: {
    flex: 1,
    alignItems: 'center',
  },
  mainTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    color: '#00ADA9',
  },
  subTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    color: '#00ADA9',
    marginTop: 30,
    marginBottom: 20,
  },
  picker: {
    marginTop: 0,
  },
  inputText: {
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 0,
    padding: 10,
  },
  inputTextMultiLine: {
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 0,
    padding: 10,
    minHeight: 100,
  },
  modalContainer: {
    padding: 20,
  },
  errorItem: {
    fontFamily: 'Roboto-Black',
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
});

export default styles;
