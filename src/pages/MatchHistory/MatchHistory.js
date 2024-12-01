import React, { useContext } from 'react';
import { MatchHistoryContext } from '../../contexts/MatchHistoryContext';
import './MatchHistory.css';
import BackButton from '../../components/BackButton/BackButton';

const MatchHistory = () => {
  const { matches } = useContext(MatchHistoryContext);

  const formatGoals = (goals) => {
    if (goals === 1) return `${goals} Gol`;
    return `${goals} Goles`;
  };

  return (
    <div className="match-history-container">
      <BackButton />
      <h2 className="match-history-title">Historial de Partidos</h2>
      {matches.length === 0 ? (
        <p className="no-matches-message">No hay partidos registrados.</p>
      ) : (
        <ul className="match-list">
          {matches.map((match) => (
            <li key={match.id} className="match-card">
              <div className="match-header">
                <div className="match-location">{match.location}</div>
                <div className="match-date">{new Date(match.date).toLocaleDateString()}</div>
              </div>
              <div className="match-details">
                <div className="team">
                  <h3>{match.team1.name}</h3>
                  <p>{formatGoals(match.team1.goals)}</p>
                  <ul className="players">
                    {match.team1.players.map((player, idx) => (
                      <li key={idx}>
                        {player.name} - {formatGoals(player.goals)}{' '}
                        {player.infractions.length > 0 && (
                          <span className="infractions">
                            ({player.infractions.join(', ')})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="team">
                  <h3>{match.team2.name}</h3>
                  <p>{formatGoals(match.team2.goals)}</p>
                  <ul className="players">
                    {match.team2.players.map((player, idx) => (
                      <li key={idx}>
                        {player.name} - {formatGoals(player.goals)}{' '}
                        {player.infractions.length > 0 && (
                          <span className="infractions">
                            ({player.infractions.join(', ')})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatchHistory;
