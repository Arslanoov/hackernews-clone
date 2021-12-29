import React, { useEffect } from 'react';

import { useActions } from 'hooks/useActions';
import { useSelector } from 'hooks/useSelector';

import { ItemInterface } from 'types/item';

import MainLayout from 'layouts/main/MainLayout';

import CardList from 'components/common/card/list/CardList';
import Pagination from 'components/common/pagination/Pagination';

import { FullContent } from 'components/styled/content';

const Home = () => {
  const itemsList = useSelector(({ items }) => items?.items as ItemInterface[]);
  const { fetchTopList } = useActions();

  useEffect(() => {
    fetchTopList();
  }, []);

  return (
    <MainLayout>
      <div className="container">
        <FullContent>
          <Pagination />
          <CardList items={itemsList} />
        </FullContent>
      </div>
    </MainLayout>
  );
};

export default Home;
