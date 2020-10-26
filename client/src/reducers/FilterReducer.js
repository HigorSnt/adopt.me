import * as Actions from '../constants';

export const filterReducer = (state, action) => {
  switch (action.type) {
    case Actions.CHANGE_AGE:
      return {
        ...state,
        ageValue: action.payload,
      };

    case Actions.CHANGE_OPTIONS_SELECTED:
      return {
        ...state,
        optionsSelected: action.payload,
      };

    case Actions.CHANGE_UF_SELECTED:
      return {
        ...state,
        ufSelected: action.payload,
      };

    default:
      return state;
  }
};
