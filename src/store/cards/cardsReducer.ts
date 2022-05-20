import { CardsAction } from './cards-action';
import { CardsState, CardsActionTypes } from './cards-types';

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
      const cardToLike = state.cards.find((card) => card.id === action.id);
      if (cardToLike !== undefined) {
        cardToLike.liked = true;
      }
      return { ...state, loading: false, cards: [...state.cards] };
    }
    case CardsActionTypes.CARD_LIKE_FAILURE: {
      return { ...state, loading: false };
    }

    case CardsActionTypes.CARD_UNLIKE_REQUEST: {
      return { ...state, loading: true };
    }
    case CardsActionTypes.CARD_UNLIKE_SUCCESS: {
      const cardToUnlike = state.cards.find((card) => card.id === action.id);
      if (cardToUnlike !== undefined) {
        cardToUnlike.liked = false;
      }
      return { ...state, loading: false, cards: [...state.cards] };
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
