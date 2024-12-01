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
      <h1>Lista de Jugadores</h1>
      <ul>
        {jugadores.map((jugador) => (
          <li key={jugador.id}>
            <span>
              {jugador.nombre} - {jugador.posicion} ({jugador.equipo})
            </span>
            <button onClick={() => handleVerDetalle(jugador.id)}>Ver Detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaJugadores;
