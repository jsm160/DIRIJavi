import { useState, useEffect, MouseEventHandler, useContext } from "react";
import { MenuItem } from "./entities/entities";
import { foodItemsContext } from "./App";
import { database } from "./firebase"; // Asegúrate de importar la configuración de Firebase correctamente
import { ref, onValue, push, update, remove } from "firebase/database";
import logger from './services/logging'; // Importamos el logger

interface FoodOrderProps {
  food: MenuItem;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement>;
}

function FoodOrder({ food, onReturnToMenu }: FoodOrderProps) {
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Estado para mostrar el mensaje de confirmación
  const [items, setItems] = useState<MenuItem[]>([]); // Estado para los ítems

  // Calcular el precio total
  const totalPrice = food.price * quantity;
  const menuItems: MenuItem[] = useContext(foodItemsContext) || []; // Obtener el contexto o el estado local si es necesario

  // Escuchar los cambios en tiempo real de los ítems en la base de datos
  useEffect(() => {
    const itemsRef = ref(database, "items"); // Referencia a la ruta "items" en Firebase
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val(); // Obtener los datos del snapshot
      const formattedData = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...(value as any) }))
        : [];
      setItems(formattedData); // Actualizar el estado con los datos obtenidos
      logger.info('Datos obtenidos de Firebase'); // Log de información
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      // Esto es opcional, Firebase generalmente maneja la limpieza de listeners automáticamente.
      logger.info('Listener limpiado cuando el componente se desmontó');
    };
  }, []); // Este effect se ejecuta una sola vez al montar el componente

  // Función para actualizar un ítem en Firebase
  const updateItem = async (id: number, newName: string) => {
    logger.info(`Intentando actualizar el ítem ${id} con nuevo nombre: ${newName} y nueva cantidad: ${food.quantity}`);
    try {
      const itemRef = ref(database, `items/${id}`);
      await update(itemRef, { 
        name: newName, 
        quantity: food.quantity
      });
      logger.info(`Ítem ${id} actualizado con éxito`);
    } catch (error) {
      logger.error(`Error al actualizar el ítem ${id}:`);
    }
  };

  // Función para eliminar un ítem en Firebase
  const deleteItem = async (id: number) => {
    logger.info(`Intentando eliminar el ítem ${id}`);
    try {
      const itemRef = ref(database, `items/${id}`);
      await remove(itemRef); // Eliminar el nodo del ítem en Firebase
      logger.info('Ítem eliminado con éxito');
    } catch (error) {
      logger.error(`Error al eliminar el ítem ${id}:`);
    }
  };

  // Maneja el cambio de cantidad
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    logger.info(`Cantidad cambiada a: ${newQuantity}`);
    setQuantity(newQuantity);
  };

  // Maneja la acción de enviar el pedido
  const handlePlaceOrder = () => {
    logger.info(`Realizando pedido por ${quantity} de ${food.name}`);
    setIsOrderPlaced(true);

    // Actualizar el stock local de los ítems (también puedes actualizar la base de datos aquí)
    const updatedItems = menuItems.map((item: MenuItem) => {
      if (item.id === food.id) {
        item.quantity = item.quantity - quantity; // Reducir el stock local
      }
      return item;
    });

    // Actualizar el estado de items después de la reducción del stock
    setItems(updatedItems);

    // Enviar el pedido a Firebase si es necesario
    const newOrder = {
      foodName: food.name,
      price: food.price,
      quantity: quantity,
      totalPrice: totalPrice,
      timestamp: Date.now(),
    };

    // Guardar el pedido en Firebase
    const ordersRef = ref(database, "orders");
    push(ordersRef, newOrder);
    logger.info('Nuevo pedido enviado a Firebase');

    // Actualizar el stock en la base de datos utilizando la función `updateItem`
    updateItem(food.id, food.name); // Llamada para actualizar el ítem
  };

  // Maneja el retorno al menú
  const handleBackToMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    logger.info('Volviendo al menú');
    setIsOrderPlaced(false); // Ocultar el mensaje de confirmación
    if (onReturnToMenu) onReturnToMenu(event); // Llamar al handler de retorno al menú
  };

  // Función para manejar la eliminación de un ítem
  const handleDeleteItem = (id: number) => {
    logger.warn(`Eliminando el ítem ${id} del menú`);
    deleteItem(id); // Eliminar el ítem de Firebase
    setItems(items.filter(item => item.id !== id)); // Eliminar el ítem del estado local
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
          <button onClick={() => handleDeleteItem(food.id)}>Eliminar Ítem</button> {/* Botón para eliminar el ítem */}
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
