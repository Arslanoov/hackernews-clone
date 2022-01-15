import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage from 'assets/img/logo.jpg';

import { Container } from 'components/styled/container';
import { FullContent } from 'components/styled/content';

import { HeaderContent, Wrapper, Logo, Nav, NavItem } from './styles';

const Header = () => (
  <HeaderContent>
    <Container>
      <FullContent>
        <Wrapper>
          <NavLink to="/stories/top">
            <Logo src={LogoImage} alt="" />
          </NavLink>
          <Nav>
            <NavItem
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/stories/top"
            >
              Top
            </NavItem>
            <NavItem
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/stories/new"
            >
              New
            </NavItem>
            <NavItem
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/stories/show"
            >
              Show
            </NavItem>
            <NavItem
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/stories/ask"
            >
              Ask
            </NavItem>
            <NavItem
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/stories/job"
            >
              Jobs
            </NavItem>
          </Nav>
        </Wrapper>
      </FullContent>
    </Container>
  </HeaderContent>
);

export default Header;
