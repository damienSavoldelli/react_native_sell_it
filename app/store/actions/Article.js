import axios from 'axios';

import {
  GET_ARTICLES, ADD_ARTICLE, RESET_ARTICLE,
} from '../types';

import { FIREBASEURL } from '../../config/api';

export function getArticle(category) {
  let url = `${FIREBASEURL}articles.json`;

  if (category !== 'All') {
    url = `${url}/?orderBy=\"category\"&equalTo=\"${category}\"`;
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

export function addArticle(data, token) {
  const url = `${FIREBASEURL}articles.json?auth=${token}`;

  const request = axios({
    method: 'POST',
    url,
    data,
  }).then(response => response.data).catch(e => false);

  return {
    type: ADD_ARTICLE,
    payload: request,
  };
}

export function resetArticle(data, token) {
  return {
    type: RESET_ARTICLE,
    payload: '',
  };
}
