import { all, fork } from 'redux-saga/effects';
import { cardsSaga } from './cards/cards.saga';
import { cardsSliceSaga } from './cards/cards.slice.saga';

export default function* rootSaga() {
  yield all([fork(cardsSliceSaga)]);
}
