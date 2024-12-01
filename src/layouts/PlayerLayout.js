import React from 'react';
import Header from '../components/Header/Header';

const PlayerLayout = ({ children }) => {
  return (
    <div className="player-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PlayerLayout;
