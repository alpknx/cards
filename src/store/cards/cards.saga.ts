import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCards, likeCard, removeCard, unlikeCard } from '../../api/api';
import { Card } from '../../models/card';
import {
  cardLikeFailureAc,
  cardLikeSuccessAc,
  cardRemoveFailureAc,
  cardRemoveSuccessAc,
  cardsLoadFailureAc,
  cardsLoadSuccessAc,
  cardUnlikeFailureAc,
  cardUnlikeSuccessAc,
} from './cards.actions';
import { CardsActionTypes } from './cards.types';

function* cardsLoadSaga() {
  try {
    const data: Card[] = yield call(fetchCards);
    yield put(cardsLoadSuccessAc(data));
  } catch (error) {
    yield put(cardsLoadFailureAc());
  }
}

function* likeSaga(action: any) {
  try {
    yield call(likeCard, action.id);
    yield put(cardLikeSuccessAc(action.id));
  } catch (error) {
    yield put(cardLikeFailureAc());
  }
}

function* unlikeSaga(action: any) {
  try {
    yield call(unlikeCard, action.id);
    yield put(cardUnlikeSuccessAc(action.id));
  } catch (error) {
    yield put(cardUnlikeFailureAc());
  }
}

function* removeSaga(action: any) {
  try {
    yield call(removeCard, action.id);
    yield put(cardRemoveSuccessAc(action.id));
  } catch (error) {
    yield put(cardRemoveFailureAc());
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
