import { all, call, put } from 'redux-saga/effects';
import AuthService from '../../api/Authservice';
import { User } from '../../models/user';
import { logInFailureAction, logInSuccessAction, logOutAction } from './auth.actions';
import { AuthActionTypes } from './auth.types';

const logIn = async (username: string, password: string) => {
  const response = await AuthService.getUsers();
  const mockUser = response.data.find((user) => user.username === username && user.password === password);
  if (mockUser) {
    localStorage.setItem('auth', 'true');
    localStorage.setItem('username', mockUser.username);
  }
};

const logOut = async () => {
  localStorage.removeItem('auth');
  localStorage.removeItem('username');
};

export function* handleLogin(username: string, password: string) {
  try {
    const user: User = yield logIn(username, password);
    yield put(logInSuccessAction(user));
  } catch (error) {
    yield put(logInFailureAction(error));
  }
}

export function* handleLogout() {
  //WorkerOrHanlder
  yield logOut();
  yield put(logOutAction());
}

export function* onLogInStart() {
  yield (AuthActionTypes.LOG_IN_START, handleLogin);
}

export function* onLogOut() {
  yield (AuthActionTypes.LOG_OUT, handleLogout);
}

export function* authSaga() {
  yield all([call(onLogInStart), call(onLogOut)]);
}
