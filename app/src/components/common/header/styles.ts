import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { devices } from 'components/styled/mixins/devices';

export const HeaderContent = styled.header`
  padding: 1.5rem 0;

  background-color: #fd6a0b;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 3.5rem;

  border: 0.1rem solid #fff;

  user-select: none;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 300;

  color: #fff;

  list-style: none;
`;

export const NavItem = styled(NavLink)`
  &:not(:last-of-type) {
    margin-right: 1.2rem;

    @media ${devices.mobile} {
      margin-right: 2.5rem;
    }
  }

  &.active {
    font-weight: 400;
  }
`;
