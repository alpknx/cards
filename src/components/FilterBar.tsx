import { Box, Button } from '@mui/material';
import { FilterLikeOption } from '../store/filters/filters.types';

type FilterBarProps = {
  filters: FilterLikeOption;
  onFiltersChange: (filters: FilterLikeOption) => void;
};

const FilterBar = ({ filters, onFiltersChange }: FilterBarProps) => {
  return (
    <Box>
      <Button color='error' variant='contained' size='large' onClick={(e) => onFiltersChange(filters)}>
        {filters === 'ALL'
          ? 'ПОКАЗАТЬ ВЫБРАННЫЕ КАРТОЧКИ'
          : filters === 'LIKED'
          ? 'ПОКАЗАТЬ ВСЕ КАРТОЧКИ'
          : 'ПОКАЗАТЬ ВЫБРАННЫЕ КАРТОЧКИ'}
      </Button>
    </Box>
  );
};
export default FilterBar;
