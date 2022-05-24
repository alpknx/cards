import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../models/card';
import { RootState } from '../store';

export interface CardsSliceState {
  cards: Card[];
  loading: boolean;
}

const initialState: CardsSliceState = {
  cards: [],
  loading: false,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    cardsLoadRequest: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    cardsLoadSuccess: (state, action: PayloadAction<Card[]>) => {
      state.loading = false;
      state.cards = action.payload;
    },
    cardsLoadFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    cardLikeRequest: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    cardLikeSuccess: (state, action: PayloadAction<number>) => {
      const cards = [...state.cards];
      return {
        ...state,
        loading: false,
        cards: [
          ...cards.map((card) => {
            if (card.id === action.payload) {
              return { ...card, liked: false };
            }
            return card;
          }),
        ],
      };
    },
    cardLikeFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    cardUnLikeRequest: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    cardUnLikeSuccess: (state, action: PayloadAction<number>) => {
      const cards = [...state.cards];
      return {
        ...state,
        loading: false,
        cards: [
          ...cards.map((card) => {
            if (card.id === action.payload) {
              return { ...card, liked: false };
            }
            return card;
          }),
        ],
      };
    },
    cardUnLikeFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    cardRemoveRequest: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    cardRemoveSuccess: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
      state.loading = false;
    },
    cardRemoveFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  cardsLoadRequest,
  cardsLoadSuccess,
  cardsLoadFailure,
  cardLikeRequest,
  cardLikeSuccess,
  cardLikeFailure,
  cardUnLikeRequest,
  cardUnLikeSuccess,
  cardUnLikeFailure,
  cardRemoveRequest,
  cardRemoveSuccess,
  cardRemoveFailure,
} = cardsSlice.actions;

export const cardsSelector = (state: RootState) => state.cards;

// Reducer
const cardsSliceReducer = cardsSlice.reducer;
export default cardsSliceReducer;
