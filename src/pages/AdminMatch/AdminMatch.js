import React, { useState, useContext } from "react";
import { MatchContext } from "../../contexts/MatchContext";
import { useNavigate } from 'react-router-dom';
import "./AdminMatch.css";
import BackButton from "../../components/BackButton/BackButton";

const MatchesPage = () => {
  const { matches, updateMatch } = useContext(MatchContext);
  const [editedTeamNames, setEditedTeamNames] = useState({});
  const [inProgress, setInProgress] = useState({}); // Estado para los partidos en curso
  const [score, setScore] = useState({}); // Estado para el marcador
  const [goalScorers, setGoalScorers] = useState({}); // Estado para los jugadores que hicieron goles
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/admin/create-match'); // Redirige a la ruta para crear partido
  };

  const handleEditTeamName = (teamName, matchId) => {
    setEditedTeamNames({
      ...editedTeamNames,
      [matchId]: {
        ...editedTeamNames[matchId],
        [teamName]: editedTeamNames[matchId]?.[teamName] || "",
      },
    });
  };

  const handleTeamNameChange = (e, matchId, teamName) => {
    setEditedTeamNames({
      ...editedTeamNames,
      [matchId]: {
        ...editedTeamNames[matchId],
        [teamName]: e.target.value,
      },
    });
  };

  const handleSaveTeamName = (matchId, teamName) => {
    const updatedMatch = { ...matches.find((match) => match.idPartido === matchId) };
    updatedMatch[teamName].name = editedTeamNames[matchId][teamName];
    updateMatch(updatedMatch);
  };

  const handleStartMatch = (matchId) => {
    setInProgress({ ...inProgress, [matchId]: true });
  };

  const handleEndMatch = (matchId) => {
    const matchScore = score[matchId];
    const scorers = goalScorers[matchId];
    // Aquí es donde procesaríamos los datos de marcador y goleadores.
    // Ejemplo de procesamiento o actualización en base al marcador y goleadores.
    const updatedMatch = { ...matches.find((match) => match.idPartido === matchId) };
    updatedMatch.status = 'Finalizado';
    updatedMatch.score = matchScore;
    updatedMatch.scorers = scorers;
    updateMatch(updatedMatch);
    setInProgress({ ...inProgress, [matchId]: false });
  };

  const handleScoreChange = (e, matchId) => {
    setScore({
      ...score,
      [matchId]: e.target.value,
    });
  };

  const handleGoalScorersChange = (e, matchId) => {
    setGoalScorers({
      ...goalScorers,
      [matchId]: e.target.value.split(',').map(player => player.trim()),
    });
  };

  return (
    <div className="matches-page">
      <BackButton />
      <h2>Partidos Programados</h2>
      <button className="create-match-btn" onClick={handleCreateClick}>
        Crear Partido
      </button>

      {matches.length > 0 ? (
        matches.map((match) => (
          <div key={match.idPartido} className="match-item">
            <div className="match-header">
              <h3>{`Partido ${match.idPartido}`}</h3>
              <div className="match-details">
                <p><strong>Fecha:</strong> {match.fecha}</p>
                <p><strong>Cancha:</strong> {match.idCancha}</p>
              </div>
            </div>

            <div className="teams-section">
              {["team1", "team2"].map((team) => {
                const teamData = match[team];
                return (
                  <div key={team} className="team">
                    <div className="team-name-section">
                      <span className="team-name" onClick={() => handleEditTeamName(team, match.idPartido)}>
                        {teamData.name}
                      </span>
                      {editedTeamNames[match.idPartido]?.[team] && (
                        <div className="team-edit">
                          <input
                            className="edit-team-name"
                            type="text"
                            value={editedTeamNames[match.idPartido][team]}
                            onChange={(e) => handleTeamNameChange(e, match.idPartido, team)}
                          />
                          <button
                            className="save-btn"
                            onClick={() => handleSaveTeamName(match.idPartido, team)}
                          >
                            Guardar
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="team-players">
                      {teamData.players.map((player) => (
                        <div key={player.idJugador} className="player-item">
                          <p><strong>{player.nombre}</strong></p>
                          <p>Rendimiento: {player.rendimiento}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="match-actions">
              {inProgress[match.idPartido] ? (
                <>
                  <button className="end-match-btn" onClick={() => handleEndMatch(match.idPartido)}>
                    Finalizar Partido
                  </button>
                  <div className="score-input">
                    <label>Marcador:</label>
                    <input
                      type="text"
                      value={score[match.idPartido] || ""}
                      onChange={(e) => handleScoreChange(e, match.idPartido)}
                      placeholder="Ej. 3-2"
                    />
                    <label>Goleadores (separados por coma):</label>
                    <input
                      type="text"
                      value={goalScorers[match.idPartido] || ""}
                      onChange={(e) => handleGoalScorersChange(e, match.idPartido)}
                      placeholder="Ej. Jugador1, Jugador2"
                    />
                  </div>
                </>
              ) : (
                <button className="start-match-btn" onClick={() => handleStartMatch(match.idPartido)}>
                  Iniciar Partido
                </button>
              )}
              {inProgress[match.idPartido] && (
                <p>El partido está en curso</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No hay partidos programados</p>
      )}
    </div>
  );
};

export default MatchesPage;
