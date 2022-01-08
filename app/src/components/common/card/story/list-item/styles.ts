import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { black, grey, orange } from 'components/styled/vars/colors';
import { bold, normal } from 'components/styled/vars/font';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 1.5rem;

  font-size: 1.4rem;
`;

export const Score = styled.div`
  min-width: 3rem;

  margin-right: 2rem;

  font-size: 1.5rem;
  font-weight: ${bold};

  color: ${orange};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;

  margin-right: 0.5rem;

  color: ${black};

  font-size: 1.5rem;
  font-weight: ${normal};
`;

export const Source = styled.a`
  color: ${grey};
`;

export const SourceLink = styled(Link)`
  color: ${grey};
`;

export const Description = styled.div`
  color: ${grey};
`;

export const Author = styled(Link)`
  margin-right: 0.6rem;

  color: ${grey};
`;

export const AuthorUnderline = styled.span`
  text-decoration: underline;
`;

export const Line = styled.div`
  height: 1.4rem;
  width: 0.1rem;

  background-color: ${grey};
`;

export const CommentsCount = styled.div`
  margin-left: 0.6rem;

  text-decoration: underline;

  color: ${grey};
`;
