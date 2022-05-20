import { all, fork } from 'redux-saga/effects';
import { cardsSaga } from './cards/cardsSaga';

export default function* rootSaga() {
  yield all([fork(cardsSaga)]);
}
