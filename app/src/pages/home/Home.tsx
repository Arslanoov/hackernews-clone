import React from 'react';

import MainLayout from 'layouts/main/MainLayout';

import { FullContent } from 'components/styled/content';

import CardList from 'components/common/card/list/CardList';

const Home = () => (
  <MainLayout>
    <div className="container">
      <FullContent>
        <CardList />
      </FullContent>
    </div>
  </MainLayout>
);

export default Home;
