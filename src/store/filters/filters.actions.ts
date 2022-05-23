import { FilterActionTypes, FilterLikeOption } from './filters.types';

export function setFilterAc(value: FilterLikeOption) {
  return { type: FilterActionTypes.SET_FILTER, value };
}

export interface setFilter {
  type: FilterActionTypes.SET_FILTER;
  value: FilterLikeOption;
}

export type FilterAction = setFilter;
