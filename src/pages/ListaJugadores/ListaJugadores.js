import React, { useState, useEffect, useContext } from 'react';
import './ListaJugadores.css';
import { AuthContext } from '../../contexts/AuthContext';

const ListaJugadores = () => {
  const [jugadores, setJugadores] = useState([]);
  const { auth } = useContext(AuthContext); // Acceder al token desde el contexto

  useEffect(() => {
    const fetchJugadores = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/jugador', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${auth.token}`, // Incluir el token en el encabezado
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener jugadores');
        }

        const data = await response.json();
        console.log('Jugadores:', data); // Verifica los datos aquí
        setJugadores(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    };

    if (auth.token) {
      fetchJugadores(); // Llamar a la API solo si el token está disponible
    }
  }, [auth.token]); // Ejecutar este efecto solo si el token cambia

  return (
    <div className="lista-jugadores-container">
      <h1 className="lista-jugadores-titulo">Lista de Jugadores</h1>
      <table className="lista-jugadores-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Modo</th>
            <th>Rendimiento</th>
            <th>Goles Marcados</th>
            <th>Fallas Cometidas</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador) => (
            <tr key={jugador.idJugador}>
              <td>{jugador.idJugador}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.email || 'N/A'}</td>
              <td>{jugador.modo || 'N/A'}</td>
              <td>{jugador.rendimiento || 'N/A'}</td>
              <td>{jugador.golesMarcados}</td>
              <td>{jugador.fallasCometidas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaJugadores;
