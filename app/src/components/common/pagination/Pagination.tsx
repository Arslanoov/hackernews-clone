import React from 'react';

import { Wrapper, CurrentPage, Arrow } from './styles';

type Props = {
  currentPage: number;
  pagesCount: number;
  setPage: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, pagesCount, setPage }) => (
  <Wrapper>
    <Arrow onClick={() => currentPage !== 1 && setPage(currentPage - 1)}>
      {'<--'}
    </Arrow>
    <CurrentPage>
      {currentPage}/{pagesCount}
    </CurrentPage>
    <Arrow onClick={() => pagesCount > currentPage && setPage(currentPage + 1)}>
      {'-->'}
    </Arrow>
  </Wrapper>
);

export default Pagination;
