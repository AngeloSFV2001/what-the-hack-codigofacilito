// Placeholder to host a component
import React from 'react';
import './Hours.css'; // Importar el archivo de estilos específico para Hours

const Hours = () => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  let openingHours;

  if (day >= 1 && day <= 5) {
    openingHours = '10 a.m. - 4 p.m.';
  } else {
    openingHours = '9 a.m. - 8 p.m.';
  }

  return (
    <div className="hours-container">
      <h2>Hora de apertura del refugio el día de hoy</h2>
      <p className="opening-hours">{openingHours}</p>

      <h2>Hora actual</h2>
      <p className="current-time">{`${hours}:${minutes}:${seconds}`}</p>
    </div>
  );
};

export default Hours;