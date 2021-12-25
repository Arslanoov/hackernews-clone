import React from 'react';

import Header from 'components/header/Header';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
