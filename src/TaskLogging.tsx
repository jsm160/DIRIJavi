import React from 'react';
import Header from './Header';
import Content from './Content';

const TaskLogging: React.FC = () => {
  return (
    <div className="notificationsFrame bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="panel bg-black text-white p-6 rounded-md shadow">
        <div className="section">
          <Header title="Registro de Tareas" />
          <Content />
        </div>

        <div className="section">
          <Header title="Perfil" />
        </div>
        <div className="section">
          <Header title="Preferencias" />
        </div>
        <div className="section">
          <Header title="Chat" />
        </div>
        <div className="bg-red-500 text-white">Esto es un test de Tailwind</div>

      </div>
    </div>
  );
};

export default TaskLogging;
