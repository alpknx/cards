import { User } from '../../models/user';
import { AuthAction } from './auth.actions';
import { AuthState, AuthActionTypes } from './auth.types';

const INITIAL_STATE = {
  currentUser: {} as User,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: action.payload,
      };

    case AuthActionTypes.LOG_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case AuthActionTypes.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
