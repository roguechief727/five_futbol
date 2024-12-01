import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">FiveFutbol</h1>
        <p className="header-description">
          La comunidad donde el fútbol 5 cobra vida. ¡Juega, disfruta y compite!
        </p>
      </div>
    </header>
  );
};

export default Header;
