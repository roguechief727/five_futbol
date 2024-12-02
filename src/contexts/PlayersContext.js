import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const PlayersContext = createContext();

// Proveedor del contexto
export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]); // Estado para los jugadores

  // Función para obtener los jugadores desde la API
  const fetchPlayers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/jugador', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener jugadores desde la API');
      }

      const data = await response.json();
      setPlayers(data); // Actualizar el estado con los jugadores obtenidos
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  // Cargar los jugadores al montar el componente
  useEffect(() => {
    fetchPlayers();
  }, []);

  // Agregar un nuevo jugador
  const addPlayer = async (player) => {
    try {
      const response = await fetch('http://localhost:3001/api/jugador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      });

      if (!response.ok) {
        throw new Error('Error al agregar jugador');
      }

      const newPlayer = await response.json();
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  // Editar información de un jugador existente
  const editPlayer = async (updatedPlayer) => {
    try {
      const response = await fetch(`http://localhost:3001/api/jugador/${updatedPlayer.idJugador}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPlayer),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar jugador');
      }

      setPlayers((prevPlayers) =>
        prevPlayers.map((player) =>
          player.idJugador === updatedPlayer.idJugador ? updatedPlayer : player
        )
      );
    } catch (error) {
      console.error('Error updating player:', error);
    }
  };

  // Eliminar un jugador
  const removePlayer = async (idJugador) => {
    try {
      const response = await fetch(`http://localhost:3001/api/jugador/${idJugador}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar jugador');
      }

      setPlayers((prevPlayers) =>
        prevPlayers.filter((player) => player.idJugador !== idJugador)
      );
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  // Seleccionar jugadores para un partido
  const selectPlayersForMatch = () => {
    const sortedPlayers = [...players]
      .sort(
        (a, b) =>
          b.rendimiento - a.rendimiento || b.golesMarcados - a.golesMarcados
      )
      .slice(0, 10); // Selecciona los 10 mejores jugadores
    return sortedPlayers;
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
