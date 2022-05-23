import { CardsSliceState } from './cards/cards.slice';
import { CardsState } from './cards/cards.types';
import { FiltersSliceState } from './filters/filter.slice';
import { FiltersState } from './filters/filters.types';

export interface AppState {
  cards: CardsSliceState;
  filters: FiltersSliceState;
}
