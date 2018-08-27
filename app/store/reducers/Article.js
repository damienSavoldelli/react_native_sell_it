import { GET_ARTICLES } from '../types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};
