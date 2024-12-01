import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Función para manejar el login exitoso
  const handleLoginSuccess = ({ token, role }) => {
    login(token, role);
    navigate(role === 'admin' ? '/admin' : '/player');
  };

  // Función para manejar la navegación hacia la pestaña anterior
  const handleGoBack = () => {
    navigate(-1); // Va a la página anterior en el historial
  };

  return (
    <div className="login-page">
      {/* Botón para volver a la pestaña anterior */}
      <button className="back-button" onClick={handleGoBack}>
        &#8592; Volver
      </button>

      <AuthForm isLogin={true} onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
