import styled from 'styled-components';

import { white } from 'components/styled/vars/colors';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
`;

export const ListItem = styled.li`
  margin-top: 1.5rem;
  padding: 1rem;

  background-color: ${white};
`;
