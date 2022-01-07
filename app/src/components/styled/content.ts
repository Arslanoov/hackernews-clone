import styled from 'styled-components';

export const FullContent = styled.div`
  grid-column: col-start 1 / col-end 12;

  & > * {
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
`;
