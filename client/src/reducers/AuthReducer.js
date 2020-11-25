import * as Actions from '../constants';

export const authReducer = (state, action) => {
  switch (action.type) {
    case Actions.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case Actions.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case Actions.SET_LOGGED_USER:
      return {
        ...state,
        ong: action.payload.ong,
        token: action.payload.token
      };

    default:
      return state;
  }
};
