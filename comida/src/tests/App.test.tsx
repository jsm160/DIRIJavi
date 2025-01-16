import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App"; // Asegúrate de que la ruta sea correcta
import { foodItemsContext } from "../App"; // Para usar el contexto si es necesario
import { describe, it, expect } from 'vitest'; // Usa `vitest` para las pruebas
import '@testing-library/jest-dom'; // Importa las aserciones extendidas

// Mock de los datos de menú
const mockMenuItems = [
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
];

describe("Comida Rápida App", () => {
  it("muestra los productos con nombre y disponibilidad", () => {
    render(
      <foodItemsContext.Provider value={mockMenuItems}>
        <App />
      </foodItemsContext.Provider>
    ); // Renderizamos el componente envuelto en el contexto

    // Verificamos que todos los productos se muestren correctamente
    mockMenuItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(`#${item.quantity} disponibles`)).toBeInTheDocument();
    });
  });

  it("cambia a la página de selección de comida al hacer click en 'Pedir'", async () => {
    render(
      <foodItemsContext.Provider value={mockMenuItems}>
        <App />
      </foodItemsContext.Provider>
    );

    // Hacemos click en el botón de 'Pedir' de la primera comida
    fireEvent.click(screen.getAllByText("Pedir")[0]);

    // Esperamos que la página cambie y se muestre el formulario de pedido
    await waitFor(() => {
      expect(screen.getByText("Volver al Menú")).toBeInTheDocument(); // Verificamos que se haya renderizado la opción de volver al menú
    });
  });

  it("vuelve al menú cuando se hace click en 'Volver al Menú'", async () => {
    render(
      <foodItemsContext.Provider value={mockMenuItems}>
        <App />
      </foodItemsContext.Provider>
    );

    // Hacemos click en el botón de 'Pedir' de la primera comida
    fireEvent.click(screen.getAllByText("Pedir")[0]);

    // Esperamos que la página de selección de comida se muestre
    await waitFor(() => {
      expect(screen.getByText("Volver al Menú")).toBeInTheDocument();
    });

    // Hacemos click en 'Volver al Menú'
    fireEvent.click(screen.getByText("Volver al Menú"));

    // Verificamos que volvemos a la pantalla inicial del menú
    await waitFor(() => {
      expect(screen.getByText("Pedir Comida")).toBeInTheDocument();
    });
  });

  it("muestra correctamente la disponibilidad y la imagen de cada producto", async () => {
    render(
      <foodItemsContext.Provider value={mockMenuItems}>
        <App />
      </foodItemsContext.Provider>
    );

    // Verificamos que los productos se muestran correctamente con nombre, cantidad y precio
    mockMenuItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(`#${item.quantity} disponibles`)).toBeInTheDocument();
      expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();

      // Verificamos que la imagen esté presente
      expect(screen.getByAltText(item.name)).toBeInTheDocument(); // Asume que en el App tienes el atributo alt con el nombre del producto
    });
  });
});
