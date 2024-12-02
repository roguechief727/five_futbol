import React, { useState } from 'react';
import { login, register } from '../../services/authServices';
import './AuthForm.css';

const AuthForm = ({ isLogin, onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Agregado para manejar el estado de carga

  const API_URL = 'http://localhost:3001/api/routes/auth';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Iniciar carga
    try {
      const endpoint = `${API_URL}/login`;
      const method = isLogin ? 'POST' : 'POST';
      const body = JSON.stringify({ username, password });

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (!response.ok) {
        const errorMessage = isLogin
          ? 'Error al iniciar sesión: Credenciales incorrectas.'
          : 'Error al registrar usuario.';
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Token:', data.token);
      if (isLogin) {
        // Llama a la función de éxito si el login es exitoso
        onSuccess(data); // `data` debe contener el token y el rol
      } else {
        alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Termina el estado de carga
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
