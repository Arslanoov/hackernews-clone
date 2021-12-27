import React from 'react';

import LogoImage from 'assets/img/logo.jpg';

import { FullContent } from 'components/styled/content';
import { HeaderContent, Wrapper, Logo, Nav, NavItem } from './HeaderStyled';

const Header = () => (
  <HeaderContent className="container">
    <FullContent>
      <Wrapper>
        <Logo src={LogoImage} alt="" />
        <Nav>
          <NavItem>1</NavItem>
          <NavItem>2</NavItem>
          <NavItem>3</NavItem>
          <NavItem>4</NavItem>
        </Nav>
      </Wrapper>
    </FullContent>
  </HeaderContent>
);

export default Header;
