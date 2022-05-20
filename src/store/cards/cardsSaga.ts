import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCards, likeCard, removeCard, unlikeCard } from '../../api/api';
import { Card } from '../../models/card';
import {
  cardLikeFailure,
  cardLikeSuccess,
  cardRemoveFailure,
  cardRemoveSuccess,
  cardsLoadFailure,
  cardsLoadSuccess,
  cardUnlikeFailure,
  cardUnlikeSuccess,
} from './cards-actions';
import { CardsActionTypes } from './cards-types';

function* cardsLoadSaga() {
  try {
    const data: Card[] = yield call(fetchCards);
    yield put(cardsLoadSuccess(data));
  } catch (error) {
    yield put(cardsLoadFailure());
  }
}

function* likeSaga(action: any) {
  try {
    yield call(likeCard, action.id);
    yield put(cardLikeSuccess(action.id));
  } catch (error) {
    yield put(cardLikeFailure());
  }
}

function* unlikeSaga(action: any) {
  try {
    yield call(unlikeCard, action.id);
    yield put(cardUnlikeSuccess(action.id));
  } catch (error) {
    yield put(cardUnlikeFailure());
  }
}

function* removeSaga(action: any) {
  try {
    yield call(removeCard, action.id);
    yield put(cardRemoveSuccess(action.id));
  } catch (error) {
    yield put(cardRemoveFailure());
  }
}

export function* cardsSaga() {
  yield all([
    takeLatest(CardsActionTypes.CARDS_LOAD_REQUEST, cardsLoadSaga),
    takeLatest(CardsActionTypes.CARD_LIKE_REQUEST, likeSaga),
    takeLatest(CardsActionTypes.CARD_UNLIKE_REQUEST, unlikeSaga),
    takeLatest(CardsActionTypes.CARD_REMOVE_REQUEST, removeSaga),
  ]);
}
