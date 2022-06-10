import { User } from '../../models/user';
import { AuthActionTypes } from './auth.types';

export function logInStartAction() {
  return { type: AuthActionTypes.LOG_IN_START };
}

export function logInSuccessAction(user: User) {
  return { type: AuthActionTypes.LOG_IN_SUCCESS, user };
}

export function logInFailureAction(error: any) {
  return { type: AuthActionTypes.LOG_IN_FAILURE, error };
}

export function logOutAction() {
  return { type: AuthActionTypes.LOG_OUT };
}

export interface logInStart {
  type: AuthActionTypes.LOG_IN_START;
  payload: User;
}

export interface logInSuccess {
  type: AuthActionTypes.LOG_IN_SUCCESS;
  payload: User;
}

export interface logInFailure {
  type: AuthActionTypes.LOG_IN_FAILURE;
  payload: any;
}

export interface logOut {
  type: AuthActionTypes.LOG_OUT;
}

export type AuthAction = logInStart | logInSuccess | logInFailure | logOut;
