import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoPortrait: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 100,
    '@media ios': {
      marginTop: 5,
    },
  },
  logoLandscape: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    '@media ios': {
      marginTop: 5,
    },
  },
  sell: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: '#555',
  },
  it: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: '#00ADA9',
  },
  ImageLoginPanel: {
    width: 270,
    height: 150,
  },
  button: {
    '@media ios': {
      marginBottom: 0,
    },
    '@media android': {
      marginBottom: 10,
      marginTop: 10,
    },
  },
  errors: {
    marginBottom: 20,
    marginTop: 10,
  },
  error: {
    color: 'red',
    fontFamily: 'Roboto-Black',
  },
});


export default styles;
