import React from "react";
import "./CriticList.css";
import BackButton from '../../components/BackButton/BackButton';

const critics = [
    { title: "Crítica 1", content: "Contenido de la crítica 1." },
    { title: "Crítica 2", content: "Contenido de la crítica 2." },
    { title: "Crítica 3", content: "Contenido de la crítica 3." },
  ];

const CriticList = () => {
  return (
    <div className="critic-list-container">
      {critics.map((critic, index) => (
        <div key={index} className="critic-card">
          <h2 className="critic-title">{critic.title}</h2>
          <p className="critic-content">{critic.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CriticList;
