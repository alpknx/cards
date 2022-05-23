import { CardsState } from './cards/cards.types';
import { FiltersState } from './filters/filters.types';

export interface AppState {
  cards: CardsState;
  filters: FiltersState;
}
