import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';  // Asumiendo que tienes un contexto de autenticación
import './Admin.css';

const Admin = () => {
  const { logout } = useContext(AuthContext);  // Obtener la función de logout desde el contexto
  const navigate = useNavigate();

  // Función para manejar el log out
  const handleLogout = () => {
    logout();  // Llamamos al método logout del contexto
    navigate('/');  // Redirigimos al inicio
  };

  const handleHistoryClick = () => {
    navigate('/admin/match-history'); // Redirige a la ruta /register
};

  return (
    <div className="admin-page">
      <h2 className="admin-title">Panel de Administración</h2>
      
      <div className="admin-options">
        <div className="option-card">
          <h3 className="option-title">Gestionar Partidos</h3>
          <p className="option-description">Administra los partidos programados, edita y asigna jugadores.</p>
          <button className="option-button">Gestionar</button>
        </div>

        <div className="option-card">
          <h3 className="option-title">Gestionar Jugadores</h3>
          <p className="option-description">Añade, edita o elimina jugadores de la lista.</p>
          <button className="option-button">Gestionar</button>
        </div>

        <div className="option-card">
          <h3 className="option-title">Historial de Partidos</h3>
          <p className="option-description">Consulta los registros de partidos pasados.</p>
          <button className="option-button" onClick={ handleHistoryClick }>Ver Historial</button>
        </div>
      </div>

      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default Admin;
