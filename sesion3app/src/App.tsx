// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListPage from './views/ItemListPage';
import ItemDetailPage from './views/ItemDetailPage';
import { Item } from './models/Item';
import Header from './components/Header';  // Importa el componente Header
import './App.css';  // Importa el archivo de estilos

const App: React.FC = () => {
  // Lista de items (jugadores)
  const items: Item[] = [
    { id: '1', name: 'Javier', number: 10, points: 5 },
    { id: '2', name: 'Pablo', number: 20, points: 10 },
    { id: '3', name: 'Pepe', number: 30, points: 15 },
  ];

  return (
    <Router>
      <Header /> {/* El Header se renderiza siempre, fuera de las rutas */}
      <Routes>
        <Route path="/" element={<ItemListPage />} />
        <Route path="/item/:id" element={<ItemDetailPage items={items} />} />
      </Routes>
    </Router>
  );
};

export default App;
