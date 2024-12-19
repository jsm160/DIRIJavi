// src/components/ItemDetails.tsx
import React from 'react';
import { Item } from '../models/Item';

interface ItemDetailsProps {
  item: Item | null;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  if (!item) return <p>Selecciona un jugador para ver los detalles.</p>;

  return (
    <div>
      <h2>Detalles del Jugador</h2>
      <p>ID: {item.id}</p>
      <p>Nombre: {item.name}</p>
      <p>Number: {item.number}</p>
      <p>Points: {item.points}</p>
    </div>
  );
};

export default ItemDetails;
