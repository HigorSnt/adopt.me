import * as Actions from '../constants';

export const registerReducer = (state, action) => {
  switch (action.type) {
    case Actions.CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case Actions.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case Actions.CHANGE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    case Actions.CHANGE_CNPJ:
      return {
        ...state,
        cnpj: action.payload,
      };

    case Actions.CHANGE_WHATSAPP:
      return {
        ...state,
        whatsapp: action.payload,
      };

    case Actions.CHANGE_PHONE:
      return {
        ...state,
        phone: action.payload,
      };

    case Actions.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case Actions.CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload,
      };

    default:
      return state;
  }
};
