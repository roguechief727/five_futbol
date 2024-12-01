import React from 'react';
import './Player.css';

const Player = () => {
  return (
    <div className="player-page">
      <div className="player-container">
        <h2 className="player-title">Bienvenido a tu perfil, Jugador</h2>

        <div className="player-options">
          <div className="player-option">
            <button className="option-button">Ver mis Partidos</button>
          </div>
          <div className="player-option">
            <button className="option-button">Calificar un Jugador</button>
          </div>
          <div className="player-option">
            <button className="option-button">Revisar mis Críticas</button>
          </div>
          <div className="player-option">
            <button className="option-button">Configurar Notificaciones</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
