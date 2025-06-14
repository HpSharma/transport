import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SanitizerIcon from '@mui/icons-material/Sanitizer';

import styles from './styled.module.scss';

const PAGES = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/',
  },
  {
    name: 'Pump',
    icon: <SanitizerIcon />,
  },
];

export default function SideBar({ open, toggleOpen }) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleOpen}>
      <List>
        <ListItem disablePadding>
          <a className={styles.logo} href={'/'}>
            Sanjay Transport
          </a>
        </ListItem>
        <Divider />
        {PAGES.map((item, index) => (
          <ListItem key={item.name + '_' + index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleOpen}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
