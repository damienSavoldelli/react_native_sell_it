import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import Reducers from '../store/reducers';

const reduxCompose = compose;

if (__DEV__) {
  reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const ConfigureStore = () => createStore(Reducers, reduxCompose(applyMiddleware(promiseMiddleware)));

export default ConfigureStore;
