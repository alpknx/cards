export type FilterLikeOption = 'ALL' | 'LIKED';

export interface FilterState {
  likeFilter: FilterLikeOption;
}

export enum FilterActionTypes {
  SET_FILTER = 'SET_FILTER',
}
