import React from 'react';

import { Wrapper, CurrentPage, Arrow } from './styles';

type Props = {
  currentPage: number;
  pagesCount: number;
  setPage: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, pagesCount, setPage }) => (
  <Wrapper>
    <Arrow
      disabled={currentPage === 1}
      onClick={() => currentPage !== 1 && setPage(currentPage - 1)}
    >
      {'<--'}
    </Arrow>
    <CurrentPage>
      {currentPage}/{Number.isNaN(pagesCount) ? 1 : Math.max(pagesCount, 1)}
    </CurrentPage>
    <Arrow
      disabled={pagesCount <= currentPage}
      onClick={() => pagesCount > currentPage && setPage(currentPage + 1)}
    >
      {'-->'}
    </Arrow>
  </Wrapper>
);

export default Pagination;
