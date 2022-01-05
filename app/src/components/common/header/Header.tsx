import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from 'assets/img/logo.jpg';

import { FullContent } from 'components/styled/content';
import { HeaderContent, Wrapper, Logo, Nav, NavItem } from './styles';

const Header = () => (
  <HeaderContent className="container">
    <FullContent>
      <Wrapper>
        <Link to="/">
          <Logo src={LogoImage} alt="" />
        </Link>
        <Nav>
          <NavItem active>
            <Link to="/stories/top">Top</Link>
          </NavItem>
          <NavItem>
            <Link to="/stories/new">New</Link>
          </NavItem>
          <NavItem>
            <Link to="/stories/show">Show</Link>
          </NavItem>
          <NavItem>
            <Link to="/stories/ask">Ask</Link>
          </NavItem>
          <NavItem>
            <Link to="/stories/job">Jobs</Link>
          </NavItem>
        </Nav>
      </Wrapper>
    </FullContent>
  </HeaderContent>
);

export default Header;
