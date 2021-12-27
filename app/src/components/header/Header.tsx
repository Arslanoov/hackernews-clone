import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from 'assets/img/logo.jpg';

import { FullContent } from 'components/styled/content';
import { HeaderContent, Wrapper, Logo, Nav, NavItem } from './HeaderStyled';

const Header = () => (
  <HeaderContent className="container">
    <FullContent>
      <Wrapper>
        <Link to="/">
          <Logo src={LogoImage} alt="" />
        </Link>
        <Nav>
          <NavItem active>
            <Link to="/">Top</Link>
          </NavItem>
          <NavItem>
            <Link to="/">New</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Show</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Ask</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Jobs</Link>
          </NavItem>
        </Nav>
      </Wrapper>
    </FullContent>
  </HeaderContent>
);

export default Header;
