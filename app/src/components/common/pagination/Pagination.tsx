import React from 'react';

import { Wrapper, Pages, Page, Arrow } from './styles';

const Pagination = () => (
  <Wrapper>
    <Arrow>{'<--'}</Arrow>
    <Pages>
      <Page>1</Page>
      <Page>2</Page>
      <Page>3</Page>
      <Page>4</Page>
    </Pages>
    <Arrow>{'-->'}</Arrow>
  </Wrapper>
);

export default Pagination;
