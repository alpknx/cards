import { CardsState } from './cards/cards.types';
import { FilterState } from './filter/filter.reducer';

export interface AppState {
  cards: CardsState;
  filters: FilterState;
}
