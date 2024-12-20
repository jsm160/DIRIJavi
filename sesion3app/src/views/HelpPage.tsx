import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const HelpPage: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Ayuda</h1>
      <nav>
        <ul>
          <li>
            {/* Usa rutas absolutas para evitar concatenación de rutas */}
            <Link
              to="/help/faq"
              style={{
                textDecoration: location.pathname === '/help/faq' ? 'underline' : 'none',
              }}
            >
              Preguntas más frecuentes
            </Link>
          </li>
          <li>
            <Link
              to="/help/reference"
              style={{
                textDecoration: location.pathname === '/help/reference' ? 'underline' : 'none',
              }}
            >
              Referencia
            </Link>
          </li>
        </ul>
      </nav>

      {/* Renderiza el contenido dinámico según la subruta activa */}
      <div style={{ marginTop: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default HelpPage;
