import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 0;

  background-color: #f60;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
`;

export const NavItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
