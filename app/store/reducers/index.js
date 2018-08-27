import { combineReducers } from 'redux';

import User from './User';
import Article from './Article';

const rootReducer = combineReducers({
  User,
  Article,
});

export default rootReducer;
