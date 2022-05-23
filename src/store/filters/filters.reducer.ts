import { FilterAction } from './filters.actions';
import { FilterActionTypes, FilterState } from './filters.types';

const initialState: FilterState = {
  likeFilter: 'ALL',
};

export function filtersReducer(state = initialState, action: FilterAction) {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return { ...state, likeFilter: action.value };
    default:
      return state;
  }
}
