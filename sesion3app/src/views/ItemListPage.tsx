// src/views/ItemListPage.tsx
import React, { useEffect, useState } from 'react';
import { Item } from '../models/Item';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';

const ItemListPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    // Supón que tienes una API o datos estáticos para cargar los items
    const fetchedItems: Item[] = [
      { id: '1', name: 'Javier', number: 10, points: 5 },
      { id: '2', name: 'Pablo', number: 20, points: 10 },
      { id: '3', name: 'Pepe', number: 30, points: 15 },
    ];
    setItems(fetchedItems);
    setFilteredItems(fetchedItems);
  }, []);

  const handleSearch = (searchTerm: string) => {
    const result = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(result);
  };

  return (
    <div>
      <h1>Lista de Items</h1>
      <SearchBar onSearch={handleSearch} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default ItemListPage;
