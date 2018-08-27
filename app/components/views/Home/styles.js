import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    marginTop: 5,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginLeft: 10,
  },
  categoryText: {
    color: '#FFF',
    marginRight: 5,
  },
  isLoadingContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  isLoadingText: {
    color: 'lightgrey',
  },
  articleContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  articleContent: {
    flex: 1,
  },
  blockRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  card: {
    flex: 2,
  },
  itemTextContainer: {
    padding: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6444',
  },
  itemTextTitle: {
    fontFamily: 'Roboto-Black',
    color: '#4C4C4C',
    marginBottom: 5,
  },
  itemTextPrice: {
    fontFamily: 'Roboto-Black',
    color: '#00ADA9',
    marginBottom: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
  },
  blockGridStyle: {
    backgroundColor: '#F1F1F1',
  },
  blockGridStyleLeft: {
    marginRight: 2.5,
  },
  blockGridStyleRight: {
    marginLeft: 2.5,
  },
});

export default styles;
