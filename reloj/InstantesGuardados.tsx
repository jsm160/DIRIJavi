import React from 'react';

interface InstantesGuardadosProps {
  instantes: string[];
}

const InstantesGuardados: React.FC<InstantesGuardadosProps> = ({ instantes }) => {
  return (
    <div className="instantes-guardados">
      <h2>Instantess Guardados</h2>
      <ul>
        {instantes.map((instante, index) => (
          <li key={index}>{instante}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstantesGuardados;
