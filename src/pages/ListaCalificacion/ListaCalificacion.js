import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaCalificacion.css';

const jugadores = [
  { id: 1, nombre: "Juan Pérez", edad: 25, posicion: "Delantero", equipo: "Los Halcones" },
  { id: 2, nombre: "Pedro Gómez", edad: 22, posicion: "Defensa", equipo: "Los Tigres" },
  { id: 3, nombre: "Sofía Martínez", edad: 28, posicion: "Mediocampista", equipo: "Las Águilas" },
];

const ListaJugadores = () => {
  const navigate = useNavigate();

  const handleVerDetalle = (id) => {
    navigate(`/jugadores/${id}`);
  };

  return (
    <div className="lista-jugadores-container">
      <h1 className="lista-jugadores-titulo">Lista de Jugadores</h1>
      <ul className="lista-jugadores-lista">
        {jugadores.map((jugador) => (
          <li key={jugador.id} className="lista-jugadores-item">
            <span className="lista-jugadores-info">
              {jugador.nombre} - {jugador.posicion} 
            </span>
            <button 
              className="lista-jugadores-boton" 
              onClick={() => handleVerDetalle(jugador.id)}
            >
              Ver Detalles
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaJugadores;
