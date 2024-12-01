import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSuccess = ({ token, role }) => {
    login(token, role);
    navigate(role === 'admin' ? '/admin' : '/player');
  };

  return (
    <div className="login-page">
      <AuthForm isLogin={true} onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
