import React, { createContext, useState } from "react";

// Crear el contexto
export const PlayersContext = createContext();

// Proveedor del contexto
export const PlayersProvider = ({ children }) => {
  // Lista inicial de jugadores
  const [players, setPlayers] = useState([
    {
      idJugador: 1,
      nombre: "Carlos Pérez",
      email: "carlos.perez@example.com",
      modo: "competitivo",
      rendimiento: 8.5,
      golesMarcados: 15,
      fallasCometidas: 2,
      userId: 1,
    },
    {
      idJugador: 2,
      nombre: "Juan López",
      email: "juan.lopez@example.com",
      modo: "amistoso",
      rendimiento: 7.3,
      golesMarcados: 10,
      fallasCometidas: 5,
      userId: 2,
    },
    {
      idJugador: 3,
      nombre: "María García",
      email: "maria.garcia@example.com",
      modo: "competitivo",
      rendimiento: 9.2,
      golesMarcados: 20,
      fallasCometidas: 1,
      userId: 3,
    },
    {
      idJugador: 4,
      nombre: "Luis Martínez",
      email: "luis.martinez@example.com",
      modo: "competitivo",
      rendimiento: 8.7,
      golesMarcados: 18,
      fallasCometidas: 3,
      userId: 4,
    },
    {
      idJugador: 5,
      nombre: "Sofía González",
      email: "sofia.gonzalez@example.com",
      modo: "amistoso",
      rendimiento: 7.8,
      golesMarcados: 12,
      fallasCometidas: 4,
      userId: 5,
    },
    {
      idJugador: 6,
      nombre: "Andrés Sánchez",
      email: "andres.sanchez@example.com",
      modo: "competitivo",
      rendimiento: 8.3,
      golesMarcados: 14,
      fallasCometidas: 3,
      userId: 6,
    },
    {
      idJugador: 7,
      nombre: "Laura Rodríguez",
      email: "laura.rodriguez@example.com",
      modo: "amistoso",
      rendimiento: 6.9,
      golesMarcados: 9,
      fallasCometidas: 6,
      userId: 7,
    },
    {
      idJugador: 8,
      nombre: "Javier Fernández",
      email: "javier.fernandez@example.com",
      modo: "competitivo",
      rendimiento: 7.5,
      golesMarcados: 11,
      fallasCometidas: 2,
      userId: 8,
    },
    {
      idJugador: 9,
      nombre: "Ana Torres",
      email: "ana.torres@example.com",
      modo: "amistoso",
      rendimiento: 6.5,
      golesMarcados: 8,
      fallasCometidas: 7,
      userId: 9,
    },
    {
      idJugador: 10,
      nombre: "Carlos Ramírez",
      email: "carlos.ramirez@example.com",
      modo: "competitivo",
      rendimiento: 9.0,
      golesMarcados: 22,
      fallasCometidas: 1,
      userId: 10,
    },
    {
      idJugador: 11,
      nombre: "Isabel López",
      email: "isabel.lopez@example.com",
      modo: "amistoso",
      rendimiento: 7.2,
      golesMarcados: 10,
      fallasCometidas: 5,
      userId: 11,
    },
    {
      idJugador: 12,
      nombre: "Ricardo Pérez",
      email: "ricardo.perez@example.com",
      modo: "competitivo",
      rendimiento: 8.6,
      golesMarcados: 17,
      fallasCometidas: 3,
      userId: 12,
    },
    {
      idJugador: 13,
      nombre: "Sofía Jiménez",
      email: "sofia.jimenez@example.com",
      modo: "amistoso",
      rendimiento: 6.8,
      golesMarcados: 11,
      fallasCometidas: 6,
      userId: 13,
    },
    {
      idJugador: 14,
      nombre: "Víctor Martínez",
      email: "victor.martinez@example.com",
      modo: "competitivo",
      rendimiento: 7.7,
      golesMarcados: 13,
      fallasCometidas: 4,
      userId: 14,
    },
    {
      idJugador: 15,
      nombre: "Raquel Fernández",
      email: "raquel.fernandez@example.com",
      modo: "amistoso",
      rendimiento: 6.9,
      golesMarcados: 7,
      fallasCometidas: 8,
      userId: 15,
    },
    {
      idJugador: 16,
      nombre: "Miguel Gómez",
      email: "miguel.gomez@example.com",
      modo: "competitivo",
      rendimiento: 9.1,
      golesMarcados: 19,
      fallasCometidas: 2,
      userId: 16,
    },
    {
      idJugador: 17,
      nombre: "Daniela Ruiz",
      email: "daniela.ruiz@example.com",
      modo: "amistoso",
      rendimiento: 7.0,
      golesMarcados: 10,
      fallasCometidas: 4,
      userId: 17,
    },
    {
      idJugador: 18,
      nombre: "Pedro López",
      email: "pedro.lopez@example.com",
      modo: "competitivo",
      rendimiento: 8.1,
      golesMarcados: 16,
      fallasCometidas: 3,
      userId: 18,
    },
    {
      idJugador: 19,
      nombre: "Lucía Sánchez",
      email: "lucia.sanchez@example.com",
      modo: "amistoso",
      rendimiento: 7.4,
      golesMarcados: 14,
      fallasCometidas: 5,
      userId: 19,
    },
    {
      idJugador: 20,
      nombre: "Felipe Gómez",
      email: "felipe.gomez@example.com",
      modo: "competitivo",
      rendimiento: 8.2,
      golesMarcados: 18,
      fallasCometidas: 2,
      userId: 20,
    },
  ]);  

  // Seleccionar jugadores para un partido (prioriza por rendimiento y goles marcados)
  const selectPlayersForMatch = () => {
    const sortedPlayers = [...players]
      .sort(
        (a, b) =>
          b.rendimiento - a.rendimiento || b.golesMarcados - a.golesMarcados
      )
      .slice(0, 10); // Selecciona los 10 mejores jugadores
    return sortedPlayers;
  };

  // Agregar un nuevo jugador
  const addPlayer = (player) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { idJugador: prevPlayers.length + 1, ...player },
    ]);
  };

  // Editar información de un jugador existente
  const editPlayer = (updatedPlayer) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.idJugador === updatedPlayer.idJugador ? updatedPlayer : player
      )
    );
  };

  // Eliminar un jugador
  const removePlayer = (idJugador) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.idJugador !== idJugador)
    );
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        addPlayer,
        editPlayer,
        removePlayer,
        selectPlayersForMatch,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
