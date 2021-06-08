import React from 'react';

import { Nav, Title, Logo } from '../style';

const Header = () => {
  return (
    <Nav>
      <Title>Battleship</Title>
      <Logo
        src="https://static.thenounproject.com/png/44759-200.png"
        alt="Logo"
      />
    </Nav>
  );
};

export default Header;