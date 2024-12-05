import React, { useState } from 'react';
import Reloj from './Reloj';
import InstantesGuardados from './InstantesGuardados';
import './styles/app.css';

const App: React.FC = () => {
  const [instantes, setInstantes] = useState<string[]>([]);

  const handleSaveInstant = (instante: string) => {
    setInstantes((prevInstantes) => [...prevInstantes, instante]);
  };

  return (
    <div className="app">
      <div className="left-panel">
        <Reloj onSave={handleSaveInstant} />
      </div>
      <div className="right-panel">
        <InstantesGuardados instantes={instantes} />
      </div>
    </div>
  );
};

export default App;
