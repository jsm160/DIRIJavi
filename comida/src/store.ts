import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuItem } from './entities/entities';

interface FoodState {
  menuItems: MenuItem[];
  selectedFood: MenuItem | null;
  isChooseFoodPage: boolean;
}

const initialState: FoodState = {
  menuItems: [
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
  ],
  selectedFood: null,
  isChooseFoodPage: false,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.menuItems = action.payload;
    },
    selectFood: (state, action: PayloadAction<MenuItem>) => {
      state.selectedFood = action.payload;
      state.isChooseFoodPage = true;
    },
    returnToMenu: (state) => {
      state.isChooseFoodPage = false;
      state.selectedFood = null;
    },
    updateFoodQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.menuItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.menuItems[itemIndex].quantity = quantity;
      }
    },
  },
});

export const { setMenuItems, selectFood, returnToMenu, updateFoodQuantity } = foodSlice.actions;

export const store = configureStore({
  reducer: {
    food: foodSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;