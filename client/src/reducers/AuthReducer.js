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

    default:
      return state;
  }
};
