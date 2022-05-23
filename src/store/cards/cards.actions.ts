import { Card } from '../../models/card';
import { CardsActionTypes } from './cards.types';

export function cardsLoadRequestAction() {
  return { type: CardsActionTypes.CARDS_LOAD_REQUEST };
}

export function cardsLoadSuccessAction(cards: Card[]) {
  return { type: CardsActionTypes.CARDS_LOAD_SUCCESS, cards };
}

export function cardsLoadFailureAction() {
  return { type: CardsActionTypes.CARDS_LOAD_FAILURE };
}

export function cardLikeRequestAction(id: number) {
  return { type: CardsActionTypes.CARD_LIKE_REQUEST, id };
}

export function cardLikeSuccessAction(id: number) {
  return { type: CardsActionTypes.CARD_LIKE_SUCCESS, id };
}

export function cardLikeFailureAction() {
  return { type: CardsActionTypes.CARD_LIKE_FAILURE };
}

export function cardUnlikeRequestAction(id: number) {
  return { type: CardsActionTypes.CARD_UNLIKE_REQUEST, id };
}

export function cardUnlikeSuccessAction(id: number) {
  return { type: CardsActionTypes.CARD_UNLIKE_SUCCESS, id };
}

export function cardUnlikeFailureAction() {
  return { type: CardsActionTypes.CARD_UNLIKE_FAILURE };
}

export function cardRemoveRequestAction(id: number) {
  return { type: CardsActionTypes.CARD_REMOVE_REQUEST, id };
}

export function cardRemoveSuccessAction(id: number) {
  return { type: CardsActionTypes.CARD_REMOVE_SUCCESS, id };
}

export function cardRemoveFailureAction() {
  return { type: CardsActionTypes.CARD_REMOVE_FAILURE };
}

export interface CardsLoadRequest {
  type: CardsActionTypes.CARDS_LOAD_REQUEST;
}

export interface CardsLoadSuccess {
  type: CardsActionTypes.CARDS_LOAD_SUCCESS;
  cards: Card[];
}

export interface CardsLoadFailure {
  type: CardsActionTypes.CARDS_LOAD_FAILURE;
}

export interface CardLikeRequest {
  type: CardsActionTypes.CARD_LIKE_REQUEST;
  id: number;
}

export interface CardLikeSuccess {
  type: CardsActionTypes.CARD_LIKE_SUCCESS;
  id: number;
}

export interface CardLikeFailure {
  type: CardsActionTypes.CARD_LIKE_FAILURE;
}

export interface CardUnlikeRequest {
  type: CardsActionTypes.CARD_UNLIKE_REQUEST;
  id: number;
}

export interface CardUnlikeSuccess {
  type: CardsActionTypes.CARD_UNLIKE_SUCCESS;
  id: number;
}

export interface CardUnlikeFailure {
  type: CardsActionTypes.CARD_UNLIKE_FAILURE;
}

export interface CardRemoveRequest {
  type: CardsActionTypes.CARD_REMOVE_REQUEST;
  id: number;
}

export interface CardRemoveSuccess {
  type: CardsActionTypes.CARD_REMOVE_SUCCESS;
  id: number;
}

export interface CardRemoveFailure {
  type: CardsActionTypes.CARD_REMOVE_FAILURE;
}

export type CardsAction =
  | CardsLoadRequest
  | CardsLoadSuccess
  | CardsLoadFailure
  | CardLikeRequest
  | CardLikeSuccess
  | CardLikeFailure
  | CardUnlikeRequest
  | CardUnlikeSuccess
  | CardUnlikeFailure
  | CardRemoveRequest
  | CardRemoveSuccess
  | CardRemoveFailure;
