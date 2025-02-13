import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import  { store } from "../store"; // Importa el store de Redux
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

// Mock de los datos del menú
const mockMenuItems = [
  { id: 1, name: "Hamburguesa de Pollo", quantity: 40, price: 24, image: "cb.jpg", desc: "Hamburguesa de pollo frito - … y mayonesa" },
  { id: 2, name: "Hamburguesa Vegetariana", quantity: 30, price: 28, image: "cbvegan.jpg", desc: "Hamburguesa vegetariana - … y mayonesa" },
  { id: 3, name: "Patatas fritas", quantity: 33, price: 2, image: "papas.jpg", desc: "Patatas fritas - … y mayonesa" },
  { id: 4, name: "Helado", quantity: 22, price: 5, image: "helado.jpg", desc: "heladito" },
];

describe("Comida Rápida App", () => {
  it("muestra 4 productos en la carta inicial con stock, imagen y nombre", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      mockMenuItems.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByText(`#${item.quantity} disponibles`)).toBeInTheDocument();
      });
    });

    // Seleccionamos solo los botones "Pedir" dentro de la lista de productos
    const productList = screen.getByRole("list");
    const orderButtons = within(productList).getAllByRole("button", { name: /Pedir/ });

    expect(orderButtons).toHaveLength(4);
  });

  it("permite seleccionar un producto y muestra su información", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Simular clic en el botón "Pedir" del primer producto
    fireEvent.click(screen.getAllByText("Pedir")[0]);

    // Verificar que se muestra la información del producto seleccionado
    await waitFor(() => {
      expect(screen.getByText(mockMenuItems[0].name)).toBeInTheDocument();
    });
  });

  it("actualiza correctamente el precio total cuando se introduce una cantidad", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Simular clic en "Pedir" del primer producto
    fireEvent.click(screen.getAllByText("Pedir")[0]);

    // Esperar a que la pantalla de pedido se muestre
    await waitFor(() => {
      expect(screen.getByText(mockMenuItems[0].name)).toBeInTheDocument();
    });

    // Simular cambio en el input de cantidad
    const quantityInput = screen.getByLabelText(/Cantidad:/i);
    fireEvent.change(quantityInput, { target: { value: "3" } });

    // Verificar que el precio total se actualiza correctamente
    const totalPrice = mockMenuItems[0].price * 3;
    await waitFor(() => {
      expect(screen.getByText(`Total: ${totalPrice}$`)).toBeInTheDocument();
    });
  });
});
