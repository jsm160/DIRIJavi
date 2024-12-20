// src/components/ItemList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../models/Item';

interface ItemListProps {
  items: Item[];  // Solo esperamos la propiedad items
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Número</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                {/* El nombre es un enlace que redirige a los detalles del producto */}
                <Link to={`/item/${item.id}`} state={{ item }}>
                  {item.name}
                </Link>
              </td>
              <td>{item.number}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
