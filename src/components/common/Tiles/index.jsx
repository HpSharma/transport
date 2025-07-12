import React, { isValidElement } from 'react';

import { styled } from '@mui/material/styles';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 4,
  boxShadow: '0px 1px 1px 0px #ddd',
  border: '1px solid #CCC',
  borderRadius: 4,
  padding: 12,
  minHeight: 70,
  cursor: 'pointer',

  ':hover': {
    boxShadow: '0px 1px 1px 0px #197367',

    borderColor: '#197367',
  },
});

const HeaderRoot = styled('h3')({
  margin: 0,
  span: {
    fontSize: 14,
    color: '#8e8d8d',
  },
});

const ContentRoot = styled('div')({
  display: 'flex',
});

const Tiles = ({ children }) => {
  let headerChildren = null,
    contentChildren = null;

  React.Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    if (child.type.name === 'Header') {
      headerChildren = child;
    } else if (child.type.name === 'Content') {
      contentChildren = child;
    }
  });

  return (
    <Container>
      {headerChildren} {contentChildren}
    </Container>
  );
};

const Header = ({ children }) => <HeaderRoot>{children}</HeaderRoot>;
const Content = ({ children }) => <ContentRoot>{children}</ContentRoot>;

Tiles.Header = Header;
Tiles.Content = Content;

export default Tiles;
