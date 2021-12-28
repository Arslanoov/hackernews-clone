import React from 'react';

import Header from 'components/common/header/Header';

import { LayoutBackground } from './styles';

const MainLayout: React.FC = ({ children }) => (
  <LayoutBackground>
    <Header />
    <div>{children}</div>
  </LayoutBackground>
);

export default MainLayout;
