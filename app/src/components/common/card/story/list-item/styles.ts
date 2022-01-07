import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
  font-weight: 700;

  color: #fd6a0b;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  color: #000;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;

  margin-right: 0.5rem;

  font-size: 1.5rem;
  font-weight: 400;
`;

export const Source = styled.a`
  color: #828282;
`;

export const SourceLink = styled(Link)`
  color: #828282;
`;

export const Description = styled.div`
  color: #828282;
`;

export const Author = styled(Link)`
  margin-right: 0.6rem;

  color: #828282;
`;

export const AuthorUnderline = styled.span`
  text-decoration: underline;
`;

export const Line = styled.div`
  height: 1.4rem;
  width: 0.1rem;

  background-color: #828282;
`;

export const CommentsCount = styled.div`
  margin-left: 0.6rem;

  text-decoration: underline;

  color: #828282;
`;
