import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from 'components/common/pagination/Pagination';

describe('<Pagination />', () => {
  it('correctly renders', () => {
    const currentPage = 5;
    const pagesCount = 9;

    render(
      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        setPage={() => {}}
      />
    );

    expect(
      screen.getByText(
        (content, node) =>
          node?.textContent?.trim() === `${currentPage}/${pagesCount}`
      )
    ).toBeInTheDocument();
  });

  it('correctly changes page', () => {
    const setPageMock = jest.fn();

    const currentPage = 2;
    const pagesCount = 3;

    render(
      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        setPage={setPageMock}
      />
    );

    const prevArrow = screen.getByText('<--');
    userEvent.click(prevArrow);

    expect(setPageMock).toHaveBeenLastCalledWith(currentPage - 1);

    const nextArrow = screen.getByText('-->');
    userEvent.click(nextArrow);

    expect(setPageMock).toHaveBeenLastCalledWith(currentPage + 1);
  });
});
