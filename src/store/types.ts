import { CardsState } from './cards/cards.types';
import { FilterState } from './filters/filters.types';

export interface AppState {
  cards: CardsState;
  filters: FilterState;
}
