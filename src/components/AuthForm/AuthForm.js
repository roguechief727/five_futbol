import React, { useState } from 'react';
import { login, register } from '../../services/authService';
import './AuthForm.css';

const AuthForm = ({ isLogin, onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const data = await login(username, password);
        onSuccess(data);
      } else {
        await register({ username, password });
        alert('Usuario registrado. Ahora puedes iniciar sesión.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error desconocido');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{isLogin ? 'Entrar' : 'Registrar'}</button>
    </form>
  );
};

export default AuthForm;
