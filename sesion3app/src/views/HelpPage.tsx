// src/views/HelpPage.tsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const HelpPage: React.FC = () => {
  return (
    <div>
      <h1>Ayuda</h1>
      <nav>
        <ul>
          <li>
            <Link to="faq">Preguntas más frecuentes</Link>
          </li>
          <li>
            <Link to="reference">Referencia</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="faq" element={<p>Preguntas más frecuentes...</p>} />
        <Route path="reference" element={<p>Referencia...</p>} />
      </Routes>
    </div>
  );
};

export default HelpPage;
