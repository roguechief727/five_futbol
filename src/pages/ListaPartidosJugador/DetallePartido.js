import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetallePartido.css';

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
  

const DetallePartido = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comentario, setComentario] = useState("");
  const [mensajeValidado, setMensajeValidado] = useState("");

  const partido = partidos.find((p) => p.id === parseInt(id));

  if (!partido) {
    return <p className="detalle-partido-error">Partido no encontrado.</p>;
  }

  const handleRegresar = () => {
    navigate("/partidos");
  };

  const handleValidarComentario = () => {
    if (comentario.trim() === "") {
      setMensajeValidado("El comentario no puede estar vacío.");
    } else {
      setMensajeValidado("Comentario validado correctamente.");
    }
  };

  return (
    <div className="detalle-partido-container">
      <h1 className="detalle-partido-titulo">
        Detalles del Partido: {partido.equipo1} vs {partido.equipo2}
      </h1>
      <p className="detalle-partido-info"><strong>Fecha:</strong> {partido.fecha}</p>
      <p className="detalle-partido-info"><strong>Resultado:</strong> {partido.resultado}</p>

      <h2 className="detalle-partido-subtitulo">Jugadores</h2>
      <div className="detalle-partido-equipos">
        <div className="detalle-partido-equipo">
          <h3 className="detalle-partido-equipo-titulo">{partido.equipo1}</h3>
          <ul className="detalle-partido-jugadores">
            {partido.jugadores
              .filter((jugador) => jugador.equipo === partido.equipo1)
              .map((jugador, index) => (
                <li key={index} className="detalle-partido-jugador">
                  {jugador.nombre} - Goles: {jugador.goles}
                </li>
              ))}
          </ul>
        </div>
        <div className="detalle-partido-equipo">
          <h3 className="detalle-partido-equipo-titulo">{partido.equipo2}</h3>
          <ul className="detalle-partido-jugadores">
            {partido.jugadores
              .filter((jugador) => jugador.equipo === partido.equipo2)
              .map((jugador, index) => (
                <li key={index} className="detalle-partido-jugador">
                  {jugador.nombre} - Goles: {jugador.goles}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <h2 className="detalle-partido-comentario-titulo">Comentarios</h2>
      <textarea
        className="detalle-partido-comentario-textarea"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribe tu comentario aquí..."
      />
      <div className="detalle-partido-botones">
        <button className="detalle-partido-validar-boton" onClick={handleValidarComentario}>
          Validar Comentario
        </button>
        <button className="detalle-partido-boton" onClick={handleRegresar}>
          Regresar
        </button>
      </div>
      {mensajeValidado && <p className="detalle-partido-mensaje-validado">{mensajeValidado}</p>}
    </div>
  );
};

export default DetallePartido;
