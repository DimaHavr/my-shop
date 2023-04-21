import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  favoriteProducts: [],
  totalProducts: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavoritesList: (state, action) => {
      const UpdateFavoriteList = { ...action.payload };
      state.favoriteProducts.push(UpdateFavoriteList);
      state.totalProducts += 1;
    },

    removeFavoritesList: (state, action) => {
      const updatedFavoritesList = state.favoriteProducts?.filter(
        (item) => item.id !== action.payload?.id
      );
      state.favoriteProducts = updatedFavoritesList;
      state.totalProducts -= 1;
    },

    clearFavoritesList: (state, action) => {
      state.favoriteProducts = [];
      state.totalProducts = 0;
    },
  },
});

export const { addToFavoritesList, removeFavoritesList, clearFavoritesList } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;

const persistConfig = {
  key: "favorites",
  storage,
};

export const persistedFavoritesSlice = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
