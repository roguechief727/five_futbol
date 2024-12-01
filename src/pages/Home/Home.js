import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import soccerImage from '../../assets/champions.jpg'; // Asegúrate de tener esta imagen en la carpeta `assets`

const Home = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleLoginClick = () => {
      navigate('/login'); // Redirige a la ruta /login
  };

  const handleRegisterClick = () => {
      navigate('/register'); // Redirige a la ruta /register
  };
    
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>¡Bienvenido a FiveFutbol!</h1>
        <p>Organiza los mejores partidos de fútbol 5 con tu comunidad</p>
        <button className="cta-button" onClick={handleRegisterClick}>Registrarse</button>
        <button className="cta-button secondary" onClick={handleLoginClick}>Iniciar Sesión</button>
      </header>
      <section className="home-about">
        <h2>¿Qué es FiveFutbol?</h2>
        <p>
          FiveFutbol es una plataforma diseñada para ayudarte a organizar tus partidos de fútbol 5 de manera eficiente. Prioriza a los jugadores frecuentes, penaliza a quienes cancelan de última hora y crea equipos equilibrados para disfrutar del juego al máximo.
        </p>
      </section>
      <section className="home-image">
        <img src={soccerImage} alt="Fútbol en acción" />
      </section>
    </div>
  );
};

export default Home;
