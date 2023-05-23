import React from 'react';

function Personaje({ personaje }) {
  return (
    <div>
      <h3>{personaje.name}</h3>
      <p>{personaje.description}</p>
      {personaje.thumbnail && (
        <img
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          alt={personaje.name}
        />
      )}
    </div>
  );
}

export default Personaje;
