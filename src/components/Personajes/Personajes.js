import React, { useState, useEffect } from 'react';
import Personaje from '../personaje/personaje';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Personajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const publicKey = 'TU_CLAVE_PUBLICA';
    const privateKey = 'TU_CLAVE_PRIVADA';
    const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
    const timestamp = Date.now();
    const hash = `${timestamp}${privateKey}${publicKey}`;
    const url = `${baseUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.results) {
          setPersonajes(data.data.results);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Listado de personajes de Marvel</h1>
      <hr />
      <Row>
        {personajes.map(personaje => (
          <Col key={personaje.id}>
            <Personaje personaje={personaje} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Personajes;
