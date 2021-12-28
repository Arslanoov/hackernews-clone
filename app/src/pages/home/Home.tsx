import React, { useEffect } from 'react';

import MainLayout from 'layouts/main/MainLayout';

import { FullContent } from 'components/styled/content';

import CardList from 'components/common/card/list/CardList';
import Pagination from 'components/common/pagination/Pagination';

import { fetchTopStories } from 'utils/api';

const Home = () => {
  useEffect(() => {
    fetchTopStories();
  }, []);

  return (
    <MainLayout>
      <div className="container">
        <FullContent>
          <Pagination />
          <CardList />
        </FullContent>
      </div>
    </MainLayout>
  );
};

export default Home;
