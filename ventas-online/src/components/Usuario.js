import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Usuario() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('/usuarios')
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error('Error fetching usuarios:', error);
      });
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuario;
