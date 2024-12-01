import React from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate en lugar de useHistory
import './BackButton.css'; // Importamos los estilos del botón

// Componente BackButton
const BackButton = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación en React Router v6

  // Función para volver atrás
  const handleBack = () => {
    navigate(-1); // Vuelve a la página anterior
  };

  return (
    <button className="back-button" onClick={handleBack}>
      &#8592; Volver
    </button>
  );
};

export default BackButton;
