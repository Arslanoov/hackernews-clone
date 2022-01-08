import styled from 'styled-components';

import { white } from 'components/styled/vars/colors';
import { pointerOnHover } from 'components/styled/mixins/cursor';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 0;

  background-color: ${white};
`;

type ArrowProps = {
  disabled: boolean;
};

export const Arrow = styled.div<ArrowProps>`
  font-size: 2rem;

  user-select: none;

  ${({ disabled }) => !disabled && pointerOnHover}
`;

export const CurrentPage = styled.div`
  margin: 0 3rem;

  font-size: 1.4rem;
`;
