import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaPartidosJugador.css';

// Datos de ejemplo
const partidos = [
    {
      id: 1,
      fecha: "2024-11-28",
      resultado: "3 - 2",
      equipo1: "Halcones",
      equipo2: "Tigres",
      jugadores: [
        { equipo: "Halcones", nombre: "Juan Pérez", goles: 2 },
        { equipo: "Halcones", nombre: "Carlos Mendoza", goles: 1 },
        { equipo: "Halcones", nombre: "Luis García", goles: 0 },
        { equipo: "Halcones", nombre: "José Martínez", goles: 0 },
        { equipo: "Halcones", nombre: "David Torres", goles: 0 },
        { equipo: "Tigres", nombre: "Pedro Gómez", goles: 1 },
        { equipo: "Tigres", nombre: "Andrés Villa", goles: 0 },
        { equipo: "Tigres", nombre: "Javier Ruiz", goles: 0 },
        { equipo: "Tigres", nombre: "Oscar Hernández", goles: 0 },
        { equipo: "Tigres", nombre: "Miguel Castillo", goles: 1 },
      ],
    },
    {
      id: 2,
      fecha: "2024-11-29",
      resultado: "5 - 4",
      equipo1: "Águilas",
      equipo2: "Halcones",
      jugadores: [
        { equipo: "Águilas", nombre: "Sofía Martínez", goles: 3 },
        { equipo: "Águilas", nombre: "Laura García", goles: 2 },
        { equipo: "Águilas", nombre: "Ana Pérez", goles: 0 },
        { equipo: "Águilas", nombre: "Marta López", goles: 0 },
        { equipo: "Águilas", nombre: "Sandra Torres", goles: 0 },
        { equipo: "Halcones", nombre: "Juan Pérez", goles: 4 },
        { equipo: "Halcones", nombre: "Carlos Mendoza", goles: 0 },
        { equipo: "Halcones", nombre: "Luis García", goles: 0 },
        { equipo: "Halcones", nombre: "José Martínez", goles: 0 },
        { equipo: "Halcones", nombre: "David Torres", goles: 0 },
      ],
    },
  ];
  

const ListaPartidos = () => {
  const navigate = useNavigate();

  const handleVerDetalle = (id) => {
    navigate(`/partidos/${id}`);
  };

  return (
    <div className="lista-partidos-container">
      <h1 className="lista-partidos-titulo">Partidos del Jugador</h1>
      <ul className="lista-partidos-lista">
        {partidos.map((partido) => (
          <li key={partido.id} className="lista-partidos-item">
            <div className="lista-partidos-info">
              <span className="lista-partidos-fecha">{partido.fecha }  </span>
              <span className="lista-partidos-equipos">{partido.equipo1} vs {partido.equipo2}  </span>
              <span className="lista-partidos-resultado">Resultado: {partido.resultado}</span>
            </div>
            <button 
              className="lista-partidos-boton" 
              onClick={() => handleVerDetalle(partido.id)}
            >
              Ver Detalles
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPartidos;
