import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: #fff;

  user-select: none;
`;

export const Arrow = styled.div`
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;

  margin: 1rem 0;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  font-size: 1.3rem;

  color: #fd6a0b;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
