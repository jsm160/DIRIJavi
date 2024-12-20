// src/views/ItemDetailPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Item } from '../models/Item';

const ItemDetailPage: React.FC = () => {
  const location = useLocation();
  const item = location.state?.item as Item | undefined; // Recupera los datos pasados por 'state'

  if (!item) {
    return <p>No se ha encontrado el producto con ese ID.</p>;
  }

  return (
    <div>
      <h1>Detalles del Jugador</h1>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Nombre:</strong> {item.name}</p>
      <p><strong>Número:</strong> {item.number}</p>
      <p><strong>Puntos:</strong> {item.points}</p>
    </div>
  );
};

export default ItemDetailPage;
