import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetalleJugador.css';

const jugadores = [
  { id: 1, nombre: "Juan Pérez", edad: 25, posicion: "Delantero", equipo: "Los Halcones", goles: 12 },
  { id: 2, nombre: "Pedro Gómez", edad: 22, posicion: "Defensa", equipo: "Los Tigres", goles: 5 },
  { id: 3, nombre: "Sofía Martínez", edad: 28, posicion: "Mediocampista", equipo: "Las Águilas", goles: 8 },
];

const DetalleJugador = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jugador = jugadores.find((j) => j.id === parseInt(id));
  const [comentario, setComentario] = useState("");
  const [mensajeValidado, setMensajeValidado] = useState("");

  if (!jugador) {
    return <p className="detalle-jugador-error">Jugador no encontrado.</p>;
  }

  const handleRegresar = () => {
    navigate("/jugadores");
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const validarMensaje = () => {
    if (comentario.trim() === "") {
      setMensajeValidado("El comentario no puede estar vacío.");
    } else {
      setMensajeValidado("Comentario validado correctamente.");
    }
  };

  return (
    <div className="detalle-jugador-container">
      <h1 className="detalle-jugador-titulo">Detalles de {jugador.nombre}</h1>
      <p className="detalle-jugador-info"><strong>Edad:</strong> {jugador.edad}</p>
      <p className="detalle-jugador-info"><strong>Posición:</strong> {jugador.posicion}</p>
      <p className="detalle-jugador-info"><strong>Equipo:</strong> {jugador.equipo}</p>
      <p className="detalle-jugador-info"><strong>Goles:</strong> {jugador.goles}</p>

      <h2 className="detalle-jugador-comentario-titulo">Comentarios</h2>
      <textarea 
        className="detalle-jugador-comentario-textarea" 
        value={comentario} 
        onChange={handleComentarioChange} 
        placeholder="Escribe tu comentario aquí..."
      />
      <div className="detalle-jugador-botones">
        <button 
          className="detalle-jugador-validar-boton" 
          onClick={validarMensaje}
        >
          Validar Comentario
        </button>
        <button 
          className="detalle-jugador-boton" 
          onClick={handleRegresar}
        >
          Regresar
        </button>
      </div>
      {mensajeValidado && <p className="detalle-jugador-mensaje-validado">{mensajeValidado}</p>}
    </div>
  );
};

export default DetalleJugador;
