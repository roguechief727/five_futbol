import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

   // Función para manejar la navegación hacia la pestaña anterior
  const handleGoBack = () => {
    navigate(-1); // Va a la página anterior en el historial
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = form;

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (username && password) {
      setSuccess(true);
      setError('');
    } else {
      setError('Todos los campos son obligatorios.');
    }
  };

  return (
    <div className="register-page">
      <button className="back-button" onClick={handleGoBack}>
        &#8592; Volver
      </button>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">¡Registro exitoso!</p>}
        <input
          type="text"
          placeholder="Usuario"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
