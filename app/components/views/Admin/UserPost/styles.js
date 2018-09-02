import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemWrapper: {
    borderWidth: 1,
    borderColor: '#ececec',
    borderRadius: 2,
    marginBottom: 20,
  },
  itemTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  itemTitleText: {
    fontFamily: 'Roboto-Black',
  },
  itemDescription: {
    padding: 10,
  },
  itemDescriptionText: {

  },
  small: {
    fontSize: 12,
  },
  itemButtons: {
    alignItems: 'center',
  },
  delete: {
    fontFamily: 'Roboto-Black',
    color: '#F44336',
    paddingBottom: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalTitle: {
    fontFamily: 'Roboto-black',
    fontSize: 20,
    color: '#00ADA9',
  },
  modalButtons: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: 'lightgreen',
    padding: 10,
    margin: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  escapeText: {
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    color: '#FFF',
    padding: 12,
    margin: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default styles;
