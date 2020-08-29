// App Imports
import { isEmpty } from "../../../setup/helpers";
import {
  SET_USER,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGOUT,
  SET_STYLE,
} from "./actions";

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null,
  stylePreference: null,
  classy: 'this is a string about being really classy',
  sporty: 'this is a string about being super sporty',
  nature: 'this is a string about one with nature',
  punk: 'this is a string about being a punk',

};

// State - Will add an additional case to add an additional state that is styleSurveyCompleted: true or false, depending on whether a survey has been completed
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      };

    case SET_STYLE:
      return {
        ...state,
        stylePreference: action.stylePreference,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading,
      };

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null,
      };

    default:
      return state;
  }
};
