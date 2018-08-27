import axios from 'axios';

import {
  GET_ARTICLES,
} from '../types';

import { FIREBASEURL } from '../../config/api';

export function getArticle(category) {
  let url = `${FIREBASEURL}articles.json`;

  if (category !== 'All') {
    url = '';
  }
  const request = axios({
    method: 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    const articles = [];
    for (const key in response.data) {
      articles.push({
        ...response.data[key],
        id: key,
      });
    }

    return articles;
  }).catch(e => false);

  return {
    type: GET_ARTICLES,
    payload: request,
  };
}
