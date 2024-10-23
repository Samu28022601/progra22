import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/carrito')
      .then((response) => {
        setCarrito(response.data);
        calcularTotal(response.data);
      })
      .catch((error) => {
        console.error('Error fetching carrito:', error);
      });
  }, []);

  const calcularTotal = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.precio * item.cantidad;
    });
    setTotal(total);
  };

  const handleRemove = (id) => {
    axios.delete(`/carrito/${id}`)
      .then(() => {
        setCarrito(carrito.filter(item => item.id !== id));
        calcularTotal(carrito.filter(item => item.id !== id));
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.nombre} - ${item.precio} x {item.cantidad}
            <button onClick={() => handleRemove(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Carrito;
