import { GET_ARTICLES, ADD_ARTICLE, RESET_ARTICLE } from '../types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, list: action.payload };
    case ADD_ARTICLE:
      return { ...state, newArticle: action.payload };
    case RESET_ARTICLE:
      return { ...state, newArticle: action.payload };
    default:
      return state;
  }
};
