import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilterLikeOption, setFilterAc } from '../store/filter/filter-reducer';

const FilterButton = () => {
  const [likeFilter, setLikeFilter] = useState<FilterLikeOption>('ALL');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilterAc(likeFilter));
  }, [dispatch, likeFilter]);

  if (likeFilter === 'LIKED') {
    return (
      <Button color='error' variant='contained' size='large' onClick={(e) => setLikeFilter('ALL')}>
        ПОКАЗАТЬ ВСЕ КАРТОЧКИ
      </Button>
    );
  }
  if (likeFilter === 'ALL') {
    return (
      <Button color='error' variant='contained' size='large' onClick={(e) => setLikeFilter('LIKED')}>
        ПОКАЗАТЬ ВЫБРАННЫЕ КАРТОЧКИ
      </Button>
    );
  }

  return <Box></Box>;
};
export default FilterButton;
