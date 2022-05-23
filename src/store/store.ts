import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cardsReducer from './cards/cards.reducer';
import cardsSliceReducer from './cards/cards.slice';
import filtersSliceReducer from './filters/filter.slice';
import { filtersReducer } from './filters/filters.reducer';
import rootSaga from './root.saga';

const rootReducer = combineReducers({
  cards: cardsSliceReducer,
  filters: filtersSliceReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
