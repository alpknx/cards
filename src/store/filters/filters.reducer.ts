import { FiltersAction } from './filters.actions';
import { FiltersActionTypes, FiltersState } from './filters.types';

const initialState: FiltersState = {
  likeFilter: false,
};

export function filtersReducer(state = initialState, action: FiltersAction) {
  switch (action.type) {
    case FiltersActionTypes.SET_FILTERS:
      return { ...state, ...action.filters };
    default:
      return state;
  }
}
