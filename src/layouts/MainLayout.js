import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
