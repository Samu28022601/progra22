import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pedido() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get('/pedidos').then((response) => {
      setPedidos(response.data);
    }).catch((error) => {
      console.error('Error fetching pedidos:', error);
    });
  }, []);

  return (
    <div>
      <h2>Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>{pedido.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pedido;
