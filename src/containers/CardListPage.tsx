import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { Card } from '../models/card';
import {
  cardsLoadRequestAction,
  cardUnlikeRequestAction,
  cardLikeRequestAction,
  cardRemoveRequestAction,
} from '../store/cards/cards.actions';
import { getFilteredCards, getFilters, getLoading } from '../store/selectors';
import CardList from '../components/CardList';
import { FiltersState } from '../store/filters/filters.types';
import FiltersBar from '../components/FilterBar';
import { setFiltersAction } from '../store/filters/filters.actions';
import { cardLikeRequest, cardRemoveRequest, cardsLoadRequest, cardUnLikeRequest } from '../store/cards/cards.slice';
import { FiltersSliceState, setFilters } from '../store/filters/filter.slice';

const CardListPage = () => {
  const dispatch = useDispatch();

  const filters = useTypedSelector((state) => getFilters(state));
  const cards = useTypedSelector((state) => getFilteredCards(state));
  const loading = useTypedSelector((state) => getLoading(state));

  useEffect(() => {
    dispatch(cardsLoadRequest(true));
  }, [dispatch]);

  const toggleLike = (card: Card) => {
    if (card.liked) {
      dispatch(cardUnLikeRequest(card.id));
    } else {
      dispatch(cardLikeRequest(card.id));
    }
  };

  const removeCard = (id: number) => {
    dispatch(cardRemoveRequest(id));
  };

  const onFiltersChange = (filters: FiltersSliceState) => {
    dispatch(setFilters(filters));
  };

  if (loading) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <LinearProgress color='error' />
      </Stack>
    );
  }

  return (
    <Box margin='16px'>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={3}>
          <Grid container justifyContent='center'>
            <FiltersBar filters={filters} onFiltersChange={onFiltersChange} />
          </Grid>
        </Grid>
        <CardList items={cards} onItemRemove={removeCard} onToggleLike={toggleLike} />;
      </Grid>
    </Box>
  );
};

export default CardListPage;
