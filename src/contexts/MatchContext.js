import React, { createContext, useState, useContext } from "react";
import { MatchHistoryContext } from "./MatchHistoryContext";

export const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const { addMatch } = useContext(MatchHistoryContext);

  const createMatch = (matchData) => {
    // Ordenar jugadores por rendimiento (descendente)
    const sortedPlayers = matchData.jugadores.sort(
      (a, b) => b.rendimiento - a.rendimiento
    );

    // Dividir jugadores en dos equipos balanceados
    const team1 = [];
    const team2 = [];
    let team1Rendimiento = 0;
    let team2Rendimiento = 0;

    sortedPlayers.forEach((player) => {
      if (team1Rendimiento <= team2Rendimiento) {
        team1.push(player);
        team1Rendimiento += player.rendimiento;
      } else {
        team2.push(player);
        team2Rendimiento += player.rendimiento;
      }
    });

    // Crear el partido con los equipos
    const newMatch = {
      idPartido: matches.length + 1,
      estado: "programado",
      fecha: matchData.fecha,
      idCancha: matchData.idCancha,
      idAdmin: 1, // Asignar un administrador fijo (puedes cambiarlo según tu lógica)
      team1: { name: "Equipo 1", players: team1 },
      team2: { name: "Equipo 2", players: team2 },
    };

    setMatches([...matches, newMatch]);
  };

  const updateMatch = (updatedMatch) => {
    setMatches((prevMatches) =>
      prevMatches.map((match) =>
        match.idPartido === updatedMatch.idPartido ? updatedMatch : match
      )
    );

    if (updatedMatch.estado === "finalizado") {
      moveToHistory(updatedMatch.idPartido);
    }
  };

  const moveToHistory = (idPartido) => {
    setMatches((prevMatches) => {
      const matchToMove = prevMatches.find((match) => match.idPartido === idPartido);
      if (matchToMove) {
        addMatch(matchToMove);
      }
      return prevMatches.filter((match) => match.idPartido !== idPartido);
    });
  };

  return (
    <MatchContext.Provider value={{ matches, createMatch, updateMatch }}>
      {children}
    </MatchContext.Provider>
  );
};
