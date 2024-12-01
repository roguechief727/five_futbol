import React, { createContext, useState } from 'react';

// Crear el contexto
export const MatchHistoryContext = createContext();

// Proveedor del contexto
export const MatchHistoryProvider = ({ children }) => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      date: '2024-12-01',
      location: 'Cancha Central, Estadio Deportivo',
      team1: {
        name: 'Los Tigres',
        goals: 3,
        players: [
          { name: 'Carlos Pérez', goals: 1, infractions: ['Falta'] },
          { name: 'Juan López', goals: 2, infractions: [] },
          { name: 'Miguel Gómez', goals: 0, infractions: [] },
          { name: 'José Martínez', goals: 0, infractions: ['Tarjeta Amarilla'] },
          { name: 'Eduardo Ramírez', goals: 0, infractions: [] },
        ],
      },
      team2: {
        name: 'Los Halcones',
        goals: 2,
        players: [
          { name: 'Luis Fernández', goals: 1, infractions: [] },
          { name: 'Fernando Sánchez', goals: 0, infractions: ['Tarjeta Roja'] },
          { name: 'Rafael Rodríguez', goals: 1, infractions: [] },
          { name: 'Antonio Vargas', goals: 0, infractions: ['Falta'] },
          { name: 'Gabriel Díaz', goals: 0, infractions: [] },
        ],
      },
    },
    {
      id: 2,
      date: '2024-12-05',
      location: 'Cancha 7, Polideportivo Norte',
      team1: {
        name: 'Los Leones',
        goals: 4,
        players: [
          { name: 'Carlos Díaz', goals: 2, infractions: ['Tarjeta Amarilla'] },
          { name: 'Andrés López', goals: 1, infractions: [] },
          { name: 'Raúl Mendoza', goals: 0, infractions: [] },
          { name: 'Javier González', goals: 1, infractions: [] },
          { name: 'Tomás Ruiz', goals: 0, infractions: ['Falta'] },
        ],
      },
      team2: {
        name: 'Los Guerreros',
        goals: 3,
        players: [
          { name: 'Luis Pérez', goals: 1, infractions: [] },
          { name: 'José Fernández', goals: 1, infractions: [] },
          { name: 'Carlos Sánchez', goals: 0, infractions: ['Tarjeta Roja'] },
          { name: 'Francisco Ramírez', goals: 1, infractions: ['Falta'] },
          { name: 'Héctor Gómez', goals: 0, infractions: [] },
        ],
      },
    },
    {
      id: 3,
      date: '2024-12-08',
      location: 'Cancha Rápida, Complejo Deportivo Sur',
      team1: {
        name: 'Las Águilas',
        goals: 2,
        players: [
          { name: 'Manuel Rivera', goals: 1, infractions: [] },
          { name: 'José Ruiz', goals: 0, infractions: ['Falta'] },
          { name: 'David Soto', goals: 1, infractions: [] },
          { name: 'Pablo García', goals: 0, infractions: [] },
          { name: 'Fernando Cruz', goals: 0, infractions: [] },
        ],
      },
      team2: {
        name: 'Los Búhos',
        goals: 1,
        players: [
          { name: 'Hugo Ramos', goals: 1, infractions: [] },
          { name: 'Juan Carlos López', goals: 0, infractions: [] },
          { name: 'Santiago Pérez', goals: 0, infractions: [] },
          { name: 'Ricardo Morales', goals: 0, infractions: ['Tarjeta Amarilla'] },
          { name: 'Carlos González', goals: 0, infractions: [] },
        ],
      },
    },
    {
      id: 4,
      date: '2024-12-10',
      location: 'Cancha Principal, Club Deportivo del Valle',
      team1: {
        name: 'Los Lobos',
        goals: 5,
        players: [
          { name: 'Oscar Hernández', goals: 2, infractions: [] },
          { name: 'Carlos Martínez', goals: 1, infractions: ['Falta'] },
          { name: 'Jorge Torres', goals: 1, infractions: [] },
          { name: 'Pedro Sánchez', goals: 1, infractions: ['Tarjeta Roja'] },
          { name: 'Raúl González', goals: 0, infractions: [] },
        ],
      },
      team2: {
        name: 'Los Dragones',
        goals: 4,
        players: [
          { name: 'Antonio Pérez', goals: 1, infractions: [] },
          { name: 'Iván Rodríguez', goals: 1, infractions: [] },
          { name: 'Fernando López', goals: 1, infractions: ['Tarjeta Amarilla'] },
          { name: 'Ricardo García', goals: 1, infractions: [] },
          { name: 'José Ramírez', goals: 0, infractions: [] },
        ],
      },
    },
  ]);

  const addMatch = (match) => {
    setMatches((prevMatches) => [...prevMatches, { id: prevMatches.length + 1, ...match }]);
  };

  const deleteMatch = (id) => {
    setMatches((prevMatches) => prevMatches.filter((match) => match.id !== id));
  };

  const updateMatch = (updatedMatch) => {
    setMatches((prevMatches) =>
      prevMatches.map((match) => (match.id === updatedMatch.id ? updatedMatch : match))
    );
  };

  return (
    <MatchHistoryContext.Provider value={{ matches, addMatch, deleteMatch, updateMatch }}>
      {children}
    </MatchHistoryContext.Provider>
  );
};
