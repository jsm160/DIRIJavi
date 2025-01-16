import { useState, MouseEventHandler, useContext } from "react";
import { MenuItem } from "./entities/entities";
import { foodItemsContext } from "./App";

interface FoodOrderProps {
  food: MenuItem;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement>;
}

function FoodOrder({ food, onReturnToMenu }: FoodOrderProps) {
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Estado para mostrar el mensaje de confirmación

  // Calcular el precio total
  const totalPrice = food.price * quantity;
  const menuItems: MenuItem[] = useContext(foodItemsContext); // Obtener el contexto

  // Maneja el cambio de cantidad
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
  };

  // Maneja la acción de enviar el pedido
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
 menuItems.map((item: MenuItem) => {
 if (item.id === food.id) {
 item.quantity = item.quantity - quantity;
 }
 }); 
  };

  // Maneja el retorno al menú
  const handleBackToMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOrderPlaced(false); // Ocultar el mensaje de confirmación
    if (onReturnToMenu) onReturnToMenu(event); // Llamar al handler de retorno al menú
  };

  return (
    <div className="foodOrder">
      <h4 className="foodOrderTitle">{food.name}</h4>

      {/* Mostrar la imagen del producto */}
      <img
        className="foodImg"
        src={`/img/${food.image}`} // Asegúrate de que esta ruta es correcta
        alt={food.name}
      />

      {!isOrderPlaced ? (
        <>
          <p className="foodDesc">{food.desc}</p>
          <p className="foodPrice">
            Precio: {food.price}$ / unidad
          </p>
          <label htmlFor="quantity">Cantidad: </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max={food.quantity}
          />
          <p>Total: {totalPrice}$</p>
          <button onClick={handlePlaceOrder}>Enviar Pedido</button>
        </>
      ) : (
        <div className="confirmationMessage">
          <p>¡Pedido enviado con éxito!</p>
          <p>Stock actualizado: {food.quantity} disponibles</p>
          <button onClick={handleBackToMenu}>Volver al Menú</button>
        </div>
      )}
    </div>
  );
}

export default FoodOrder;
