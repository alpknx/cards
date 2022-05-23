import { Box, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Card } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import * as ICard from '../../models/card';
import {
  cardsLoadRequestAc,
  cardUnlikeRequestAc,
  cardLikeRequestAc,
  cardRemoveRequestAc,
} from '../../store/cards/cards.actions';
import { getFilteredCards, getLoading } from '../../store/selectors';
import FilterButton from '../../components/FilterButton';
import { pink } from '@mui/material/colors';

const CardsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cardsLoadRequestAc());
  }, [dispatch]);

  const cards = useTypedSelector((state) => getFilteredCards(state));
  const loading = useTypedSelector((state) => getLoading(state));

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
            <FilterButton />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' justifyContent='space-evenly' alignItems='center' spacing={2}>
            {cards.map((card: ICard.Card) => {
              return (
                <Grid item key={card.id} xs={1} sm={4} md={4}>
                  <Card key={card.id}>
                    <CardMedia image={card.download_url} component='img' alt='' height='194' width='358'></CardMedia>
                    <CardContent>
                      <Typography variant='body2' color='text.secondary'>
                        {card.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton onClick={(e) => toggleLike(card)}>
                        {card.liked ? <FavoriteIcon sx={{ color: pink[500] }} /> : <FavoriteBorderIcon />}
                      </IconButton>
                      <IconButton onClick={(e) => removeCard(card.id)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardsList;
