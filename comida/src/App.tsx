import { useSelector, useDispatch } from 'react-redux';
import { selectFood, returnToMenu } from './store';
import { RootState } from './store';
import FoodOrder from './FoodOrder';
import ErrorBoundary from './services/ErrorBoundary';

function App() {
  const { menuItems, selectedFood, isChooseFoodPage } = useSelector((state: RootState) => state.food);
  const dispatch = useDispatch();

  return (
    <ErrorBoundary>
      <div className="App">
        <button
          className="toggleButton"
          onClick={() => dispatch(isChooseFoodPage ? returnToMenu() : selectFood(menuItems[0]))}
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
                  <button onClick={() => dispatch(selectFood(item))}>Pedir</button>
                </li>
              ))}
            </ul>
          </>
        )}

        {isChooseFoodPage && selectedFood && (
          <FoodOrder food={selectedFood} onReturnToMenu={() => dispatch(returnToMenu())} />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;