import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FiltersSliceState {
  likeFilter: boolean;
}

const initialState: FiltersSliceState = {
  likeFilter: false,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FiltersSliceState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export const filtersSelector = (state: RootState) => state.filters;

// Reducer
const filtersSliceReducer = filtersSlice.reducer;
export default filtersSliceReducer;
