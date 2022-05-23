import { Stack, LinearProgress, Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {
  cardsLoadRequestAc,
  cardUnlikeRequestAc,
  cardLikeRequestAc,
  cardRemoveRequestAc,
} from '../store/cards/cards.actions';
import { setFilterAc } from '../store/filters/filters.actions';
import { FilterLikeOption } from '../store/filters/filters.types';
import { getFilteredCards, getLikesFilter, getLoading } from '../store/selectors';
import * as ICard from '../models/card';
import CardsList from '../components/CardsList';
import FilterBar from '../components/FilterBar';

const CardListPage = () => {
  const cards = useTypedSelector((state) => getFilteredCards(state));
  const loading = useTypedSelector((state) => getLoading(state));
  const filters = useTypedSelector((state) => getLikesFilter(state));
  const [likeFilter, setLikeFilter] = useState<FilterLikeOption>(filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsLoadRequestAc());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilterAc(likeFilter));
  }, [dispatch, likeFilter]);

  const toggleLike = (card: ICard.Card) => {
    if (card.liked) {
      dispatch(cardUnlikeRequestAc(card.id));
    } else {
      dispatch(cardLikeRequestAc(card.id));
    }
  };

  const removeCard = (id: number) => {
    dispatch(cardRemoveRequestAc(id));
  };

  const FiltersChange = (likeFilter: string) => {
    if (likeFilter === 'LIKED') {
      setLikeFilter('ALL');
    }
    if (likeFilter === 'ALL') {
      setLikeFilter('LIKED');
    }
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
            <FilterBar filters={filters} onFiltersChange={FiltersChange} />
          </Grid>
        </Grid>
        <CardsList items={cards} onItemRemove={removeCard} onToggleLike={toggleLike} />
      </Grid>
    </Box>
  );
};

export default CardListPage;
