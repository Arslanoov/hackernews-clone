import React, { useEffect } from 'react';

import { useActions } from 'hooks/useActions';
import { useSelector } from 'hooks/useSelector';

import MainLayout from 'layouts/main/MainLayout';

import { FullContent } from 'components/styled/content';

import CardList from 'components/common/card/list/CardList';
import Pagination from 'components/common/pagination/Pagination';

const Home = () => {
  const list = useSelector(({ items }) => items?.lists.top);
  const itemsList = useSelector(({ items }) => items?.items);
  const { fetchTopList } = useActions();

  useEffect(() => {
    fetchTopList();
  }, []);

  return (
    <MainLayout>
      <div className="container">
        <FullContent>
          <Pagination />
          <CardList />
          {JSON.stringify(list)}
          {JSON.stringify(itemsList)}
        </FullContent>
      </div>
    </MainLayout>
  );
};

export default Home;
