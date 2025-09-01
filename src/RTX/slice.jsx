import { createSlice } from '@reduxjs/toolkit';
import { fetchMultiplePokemonById } from './thunk';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      }) // 처리중일때
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      }) // 잘 처리 못할때
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }); // 잘 처리됨
  },
});

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    }, // redux tookit 기본기능 덕에 push를 사용해 원본을 건드려도 된다.
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
