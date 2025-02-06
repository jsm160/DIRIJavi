import { useState, useEffect } from 'react';
import { MenuItem } from './entities/entities';
import { database } from './firebase';
import { ref, onValue, push, update, remove } from 'firebase/database';
import logger from './services/logging';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, updateFoodQuantity } from './store';

interface FoodOrderProps {
  food: MenuItem;
  onReturnToMenu: () => void;
}

function FoodOrder({ food, onReturnToMenu }: FoodOrderProps) {
  const dispatch = useDispatch();
  const menuItems = useSelector((state: RootState) => state.food.menuItems);
  const [items, setItems] = useState<MenuItem[]>(menuItems);
  const [quantity, setQuantity] = useState(1);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  const deleteItem = async (id: number) => {
    logger.info(`Intentando eliminar el ítem ${id}`);
    setIsLoading(true);
    try {
      const itemRef = ref(database, `items/${id}`);
      await remove(itemRef);
      logger.info("Ítem eliminado con éxito");
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      logger.error(`Error al eliminar el ítem ${id}: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    logger.info(`Cantidad cambiada a: ${newQuantity}`);
    setQuantity(newQuantity);
  };

  const handlePlaceOrder = async () => {
    setIsLoading(true);

    try {
      logger.info(`Realizando pedido por ${quantity} de ${food.name}`);
      setIsOrderPlaced(true);

      dispatch(updateFoodQuantity({ id: food.id, quantity: food.quantity - quantity }));

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

      await updateItem(food.id, food.name);
    } catch (error) {
      logger.error("Error al enviar el pedido:" + error);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false); // Desactivar el loading después del tiempo mínimo
    }
  };

  const handleBackToMenu = () => {
    logger.info("Volviendo al menú");
    setIsOrderPlaced(false);
    onReturnToMenu();
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
          <p style={{ color: "blue", fontWeight: "bold" }}>
            Cargando... Por favor espera.
          </p>
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
          <p>Stock actualizado: {food.quantity-quantity} disponibles</p>
          <button onClick={handleBackToMenu}>Volver al Menú</button>
        </div>
      )}
    </div>
  );
}

export default FoodOrder;