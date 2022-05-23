import { Box, FormControlLabel, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import { FiltersState } from '../store/filters/filters.types';

type FiltersBarProps = {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
};

const FiltersBar = ({ filters, onFiltersChange }: FiltersBarProps) => {
  return (
    <Box margin='16px'>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
          <FormControlLabel
            label='Liked only'
            control={
              <Checkbox
                checked={filters.likeFilter}
                onChange={(e, value) => onFiltersChange({ ...filters, likeFilter: value })}
              />
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiltersBar;
