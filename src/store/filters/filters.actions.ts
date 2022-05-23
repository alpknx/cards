import { FiltersActionTypes, FiltersState } from './filters.types';

export function setFiltersAction(filters: FiltersState) {
  return { type: FiltersActionTypes.SET_FILTERS, filters };
}

export interface SetFilters {
  type: FiltersActionTypes.SET_FILTERS;
  filters: FiltersState;
}

export type FiltersAction = SetFilters;
