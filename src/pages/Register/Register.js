import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import BackButton from '../../components/BackButton/BackButton';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ 
    username: '', 
    password: '', 
    confirmPassword: '', 
    email: '', 
    numeroDocumento: '' 
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, email, numeroDocumento } = form;

    // Validaciones de formulario
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (!username || !password || !email || !numeroDocumento) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      // Llamada al backend
      const response = await fetch('http://localhost:3001/api/routes/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username, 
          password, 
          email, 
          numeroDocumento,
          nombre: "default",
          role: 'jugador' // Ajusta el rol según sea necesario
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        setTimeout(() => navigate('/login'), 2000); // Redirige a la página de login tras 2 segundos
      } else {
        const { message } = await response.json();
        setError(message || 'Error al registrar usuario.');
      }
    } catch (err) {
      console.error('Error al registrar usuario:', err);
      setError('Error al registrar usuario.');
    }
  };

  return (
    <div className="register-page">
      <BackButton />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">¡Registro exitoso! Redirigiendo...</p>}
        <input
          type="text"
          placeholder="Usuario"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Número de Documento"
          name="numeroDocumento"
          value={form.numeroDocumento}
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
