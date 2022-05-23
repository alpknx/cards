import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCards, likeCard, removeCard, unlikeCard } from '../../api/api';
import { Card } from '../../models/card';
import {
  cardLikeFailureAction,
  cardLikeSuccessAction,
  cardRemoveFailureAction,
  cardRemoveSuccessAction,
  cardsLoadFailureAction,
  cardsLoadSuccessAction,
  cardUnlikeFailureAction,
  cardUnlikeSuccessAction,
} from './cards.actions';
import { CardsActionTypes } from './cards.types';

function* cardsLoadSaga() {
  try {
    const data: Card[] = yield call(fetchCards);
    yield put(cardsLoadSuccessAction(data));
  } catch (error) {
    yield put(cardsLoadFailureAction());
  }
}

function* likeSaga(action: any) {
  try {
    yield call(likeCard, action.id);
    yield put(cardLikeSuccessAction(action.id));
  } catch (error) {
    console.log(error);
    yield put(cardLikeFailureAction());
  }
}

function* unlikeSaga(action: any) {
  try {
    yield call(unlikeCard, action.id);
    yield put(cardUnlikeSuccessAction(action.id));
  } catch (error) {
    yield put(cardUnlikeFailureAction());
  }
}

function* removeSaga(action: any) {
  try {
    yield call(removeCard, action.id);
    yield put(cardRemoveSuccessAction(action.id));
  } catch (error) {
    yield put(cardRemoveFailureAction());
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
