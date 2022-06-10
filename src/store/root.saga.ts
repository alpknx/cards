import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth/auth.saga';
import { cardsSaga } from './cards/cards.saga';

export default function* rootSaga() {
  yield all([
	fork(cardsSaga),
	fork(authSaga)
	]);
}
