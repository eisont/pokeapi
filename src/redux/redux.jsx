import { configureStore, createSlice } from '@reduxjs/toolkit';

export const PokemonListSlice = createSlice({
  name: 'pokeapi',
  initialState: [],
  reducers: {
    GetItemListData(_, action) {
      return action.payload.map((el) => ({ id: el.id, name: el.names[2].name, select: false }));
    },
    favoritesList(state, action) {
      return state.map((el) => (el.name === action.payload ? { ...el, select: !el.select } : el));
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const store = configureStore({
  reducer: {
    ItemListData: PokemonListSlice.reducer,
  },
});
