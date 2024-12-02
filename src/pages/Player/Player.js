import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Player.css';

const Player = () => {
  const navigate = useNavigate();

  const Calificacion = () => {
    navigate(`/jugadores`);
  };

  const Partidos = () => {
    navigate(`/partidos`);
  };

  const Criticas = () => {
    navigate(`/criticas`);
  };

  return (
    <div className="player-page">
      <div className="player-container">
        <h2 className="player-title">Bienvenido a tu perfil, Jugador</h2>

        <div className="player-options">
          <div className="player-option">
            <button className="option-button" onClick={Partidos}>Ver mis Partidos</button>
          </div>
          <div className="player-option">
            <button className="option-button" onClick={Calificacion}>Calificar un Jugador</button>
          </div>
          <div className="player-option">
            <button className="option-button" onClick={Criticas}>Revisar mis Críticas</button>
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
