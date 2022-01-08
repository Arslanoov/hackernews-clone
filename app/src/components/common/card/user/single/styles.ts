import styled from 'styled-components';

import { grey, white } from 'components/styled/vars/colors';

export const Wrapper = styled.div`
  padding: 1.5rem 3rem;

  font-size: 1.5rem;

  background-color: ${white};
`;

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-size: 2.4rem;
`;

export const About = styled.p`
  margin: 1rem 0;

  word-break: break-word;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  color: ${grey};

  text-decoration: underline;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
