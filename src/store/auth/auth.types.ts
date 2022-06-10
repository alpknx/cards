import { User } from "../../models/user";

export interface AuthState {
	currentUser: User;
	error: any;
}

export enum AuthActionTypes {
	LOG_IN_START = 'LOG_IN_START',
   LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
   LOG_IN_FAILURE = 'LOG_IN_FAILURE',
   LOG_OUT = 'LOG_OUT'
}
