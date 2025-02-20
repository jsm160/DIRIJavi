// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListPage from './views/ItemListPage';
import ItemDetailPage from './views/ItemDetailPage';

import Header from './components/Header';  // Importa el componente Header
import './App.css';  // Importa el archivo de estilos
import HelpPage from './views/HelpPage';
import Card from './components/Card';
import logo from "./assets/dlsi.png"; 
import { useTranslation } from "react-i18next"; // Importa el hook useTranslation


const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Función para cambiar de idioma
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Router>
      
      <Header /> {/* El Header se renderiza siempre, fuera de las rutas */}
      <div className="flex justify-center mt-4">
        <select onChange={(e) => changeLanguage(e.target.value)} className="border p-2 rounded">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
      <Routes>
        <Route path="/" element={<ItemListPage />} />
        <Route path="/item/:id" element={<ItemDetailPage/>} />
        <Route path="/help/*" element={<HelpPage />}>
          <Route
            path="faq"
            element={
              <div className="bg-black p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-red-500">Preguntas más frecuentes</h2>
                <p className="mt-2 text-red-500">Aquí encontrarás respuestas a las preguntas más comunes.</p>
              </div>
            }
            
          />
          <Route
            path="reference"
            element={
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-black-500">{t('reference')}</h2>
                <p className="mt-2 text-black-500">{t('description')}</p>
              </div>
            }
          />
          <Route
          path="card"
          element={
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <Card
                imageSrc={logo}
                title="DIRI @ DLSI"
                description="Ejemplo de proyecto."
                techStack={["React", "Redux", "TypeScript"]}
                projectLink="https://www.dlsi.ua.es"
                githubLink="https://github.com/example"
              />
            </div>
          }
        />
        </Route>
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </Router>
  );
};

export default App;
