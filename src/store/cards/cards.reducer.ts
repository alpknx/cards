import { CardsAction } from './cards.actions';
import { CardsState, CardsActionTypes } from './cards.types';

const initialState: CardsState = {
  cards: [],
  loading: false,
};

export default function cardsReducer(state = initialState, action: CardsAction): CardsState {
  switch (action.type) {
    case CardsActionTypes.CARDS_LOAD_REQUEST: {
      return { ...state, loading: true };
    }
    case CardsActionTypes.CARDS_LOAD_SUCCESS: {
      return { ...state, loading: false, cards: action.cards };
    }
    case CardsActionTypes.CARDS_LOAD_FAILURE: {
      return { ...state, loading: false };
    }

    case CardsActionTypes.CARD_LIKE_REQUEST: {
      return { ...state, loading: true };
    }
    case CardsActionTypes.CARD_LIKE_SUCCESS: {
      const cards = [...state.cards];
      return {
        ...state,
        loading: false,
        cards: [
          ...cards.map((card) => {
            if (card.id === action.id) {
              return { ...card, liked: true };
            }
            return card;
          }),
        ],
      };
    }
    case CardsActionTypes.CARD_LIKE_FAILURE: {
      return { ...state, loading: false };
    }

    case CardsActionTypes.CARD_UNLIKE_REQUEST: {
      return { ...state, loading: true };
    }
    case CardsActionTypes.CARD_UNLIKE_SUCCESS: {
      const cards = [...state.cards];
      return {
        ...state,
        loading: false,
        cards: [
          ...cards.map((card) => {
            if (card.id === action.id) {
              return { ...card, liked: false };
            }
            return card;
          }),
        ],
      };
    }
    case CardsActionTypes.CARD_UNLIKE_FAILURE: {
      return { ...state, loading: false };
    }

    case CardsActionTypes.CARD_REMOVE_REQUEST: {
      return { ...state, loading: true };
    }
    case CardsActionTypes.CARD_REMOVE_SUCCESS: {
      return { ...state, loading: false, cards: state.cards.filter((card) => card.id !== action.id) };
    }

    case CardsActionTypes.CARD_REMOVE_FAILURE: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}
