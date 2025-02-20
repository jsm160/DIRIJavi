import React from "react";
import ActivityItem from "./ActivityItem";


const Content: React.FC = () => {
  return (
    <div className="content bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="line border-b-2 border-gray-300 mb-4"></div>

      <div className="space-y-4">
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
    </div>
  );
};

export default Content;
