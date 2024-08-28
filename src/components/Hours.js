// Placeholder to host a component

import React from 'react';

const Hours = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return (
    <div>
      <h2>Hora actual</h2>
      <p>{`${hours}:${minutes}:${seconds}`}</p>
    </div>
  );
};

export default Hours;