import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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
