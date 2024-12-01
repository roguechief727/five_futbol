import React, { useState } from 'react';
import { login, register } from '../../services/authServices';
import './AuthForm.css';

const AuthForm = ({ isLogin, onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Agregado para manejar el estado de carga

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Iniciar carga
    try {
      if (isLogin) {
        const data = await login(username, password);
        onSuccess(data);
      } else {
        await register({ username, password });
        alert('Usuario registrado. Ahora puedes iniciar sesión.');
      }
      setLoading(false); // Finalizar carga
    } catch (err) {
      setLoading(false); // Finalizar carga
      if (isLogin) {
        setError('Credenciales incorrectas. Intenta de nuevo.');
      } else {
        setError(err.response?.data?.message || 'Error desconocido');
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
      {error && <p className="error">{error}</p>}
      <div className="input-container">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={error ? 'input-error' : ''}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={error ? 'input-error' : ''}
        />
      </div>
      <button type="submit" disabled={loading} className="submit-button">
        {loading ? 'Cargando...' : isLogin ? 'Entrar' : 'Registrar'}
      </button>
    </form>
  );
};

export default AuthForm;
