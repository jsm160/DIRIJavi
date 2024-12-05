import React from 'react';
import ActivityItem from './ActivityItem';

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="line"></div>

      <ActivityItem
        nombreImagen="francisca"
        alt="Francisca"
        time="Hace una hora"
        description="Fui a comer con amigos"
      />
      <ActivityItem
        nombreImagen="paco"
        alt="Paco"
        time="10:00 am"
        description="Leí un artículo sobre tecnología"
      />
      <ActivityItem
        nombreImagen="quica"
        alt="Quica"
        time="10:00 am"
        description="Escribí notas sobre un proyecto importante"
      />
      <ActivityItem
        nombreImagen="curro"
        alt="Curro"
        time="2:21 pm"
        description="Preparé la presentación para la reunión de mañana"
      />
    </div>
  );
};

export default Content;
