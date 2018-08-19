import axios from 'axios';

import {
  REGISTER_USER, SIGN_USER, AUTO_SIGIN_IN,
} from '../types';

import { SIGNUP, SIGNIN, REFRESH } from '../../config/api';

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

export function AutoSigin(refreshToken) {
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
}
