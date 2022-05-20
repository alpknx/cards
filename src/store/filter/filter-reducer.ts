//export type FilterLikeOption = 'ALL' | 'LIKED' | 'UNLIKED';
export type FilterLikeOption = 'ALL' | 'LIKED';

export interface FilterState {
  likeFilter: FilterLikeOption;
}

export enum FilterActionTypes {
  SET_FILTER = 'SET_FILTER',
}

export interface setFilter {
  type: FilterActionTypes.SET_FILTER;
  value: FilterLikeOption;
}

type FilterAction = setFilter;

export function setFilterAc(value: FilterLikeOption) {
  return { type: FilterActionTypes.SET_FILTER, value };
}

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
