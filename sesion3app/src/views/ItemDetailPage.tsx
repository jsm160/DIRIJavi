// src/views/ItemDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../models/Item';

interface ItemDetailPageProps {
  items: Item[]; // Recibimos la lista de items (jugadores)
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ items }) => {
  const { id } = useParams(); // Obtiene el id del item desde la URL
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (id) {
      // Buscamos el item con el ID correspondiente en la lista de items
      const foundItem = items.find(item => item.id === id);

      if (foundItem) {
        setItem(foundItem); // Si encontramos el item, lo asignamos al estado
      }
    }
  }, [id, items]); // Reejecutamos cuando 'id' o 'items' cambien

  if (!item) {
    return <p>No se ha encontrado el producto con ese ID.</p>;
  }

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Nombre:</strong> {item.name}</p>
      <p><strong>Número:</strong> {item.number}</p>
      <p><strong>Puntos:</strong> {item.points}</p>
    </div>
  );
};

export default ItemDetailPage;
