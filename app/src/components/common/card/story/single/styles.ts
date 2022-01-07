import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 2rem 3rem;

  background-color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-size: 2.4rem;
  font-weight: 700;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  font-size: 1.5rem;

  color: #828282;
`;

export const Score = styled.div`
  margin-right: 0.5rem;
`;

export const Author = styled(Link)`
  margin: 0 0.5rem;

  text-decoration: underline;

  color: #828282;
`;

export const Time = styled.div``;
