import { Card } from '../../models/card';
import { CardsActionTypes } from './cards.types';

export function cardsLoadRequestAc() {
  return { type: CardsActionTypes.CARDS_LOAD_REQUEST };
}

export function cardsLoadSuccessAc(cards: Card[]) {
  return { type: CardsActionTypes.CARDS_LOAD_SUCCESS, cards };
}

export function cardsLoadFailureAc() {
  return { type: CardsActionTypes.CARDS_LOAD_FAILURE };
}

export function cardLikeRequestAc(id: number) {
  return { type: CardsActionTypes.CARD_LIKE_REQUEST, id };
}

export function cardLikeSuccessAc(id: number) {
  return { type: CardsActionTypes.CARD_LIKE_SUCCESS, id };
}

export function cardLikeFailureAc() {
  return { type: CardsActionTypes.CARD_LIKE_FAILURE };
}

export function cardUnlikeRequestAc(id: number) {
  return { type: CardsActionTypes.CARD_UNLIKE_REQUEST, id };
}

export function cardUnlikeSuccessAc(id: number) {
  return { type: CardsActionTypes.CARD_UNLIKE_SUCCESS, id };
}

export function cardUnlikeFailureAc() {
  return { type: CardsActionTypes.CARD_UNLIKE_FAILURE };
}

export function cardRemoveRequestAc(id: number) {
  return { type: CardsActionTypes.CARD_REMOVE_REQUEST, id };
}

export function cardRemoveSuccessAc(id: number) {
  return { type: CardsActionTypes.CARD_REMOVE_SUCCESS, id };
}

export function cardRemoveFailureAc() {
  return { type: CardsActionTypes.CARD_REMOVE_FAILURE };
}

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
