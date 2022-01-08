import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { grey, white } from 'components/styled/vars/colors';
import { bold } from 'components/styled/vars/font';

export const Wrapper = styled.div`
  padding: 2rem 3rem;

  background-color: ${white};
`;

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-size: 2.4rem;
  font-weight: ${bold};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  font-size: 1.5rem;

  color: ${grey};
`;

export const Score = styled.div`
  margin-right: 0.5rem;
`;

export const Author = styled(Link)`
  margin: 0 0.5rem;

  text-decoration: underline;

  color: ${grey};
`;

export const Time = styled.div``;
