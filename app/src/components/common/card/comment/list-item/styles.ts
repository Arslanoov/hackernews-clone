import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;

  border-bottom: 0.1rem solid rgba(130, 130, 130, 0.3);

  font-size: 1.3rem;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;

  color: #828282;
`;

export const Author = styled.div`
  margin-right: 0.5rem;

  text-decoration: underline;
`;

export const Content = styled.div`
  margin: 1rem 0;
`;

export const Replies = styled.div`
  width: 100%;

  padding: 0.5rem;

  font-size: 1.2rem;

  background-color: #fffbf2;
  color: #828282;

  border-radius: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`;
