import { useState } from "react";
import { MenuItem } from "./entities/entities";
import FoodOrder from "./FoodOrder";
import React from "react";
import ErrorBoundary from './services/ErrorBoundary';  // Asegúrate de tener el archivo ErrorBoundary.tsx

export const foodItemsContext = React.createContext<MenuItem[]>([]);

function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null); // Producto seleccionado
  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Hamburguesa de Pollo",
      quantity: 40,
      desc: "Hamburguesa de pollo frito - … y mayonesa",
      price: 24,
      image: "cb.jpg",
    },
    {
      id: 2,
      name: "Hamburguesa Vegetariana",
      quantity: 30,
      desc: "Hamburguesa vegetariana - … y mayonesa",
      price: 28,
      image: "cbvegan.jpg",
    },
    {
      id: 3,
      name: "Patatas fritas",
      quantity: 33,
      desc: "Patatas fritas - … y mayonesa",
      price: 2,
      image: "papas.jpg",
    },
    {
      id: 4,
      name: "Helado",
      quantity: 22,
      desc: "heladito",
      price: 5,
      image: "helado.jpg",
    },
  ]);

  // Función para manejar la selección de un producto
  const handleSelectFood = (food: MenuItem) => {
    setSelectedFood(food);
    setIsChooseFoodPage(true); // Cambiar a la página de selección del pedido
  };

  // Función para manejar el retorno al menú
  const handleReturnToMenu = () => {
    setIsChooseFoodPage(false); // Volver al menú
    setSelectedFood(null); // Limpiar la selección de comida
  };

  return (
    <foodItemsContext.Provider value={menuItems}>
      <ErrorBoundary> {/* Envolvemos toda la App con ErrorBoundary */}
        <div className="App">
          <button
            className="toggleButton"
            onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
          >
            {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
          </button>
          <h3 className="title">Comida Rápida Online</h3>

          {!isChooseFoodPage && (
            <>
              <h4 className="subTitle">Menús</h4>
              <ul className="ulApp">
                {menuItems.map((item) => (
                  <li key={item.id} className="liApp">
                    <p>{item.name}</p>
                    <p>#{item.quantity} disponibles</p>
                    <button onClick={() => handleSelectFood(item)}>Pedir</button>
                  </li>
                ))}
              </ul>
            </>
          )}
          {isChooseFoodPage && selectedFood && (
            <FoodOrder
              food={selectedFood}
              onReturnToMenu={handleReturnToMenu}
            />
          )}
        </div>
      </ErrorBoundary>
    </foodItemsContext.Provider>
  );
}

export default App;
