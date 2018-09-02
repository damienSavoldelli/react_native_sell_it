import axios from 'axios';

import {
  REGISTER_USER, SIGN_USER, AUTO_SIGIN_IN, GET_USER_POSTS, DELETE_USER_POST,
} from '../types';

import {
  FIREBASEURL, SIGNUP, SIGNIN, REFRESH,
} from '../../config/api';
import { setTokens, getTokens } from '../../components/utils/misc';

export function Signin(data) {
  const request = axios({
    method: 'POST',
    url: SIGNIN,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.data).catch(e => false);

  return {
    type: SIGN_USER,
    payload: request,
  };
}

export function Signup(data) {
  const request = axios({
    method: 'POST',
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.data).catch(e => false);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export const AutoSigin = (refreshToken) => {
  const request = axios({
    method: 'POST',
    url: REFRESH,
    data: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(response => response.data).catch(e => false);

  return {
    type: AUTO_SIGIN_IN,
    payload: request,
  };
};

export function getUserPost(uid) {
  const url = `${FIREBASEURL}articles.json/?orderBy=\"uid\"&equalTo=\"${uid}\"`;

  const request = axios({
    method: 'GET',
    url,
  }).then((response) => {
    const articles = [];
    // for (let key = 0; key < response.data.length; key += 1) {
    //   articles.push({
    //     ...response.data[key],
    //     id: key,
    //   });
    // }
    for (const key in response.data) {
      if (response.data.hasOwnProperty(key)) {
        articles.push({
          ...response.data[key],
          id: key,
        });
      }
    }
    return articles;
  }).catch(e => false);

  return {
    type: GET_USER_POSTS,
    payload: request,
  };
}

export function deleteUserPost(posrId, userDate) {
  const promise = new Promise((resolve, reject) => {
    const url = `${FIREBASEURL}articles/${posrId}.json`;

    const request = axios({
      method: 'DELETE',
      url: `${url}?auth=${userDate.token}`,
    }).then((response) => {
      resolve({ deletePost: true });
    }).catch((e) => {
      const signIn = AutoSigin(userDate.refToken);

      signIn.payload.then((response) => {
        const newTokens = {
          token: response.id_token,
          refToken: response.refresh_token,
          uid: response.user_id,
        };
        setTokens(newTokens, () => {
          axios({
            method: 'DELETE',
            url: `${url}?auth=${newTokens.token}`,
          }).then((response) => {
            resolve({
              userData: newTokens,
              deletePost: true,
            });
          });
        });
      });
    });
  });


  return {
    type: DELETE_USER_POST,
    payload: promise,
  };
}
