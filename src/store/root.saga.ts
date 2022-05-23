import { all, fork } from 'redux-saga/effects';
import { cardsSaga } from './cards/cards.saga';

export default function* rootSaga() {
  yield all([fork(cardsSaga)]);
}
