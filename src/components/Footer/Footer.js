import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-title">FiveFutbol</h3>
          <p className="footer-description">Tu lugar para organizar y disfrutar de partidos de fútbol 5.</p>
        </div>
        <div className="footer-right">
          <h4 className="footer-heading">Enlaces útiles</h4>
          <ul className="footer-links">
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/terms">Términos de Servicio</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FiveFutbol. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
