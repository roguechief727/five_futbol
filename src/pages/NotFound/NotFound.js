import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>¡Ups! La página que buscas no existe.</p>
      <button className="notfound-button" onClick={() => window.location.href = '/'}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default NotFound;
