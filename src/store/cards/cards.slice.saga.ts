import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCards, likeCard, removeCard, unlikeCard } from '../../api/api';
import { Card } from '../../models/card';
import {
  cardLikeFailure,
  cardLikeRequest,
  cardLikeSuccess,
  cardRemoveFailure,
  cardRemoveRequest,
  cardRemoveSuccess,
  cardsLoadFailure,
  cardsLoadRequest,
  cardsLoadSuccess,
  cardUnLikeFailure,
  cardUnLikeRequest,
  cardUnLikeSuccess,
} from './cards.slice';

function* cardsLoadSaga() {
  try {
    const data: Card[] = yield call(fetchCards);
    yield put(cardsLoadSuccess(data));
  } catch (error) {
    yield put(cardsLoadFailure(false));
  }
}

function* likeSaga(action: any) {
  try {
    yield call(likeCard, action.id);
    yield put(cardLikeSuccess(action.id));
  } catch (error) {
    yield put(cardLikeFailure(false));
  }
}

function* unlikeSaga(action: any) {
  try {
    yield call(unlikeCard, action.id);
    yield put(cardUnLikeSuccess(action.id));
  } catch (error) {
    yield put(cardUnLikeFailure(false));
  }
}

function* removeSaga(action: any) {
  try {
    yield call(removeCard, action.id);
    yield put(cardRemoveSuccess(action.id));
  } catch (error) {
    yield put(cardRemoveFailure(false));
  }
}

export function* cardsSliceSaga() {
  yield all([
    takeLatest(cardsLoadRequest.type, cardsLoadSaga),
    takeLatest(cardLikeRequest.type, likeSaga),
    takeLatest(cardUnLikeRequest.type, unlikeSaga),
    takeLatest(cardRemoveRequest.type, removeSaga),
  ]);
}
