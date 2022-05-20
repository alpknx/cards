import { Card } from '../../models/card';
import { CardsActionTypes } from './cards-types';

export function cardsLoadRequest() {
  return { type: CardsActionTypes.CARDS_LOAD_REQUEST };
}

export function cardsLoadSuccess(cards: Card[]) {
  return { type: CardsActionTypes.CARDS_LOAD_SUCCESS, cards };
}

export function cardsLoadFailure() {
  return { type: CardsActionTypes.CARDS_LOAD_FAILURE };
}

export function cardLikeRequest(id: number) {
  return { type: CardsActionTypes.CARD_LIKE_REQUEST, id };
}

export function cardLikeSuccess(id: number) {
  return { type: CardsActionTypes.CARD_LIKE_SUCCESS, id };
}

export function cardLikeFailure() {
  return { type: CardsActionTypes.CARD_LIKE_FAILURE };
}

export function cardUnlikeRequest(id: number) {
  return { type: CardsActionTypes.CARD_UNLIKE_REQUEST, id };
}

export function cardUnlikeSuccess(id: number) {
  return { type: CardsActionTypes.CARD_UNLIKE_SUCCESS, id };
}

export function cardUnlikeFailure() {
  return { type: CardsActionTypes.CARD_UNLIKE_FAILURE };
}

export function cardRemoveRequest(id: number) {
  return { type: CardsActionTypes.CARD_REMOVE_REQUEST, id };
}

export function cardRemoveSuccess(id: number) {
  return { type: CardsActionTypes.CARD_REMOVE_SUCCESS, id };
}

export function cardRemoveFailure() {
  return { type: CardsActionTypes.CARD_REMOVE_FAILURE };
}
