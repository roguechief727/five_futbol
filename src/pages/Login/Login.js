import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { AuthContext } from '../../contexts/AuthContext';
import BackButton from '../../components/BackButton/BackButton';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Función para manejar el login exitoso
  const handleLoginSuccess = ({ token, role }) => {
    console.log('Token:', token);
    login(token, role);
    console.log('Role:', role);
    navigate(role === 'administrador' ? '/admin' : '/player');
  };

  // Función para manejar la navegación hacia la pestaña anterior
  const handleGoBack = () => {
    navigate(-1); // Va a la página anterior en el historial
  };

  return (
    <div className="login-page">
      {/* Botón para volver a la pestaña anterior */}
      <BackButton />

      <AuthForm isLogin={true} onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
