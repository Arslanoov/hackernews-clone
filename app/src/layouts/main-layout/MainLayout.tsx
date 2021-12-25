import React from 'react';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      Layout
      <div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
