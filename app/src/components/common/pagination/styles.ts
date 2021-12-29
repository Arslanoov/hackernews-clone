import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 0;

  background-color: #fff;
`;

export const Arrow = styled.div`
  font-size: 2rem;

  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const CurrentPage = styled.div`
  margin: 0 3rem;

  font-size: 1.4rem;
`;
