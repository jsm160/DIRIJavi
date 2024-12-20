// src/views/ItemListPage.tsx
import React, { useEffect, useState } from 'react';
import { Item } from '../models/Item';
import ItemList from '../components/ItemList';  // Asegúrate de importar ItemList correctamente

const ItemListPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
 
    const fetchedItems: Item[] = [
      { id: '1', name: 'Javier', number: 10, points: 5 },
      { id: '2', name: 'Pablo', number: 20, points: 10 },
      { id: '3', name: 'Pepe', number: 30, points: 15 },
    ];
    setItems(fetchedItems);
  }, []);

  return (
    <div>
      <h1>Lista de Jugadores</h1>
      <ItemList items={items} /> 
    </div>
  );
};

export default ItemListPage;
