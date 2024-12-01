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

  if (!jugador) {
    return <p>Jugador no encontrado.</p>;
  }

  const handleRegresar = () => {
    navigate("/jugadores");
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  return (
    <div className="detalle-jugador-container">
      <h1>Detalles de {jugador.nombre}</h1>
      <p><strong>Edad:</strong> {jugador.edad}</p>
      <p><strong>Posición:</strong> {jugador.posicion}</p>
      <p><strong>Equipo:</strong> {jugador.equipo}</p>
      <p><strong>Goles:</strong> {jugador.goles}</p>

      <h2>Comentarios</h2>
      <textarea 
        value={comentario} 
        onChange={handleComentarioChange} 
        placeholder="Escribe tu comentario aquí..."
      />
      <button onClick={handleRegresar}>Regresar</button>
    </div>
  );
};

export default DetalleJugador;
