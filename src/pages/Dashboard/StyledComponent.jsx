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

export const Tiles = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  boxShadow: '0px 1px 1px 0px #ddd',
  border: '1px solid #CCC',
  borderRadius: 4,
  padding: 12,
  minHeight: 75,

  cursor: 'pointer',

  ':hover': {
    boxShadow: '0px 1px 1px 0px #197367',
    borderColor: '#197367',
  },

  h3: {
    margin: 0,
    span: {
      fontSize: 14,
      color: '#8e8d8d',
    },
  },
});
