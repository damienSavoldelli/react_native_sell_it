import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    padding: 10,
  },
  containerImage: {
    position: 'relative',
  },
  articleImage: {
    width: '100%',
    height: 250,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  priceTag: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#FF6444',
    padding: 10,
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Roboto-BlackItalic',
    borderRadius: 20,
  },
  articleTitle: {
    marginTop: 15,
    marginBottom: 10,
    fontFamily: 'Roboto-black',
    fontSize: 30,
    textAlign: 'center',
    color: '#474143',
  },
  articleDecription: {
    fontFamily: 'Roboto-Medium',
  },
  containerOwner: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  ownerEmail: {
    fontSize: 18,
  },
});

export default styles;
