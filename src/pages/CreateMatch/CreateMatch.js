import React, { useState, useContext } from "react";
import { PlayersContext } from "../../contexts/PlayersContext";
import { MatchContext } from "../../contexts/MatchContext";
import { useNavigate } from "react-router-dom";
import "./CreateMatch.css";
import BackButton from "../../components/BackButton/BackButton";

const CreateMatch = () => {
  const { players } = useContext(PlayersContext);
  const { createMatch } = useContext(MatchContext);

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [matchDetails, setMatchDetails] = useState({
    fecha: "",
    idCancha: "",
  });

  const navigate = useNavigate();

  const handlePlayerSelection = (player) => {
    if (selectedPlayers.includes(player)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p !== player));
    } else if (selectedPlayers.length < 10) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatchDetails({ ...matchDetails, [name]: value });
  };

  const handleCreate = () => {
    if (selectedPlayers.length === 10 && matchDetails.fecha && matchDetails.idCancha) {
      // Llamar a createMatch del contexto para crear los equipos balanceados
      createMatch({ ...matchDetails, jugadores: selectedPlayers });
      setSelectedPlayers([]); // Limpiar selección
      setMatchDetails({ fecha: "", idCancha: "" }); // Limpiar formulario
      navigate("/admin/matches");
    }
  };

  if (!players) return <div>Cargando jugadores...</div>;

  return (
    <div className="create-match-form">
      <BackButton />
      <h2 className="form-title">Crear Partido</h2>

      <div className="form-section">
        <label>Fecha del Partido:</label>
        <input
          type="date"
          name="fecha"
          value={matchDetails.fecha}
          onChange={handleInputChange}
          required
          className="input-field"
        />
      </div>

      <div className="form-section">
        <label>Cancha:</label>
        <input
          type="text"
          name="idCancha"
          value={matchDetails.idCancha}
          onChange={handleInputChange}
          placeholder="Ej: Cancha Central"
          required
          className="input-field"
        />
      </div>

      <h3 className="players-title">Seleccionar Jugadores (10):</h3>
      <div className="players-list">
        {players.map((player) => (
          <div
            key={player.idJugador}
            className={`player-item ${
              selectedPlayers.includes(player) ? "selected" : ""
            }`}
            onClick={() => handlePlayerSelection(player)}
          >
            <span className="player-name">{player.nombre}</span>
            <span className="player-rendimiento">Rendimiento: {player.rendimiento}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleCreate}
        disabled={selectedPlayers.length !== 10 || !matchDetails.fecha || !matchDetails.idCancha}
        className="create-btn"
      >
        Crear Partido
      </button>
    </div>
  );
};

export default CreateMatch;
