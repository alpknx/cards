import { Box, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Card as CardUI } from '@mui/material';
import { pink } from '@mui/material/colors';

import { Card } from '../models/card';

type CardListProps = {
  items: Card[];
  onToggleLike: (card: Card) => void;
  onItemRemove: (id: number) => void;
};

const CardList = ({ items, onToggleLike, onItemRemove }: CardListProps) => {
  return (
    <Box margin='16px'>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
          <Grid container direction='row' justifyContent='space-evenly' alignItems='center' spacing={2}>
            {items.map((item) => {
              return (
                <Grid item key={item.id} xs={1} sm={4} md={4}>
                  <CardUI key={item.id}>
                    <CardMedia image={item.download_url} component='img' alt='' height='194' width='358'></CardMedia>
                    <CardContent>
                      <Typography variant='body2' color='text.secondary'>
                        {item.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton onClick={() => onToggleLike(item)}>
                        {item.liked ? <FavoriteIcon sx={{ color: pink[500] }} /> : <FavoriteBorderIcon />}
                      </IconButton>
                      <IconButton onClick={() => onItemRemove(item.id)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </CardActions>
                  </CardUI>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardList;
