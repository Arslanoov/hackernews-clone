import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
  greyClear,
  blue,
  grey,
  whiteDarker,
} from 'components/styled/vars/colors';
import { pointerOnHover } from 'components/styled/mixins/cursor';

export const Wrapper = styled.div`
  padding: 1.5rem 0;

  border-bottom: 0.1rem solid ${greyClear};

  font-size: 1.3rem;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;

  color: ${grey};
`;

export const Author = styled(Link)`
  margin-right: 0.5rem;

  text-decoration: underline;

  color: ${grey};
`;

export const Content = styled.div`
  margin: 1rem 0;

  a {
    color: ${blue};
  }
`;

export const Replies = styled.div`
  width: 100%;

  padding: 0.5rem;

  font-size: 1.2rem;

  background-color: ${whiteDarker};
  color: ${grey};

  border-radius: 0.4rem;

  ${pointerOnHover}
`;
