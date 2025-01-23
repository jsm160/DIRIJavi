import { useState, useEffect, MouseEventHandler, useContext } from "react";
import { MenuItem } from "./entities/entities";
import { foodItemsContext } from "./App";
import { database } from "./firebase"; // Asegúrate de importar la configuración de Firebase correctamente
import { ref, onValue, push, update, remove } from "firebase/database";

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
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      // Esto es opcional, Firebase generalmente maneja la limpieza de listeners automáticamente.
    };
  }, []); // Este effect se ejecuta una sola vez al montar el componente

  // Función para actualizar un ítem en Firebase
  const updateItem = async (id: number, newName: string, newQuantity: number) => {
    const itemRef = ref(database, `items/${id}`);
    await update(itemRef, { 
      name: newName, // Puedes actualizar el nombre si lo deseas
      quantity: newQuantity // Actualizar la cantidad del ítem
    });
  };

  // Función para eliminar un ítem en Firebase
  const deleteItem = async (id: number) => {
    const itemRef = ref(database, `items/${id}`);
    await remove(itemRef); // Eliminar el nodo del ítem en Firebase
  };

  // Maneja el cambio de cantidad
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
  };

  // Maneja la acción de enviar el pedido
  const handlePlaceOrder = () => {
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

    // Actualizar el stock en la base de datos utilizando la función `updateItem`
    updateItem(food.id, food.name, food.quantity - quantity); // Llamada para actualizar el ítem
  };

  // Maneja el retorno al menú
  const handleBackToMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOrderPlaced(false); // Ocultar el mensaje de confirmación
    if (onReturnToMenu) onReturnToMenu(event); // Llamar al handler de retorno al menú
  };

  // Función para manejar la eliminación de un ítem
  const handleDeleteItem = (id: number) => {
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
