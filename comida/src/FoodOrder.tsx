import { useState, useEffect, MouseEventHandler, useContext } from "react";
import { MenuItem } from "./entities/entities";
import { foodItemsContext } from "./App";
import { database } from "./firebase";
import { ref, onValue, push, update, remove } from "firebase/database";
import logger from './services/logging';

interface FoodOrderProps {
  food: MenuItem;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement>;
}

function FoodOrder({ food, onReturnToMenu }: FoodOrderProps) {
  const [quantity, setQuantity] = useState(1);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para controlar la carga
  const [items, setItems] = useState<MenuItem[]>([]);
  const menuItems: MenuItem[] = useContext(foodItemsContext) || [];

  const totalPrice = food.price * quantity;

  useEffect(() => {
    const itemsRef = ref(database, "items");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const formattedData = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...(value as any) }))
        : [];
      setItems(formattedData);
      logger.info("Datos obtenidos de Firebase");
    });

    return () => {
      logger.info("Listener limpiado cuando el componente se desmontó");
    };
  }, []);

  const updateItem = async (id: number, newName: string) => {
    logger.info(`Intentando actualizar el ítem ${id}`);
    setIsLoading(true); // Activar estado de carga
    try {
      const itemRef = ref(database, `items/${id}`);
      await update(itemRef, {
        name: newName,
        quantity: food.quantity,
      });
      logger.info(`Ítem ${id} actualizado con éxito`);
    } catch (error) {
      logger.error(`Error al actualizar el ítem ${id}: ${error}`);
    } finally {
      setIsLoading(false); // Desactivar estado de carga
    }
  };

  const deleteItem = async (id: number) => {
    logger.info(`Intentando eliminar el ítem ${id}`);
    setIsLoading(true); // Activar estado de carga
    try {
      const itemRef = ref(database, `items/${id}`);
      await remove(itemRef);
      logger.info("Ítem eliminado con éxito");
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      logger.error(`Error al eliminar el ítem ${id}: ${error}`);
    } finally {
      setIsLoading(false); // Desactivar estado de carga
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    logger.info(`Cantidad cambiada a: ${newQuantity}`);
    setQuantity(newQuantity);
  };

  const handlePlaceOrder = async () => {
    setIsLoading(true); // Activar estado de carga
  
    try {
      logger.info(`Realizando pedido por ${quantity} de ${food.name}`);
      setIsOrderPlaced(true);
  
      const updatedItems = menuItems.map((item: MenuItem) => {
        if (item.id === food.id) {
          item.quantity = item.quantity - quantity;
        }
        return item;
      });
      setItems(updatedItems);
  
      const newOrder = {
        foodName: food.name,
        price: food.price,
        quantity: quantity,
        totalPrice: totalPrice,
        timestamp: Date.now(),
      };
  
      const ordersRef = ref(database, "orders");
      await push(ordersRef, newOrder);
      logger.info("Nuevo pedido enviado a Firebase");
  
      await updateItem(food.id, food.name); // Actualizar stock en la base de datos
    } catch (error) {
      logger.error("Error al enviar el pedido:"+ error);
    } finally {
      // Asegurar que el mensaje se muestra al menos 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));
      //setIsLoading(false); // Desactivar estado de carga después del tiempo mínimo
    }
  };
  

  const handleBackToMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    logger.info("Volviendo al menú");
    setIsOrderPlaced(false);
    if (onReturnToMenu) onReturnToMenu(event);
  };

  const handleDeleteItem = (id: number) => {
    logger.warn(`Eliminando el ítem ${id} del menú`);
    deleteItem(id);
  };

  return (
    <div className="foodOrder">
      <h4 className="foodOrderTitle">{food.name}</h4>
      <img
        className="foodImg"
        src={`/dist/img/${food.image}`}
        alt={food.name}
      />
  
      {isLoading ? (
        <div className="loadingMessage">
          {/* Texto de carga */}
          <p style={{ color: "blue", fontWeight: "bold" }}>
            Cargando... Por favor espera.
          </p>
          {/* Spinner opcional */}
          <div className="spinner" style={{
            width: "40px",
            height: "40px",
            border: "4px solid #ccc",
            borderTop: "4px solid #007bff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}></div>
        </div>
      ) : !isOrderPlaced ? (
        <>
          <p className="foodDesc">{food.desc}</p>
          <p className="foodPrice">Precio: {food.price}$ / unidad</p>
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
          <button onClick={() => handleDeleteItem(food.id)}>Eliminar Ítem</button>
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
