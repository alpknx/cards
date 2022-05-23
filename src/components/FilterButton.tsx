import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FilterLikeOption, setFilterAc } from '../store/filter/filter.reducer';

const FilterButton = () => {
  const setLikeFilterFirst = useTypedSelector((state) => state.filters.likeFilter);
  const [likeFilter, setLikeFilter] = useState<FilterLikeOption>(setLikeFilterFirst);

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
