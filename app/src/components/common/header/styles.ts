import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { devices } from 'components/styled/mixins/devices';

import { orange, white } from 'components/styled/vars/colors';
import { light, normal } from 'components/styled/vars/font';

export const HeaderContent = styled.header`
  padding: 1.5rem 0;

  background-color: ${orange};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 3.5rem;

  border: 0.1rem solid ${white};

  user-select: none;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: ${light};

  color: ${white};

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
    font-weight: ${normal};
  }
`;
