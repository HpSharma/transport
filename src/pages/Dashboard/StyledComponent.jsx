import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
});

export const TilesContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
});
