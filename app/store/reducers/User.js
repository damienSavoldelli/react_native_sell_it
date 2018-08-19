import { REGISTER_USER, SIGN_USER, AUTO_SIGIN_IN } from '../types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        userData: {
          uid: action.payload.localId || false,
          token: action.payload.idToken || false,
          refToken: action.payload.refreshToken || false,
        },
      };

    case SIGN_USER:
      return {
        ...state,
        userData: {
          uid: action.payload.localId || false,
          token: action.payload.idToken || false,
          refToken: action.payload.refreshToken || false,
        },
      };
    case AUTO_SIGIN_IN:
      return {
        ...state,
        userData: {
          uid: action.payload.user_id || false,
          token: action.payload.id_token || false,
          refToken: action.payload.refresh_token || false,
        },
      };

    default:
      return state;
  }
};
