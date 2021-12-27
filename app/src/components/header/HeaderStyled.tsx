import styled from 'styled-components';

export const HeaderContent = styled.header`
  padding: 1rem 0;

  background-color: #f60;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 80rem;

  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border: 0.1rem solid #fff;

  user-select: none;
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
