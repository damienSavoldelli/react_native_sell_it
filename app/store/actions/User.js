import axios from 'axios';

import {
  REGISTER_USER, SIGN_USER,
} from '../types';

import { SIGNUP, SIGNIN } from '../../config/api';

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
