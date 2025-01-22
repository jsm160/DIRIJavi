import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import App from "../App"; // Asegúrate de que la ruta sea correcta
import { foodItemsContext } from "../App"; // Para usar el contexto si es necesario
import { describe, it, expect } from 'vitest'; // Usa `vitest` para las pruebas
import '@testing-library/jest-dom'; // Importa las aserciones extendidas

// Mock de los datos de menú
const mockMenuItems = [
  { id: 1, name: "Hamburguesa de Pollo", quantity: 40, price: 24, image: "cb.jpg", desc: "Hamburguesa de pollo frito - … y mayonesa" },
  { id: 2, name: "Hamburguesa Vegetariana", quantity: 30, price: 28, image: "cbvegan.jpg", desc: "Hamburguesa vegetariana - … y mayonesa" },
  { id: 3, name: "Patatas fritas", quantity: 33, price: 2, image: "papas.jpg", desc: "Patatas fritas - … y mayonesa" },
  { id: 4, name: "Helado", quantity: 22, price: 5, image: "helado.jpg", desc: "heladito" },
];

describe("Comida Rápida App", () => {
  it("muestra 4 productos en la carta inicial con stock, imagen y nombre", async () => {
    render(
      <foodItemsContext.Provider value={mockMenuItems}>
        <App />
      </foodItemsContext.Provider>
    );
  
    // Esperar hasta que el contenido esté completamente cargado
    await waitFor(() => {
      mockMenuItems.forEach((item) => {
        // Verificar que el nombre del producto está presente
        expect(screen.getByText(item.name)).toBeInTheDocument();
  
        // Verificar que la cantidad disponible está en pantalla
        expect(screen.getByText(`#${item.quantity} disponibles`)).toBeInTheDocument();
      });
    });
  
    // Seleccionamos solo los botones "Pedir" dentro de la lista de productos
    const productList = screen.getByRole('list'); // Seleccionamos la lista de productos
    const orderButtons = within(productList).getAllByRole('button', { name: /Pedir/ });
  
    // Verificamos que hay exactamente 4 botones "Pedir" dentro de la lista
    expect(orderButtons).toHaveLength(4);
  });
  
  



  
  
  
  
  
  
  
  
  
  /*
  
  it("muestra 4 productos en la pantalla de 'Pedir Comida' con sus precios", async () => {
    render(
      <foodItemsContext.Provider value={mockMenuItems}>
        <App />
      </foodItemsContext.Provider>
    );
  
    // Simulamos hacer clic en "Pedir" del primer producto
    fireEvent.click(screen.getAllByText("Pedir")[0]);
  
    // Esperamos a que los productos estén visibles y los precios carguen
    await waitFor(() => {
      mockMenuItems.forEach((item) => {
        // Verificar que el nombre del producto está presente
        expect(screen.getByText(item.name)).toBeInTheDocument();
  
        // Verificar el precio del producto con la expresión regular
        expect(
          screen.getByText(new RegExp(`Precio:\\s*${item.price}\\s?\\$\\s?/ unidad`, 'i'))
        ).toBeInTheDocument();
      });
    });
  
    // Verificar que hay exactamente 4 imágenes
    expect(screen.getAllByAltText(/.+/)).toHaveLength(4); // Todas las imágenes deben aparecer
  });
  
  
*/

  it("actualiza correctamente el precio total para una cantidad introducida", () => {
    render(
      <foodItemsContext.Provider value={mockMenuItems}>
        <App />
      </foodItemsContext.Provider>
    );

    // Simular hacer clic en "Pedir" del primer producto
    fireEvent.click(screen.getAllByText("Pedir")[0]);

    // Cambiar la cantidad en el formulario de pedido
    const quantityInput = screen.getByLabelText("Cantidad:");
    fireEvent.change(quantityInput, { target: { value: "3" } });

    // Verificar que el precio total se actualiza correctamente
    const totalPrice = mockMenuItems[0].price * 3;
    expect(screen.getByText(`Total: ${totalPrice}$`)).toBeInTheDocument();
  });
});
  
  
  

