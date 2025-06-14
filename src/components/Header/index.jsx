import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { useTheme } from '../../hooks/useTheme.jsx';

const HeaderContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 48,
  padding: '0px 24px',
  borderBottom: '1px solid #ddd',
  boxShadow: '0px 2px 3px 0px #ddd',
});

const LeftContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  a: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#197367',
    fontSize: 22,
  },
});

const RightContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
});

const Header = ({ toggleOpenSideBar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <LeftContainer>
        <IconButton onClick={toggleOpenSideBar}>
          <MenuIcon />
        </IconButton>
        <a href={'/'}>Sanjay Transport</a>
      </LeftContainer>
      <RightContainer>
        <div>SB</div>
        <div>
          <input
            type={'text'}
            placeholder={'What are you looking for today?'}
          />
        </div>
        <IconButton onClick={toggleTheme}>
          {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
