import React, { useState, useEffect, useContext } from 'react';
import './ListaJugadores.css';
import { AuthContext } from '../../contexts/AuthContext';

const ListaJugadores = () => {
  const [jugadores, setJugadores] = useState([]);
  const [editingJugador, setEditingJugador] = useState(null); // Estado para el jugador en edición
  const [editedJugador, setEditedJugador] = useState({});
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
        setJugadores(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    };

    if (auth.token) {
      fetchJugadores();
    }
  }, [auth.token]);

  // Eliminar un jugador
  const handleDelete = async (idJugador) => {
    try {
      const response = await fetch(`http://localhost:3001/api/jugador/${idJugador}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar jugador');
      }

      setJugadores(jugadores.filter((jugador) => jugador.idJugador !== idJugador));
    } catch (error) {
      console.error('Error deleting jugador:', error);
    }
  };

  // Iniciar edición de un jugador
  const handleEdit = (jugador) => {
    setEditingJugador(jugador.idJugador);
    setEditedJugador(jugador);
  };

  // Guardar cambios
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/jugador/${editingJugador}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedJugador),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar jugador');
      }

      setJugadores(
        jugadores.map((jugador) =>
          jugador.idJugador === editingJugador ? editedJugador : jugador
        )
      );
      setEditingJugador(null);
    } catch (error) {
      console.error('Error updating jugador:', error);
    }
  };

  // Manejar cambios en los campos de edición
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJugador((prev) => ({ ...prev, [name]: value }));
  };

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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador) => (
            <tr key={jugador.idJugador}>
              {editingJugador === jugador.idJugador ? (
                <>
                  <td>{jugador.idJugador}</td>
                  <td>
                    <input
                      type="text"
                      name="nombre"
                      value={editedJugador.nombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editedJugador.email || ''}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="modo"
                      value={editedJugador.modo || ''}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="rendimiento"
                      value={editedJugador.rendimiento || ''}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="golesMarcados"
                      value={editedJugador.golesMarcados || ''}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="fallasCometidas"
                      value={editedJugador.fallasCometidas || ''}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleSave}>Guardar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{jugador.idJugador}</td>
                  <td>{jugador.nombre}</td>
                  <td>{jugador.email || 'N/A'}</td>
                  <td>{jugador.modo || 'N/A'}</td>
                  <td>{jugador.rendimiento || 'N/A'}</td>
                  <td>{jugador.golesMarcados}</td>
                  <td>{jugador.fallasCometidas}</td>
                  <td>
                    <button onClick={() => handleEdit(jugador)}>Editar</button>
                    <button onClick={() => handleDelete(jugador.idJugador)}>Eliminar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaJugadores;
