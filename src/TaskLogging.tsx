import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';

const TaskLogging: React.FC = () => {
  return (
    <div className="notificationsFrame">
      <div className="panel">
       
        <div className="section">
          <Header title="Registro de Tareas" />
          <Content /> 
        </div>

        {/* Otras secciones */}
        <div className="section">
          <Header title="Perfil" />
        </div>
        <div className="section">
          <Header title="Preferencias" />
        </div>
        <div className="section">
          <Header title="Chat" />
        </div>
      </div>
    </div>
  );
};

export default TaskLogging;
