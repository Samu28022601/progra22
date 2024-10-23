import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Articulo() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    axios.get('/articulos').then((response) => {
      setArticulos(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Artículos</h2>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.id}>{articulo.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Articulo;
