import { Card } from '../../models/card';
import { CardsActionTypes } from './cards-types';

export interface cardsLoadRequest {
  type: CardsActionTypes.CARDS_LOAD_REQUEST;
}

export interface cardsLoadSuccess {
  type: CardsActionTypes.CARDS_LOAD_SUCCESS;
  cards: Card[];
}

export interface cardsLoadFailure {
  type: CardsActionTypes.CARDS_LOAD_FAILURE;
}

export interface cardLikeRequest {
  type: CardsActionTypes.CARD_LIKE_REQUEST;
  id: number;
}

export interface cardLikeSuccess {
  type: CardsActionTypes.CARD_LIKE_SUCCESS;
  id: number;
}

export interface cardLikeFailure {
  type: CardsActionTypes.CARD_LIKE_FAILURE;
}

export interface cardUnlikeRequest {
  type: CardsActionTypes.CARD_UNLIKE_REQUEST;
  id: number;
}

export interface cardUnlikeSuccess {
  type: CardsActionTypes.CARD_UNLIKE_SUCCESS;
  id: number;
}

export interface cardUnlikeFailure {
  type: CardsActionTypes.CARD_UNLIKE_FAILURE;
}

export interface cardRemoveRequest {
  type: CardsActionTypes.CARD_REMOVE_REQUEST;
  id: number;
}

export interface cardRemoveSuccess {
  type: CardsActionTypes.CARD_REMOVE_SUCCESS;
  id: number;
}

export interface cardRemoveFailure {
  type: CardsActionTypes.CARD_REMOVE_FAILURE;
}

export type CardsAction =
  | cardsLoadRequest
  | cardsLoadSuccess
  | cardsLoadFailure
  | cardLikeRequest
  | cardLikeSuccess
  | cardLikeFailure
  | cardUnlikeRequest
  | cardUnlikeSuccess
  | cardUnlikeFailure
  | cardRemoveRequest
  | cardRemoveSuccess
  | cardRemoveFailure;
