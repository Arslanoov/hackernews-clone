import React, { useState, useEffect } from 'react';

import { useActions } from 'hooks/useActions';
import { useSelector } from 'hooks/useSelector';

import { STORIES_PER_PAGE } from 'config/pagination';

import { ItemInterface, StoryListsTypes } from 'types/item';

import MainLayout from 'layouts/main/MainLayout';
import CardList from 'components/common/card/list/CardList';
import Pagination from 'components/common/pagination/Pagination';

import { FullContent } from 'components/styled/content';

const Home = () => {
  const [page, setPage] = useState<number>(1);

  const itemsList = useSelector(({ items }) => items?.items as ItemInterface[]);
  // TODO: Add reselect
  const totalCount = useSelector(
    ({ items }) => items?.lists?.top.length as number
  );

  const { fetchList, fetchListItems } = useActions();

  useEffect(() => {
    async function fetchListAndItems() {
      await fetchList(StoryListsTypes.Top);
      await fetchListItems(StoryListsTypes.Top, page);
    }
    fetchListAndItems();
  }, []);

  useEffect(() => {
    console.log(itemsList);
    if (itemsList.length !== 0) {
      fetchListItems(StoryListsTypes.Top, page);
    }
  }, [page]);

  return (
    <MainLayout>
      <div className="container">
        <FullContent>
          <Pagination
            pagesCount={Math.floor(totalCount / STORIES_PER_PAGE)}
            currentPage={page}
            setPage={setPage}
          />
          <CardList items={itemsList} />
        </FullContent>
      </div>
    </MainLayout>
  );
};

export default Home;
