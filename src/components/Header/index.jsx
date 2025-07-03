import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { TextInput } from '../../../src/components/Input';
import { IconButtons } from '../common/Button';
import { IconButton } from '@mui/material';
import styles from '../SideBar/styled.module.scss';





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

        <div style={{ display: 'contents', justifyContent: 'center', marginBottom: '20px' }}>
         <a href={'/'}> <img
            src="../../../public/buts-logo2.png"
            alt="Logo"
            style={{ width: '200px', height: '97px', objectFit: 'contain' }}
            />
            </a>
        </div>

      </LeftContainer>
      <RightContainer>
        <div>
          <IconButtons></IconButtons>

        </div>
        <div>
          <TextInput></TextInput>
        </div>
        <IconButton onClick={toggleTheme}>
          {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
