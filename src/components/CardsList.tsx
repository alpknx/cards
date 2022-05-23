import { Box, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Card } from '@mui/material';
import * as ICard from '../models/card';
import { pink } from '@mui/material/colors';

type CardListProps = {
  items: ICard.Card[];
  onToggleLike: (card: ICard.Card) => void;
  onItemRemove: (id: number) => void;
};

const CardsList = ({ items, onToggleLike, onItemRemove }: CardListProps) => {
  return (
    <Box margin='16px'>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
          <Grid container direction='row' justifyContent='space-evenly' alignItems='center' spacing={2}>
            {items.map((item) => {
              return (
                <Grid item key={item.id} xs={1} sm={4} md={4}>
                  <Card key={item.id}>
                    <CardMedia image={item.download_url} component='img' alt='' height='194' width='358'></CardMedia>
                    <CardContent>
                      <Typography variant='body2' color='text.secondary'>
                        {item.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton onClick={(e) => onToggleLike(item)}>
                        {item.liked ? <FavoriteIcon sx={{ color: pink[500] }} /> : <FavoriteBorderIcon />}
                      </IconButton>
                      <IconButton onClick={(e) => onItemRemove(item.id)}>
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
