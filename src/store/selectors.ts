import { createSelector } from 'reselect';
import { Card } from '../models/card';
import { FiltersState } from './filters/filters.types';
import { AppState } from './types';

export const getLoading = (state: AppState) => {
  return state.cards.loading;
};

export const getCards = (state: AppState) => {
  return state.cards.cards;
};

export const getFilters = (state: AppState) => {
  return state.filters;
};

export const getFilteredCards = createSelector(getFilters, getCards, (filters: FiltersState, cards: Card[]) => {
  let filteredCards = cards;

  if (filters.likeFilter) {
    filteredCards = filteredCards.filter((card) => card.liked);
  }

  return filteredCards;
});
