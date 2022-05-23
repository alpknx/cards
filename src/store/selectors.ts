import { createSelector } from 'reselect';
import { Card } from '../models/card';
import { FilterLikeOption } from './filters/filters.types';
import { AppState } from './types';

export const getLoading = (state: AppState) => {
  return state.cards.loading;
};

export const getCards = (state: AppState) => {
  return state.cards.cards;
};

export const getLikesFilter = (state: AppState) => {
  return state.filters.likeFilter;
};

export const getFilteredCards = createSelector(getLikesFilter, getCards, (filter: FilterLikeOption, cards: Card[]) => {
  console.log(filter);
  switch (filter) {
    case 'LIKED':
      return cards.filter((card) => card.liked);
    default:
      return cards;
  }
});
