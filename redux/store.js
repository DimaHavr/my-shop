import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { persistedCartSlice } from "../redux/cart/cartSlice";
import { persistedFilterSlice } from "../redux/filter/filterSlice";
import { persistedFavoritesSlice } from "../redux/favorites/favoritesSlice";
import { persistedSortSlice } from "./sort/sortSlice";

export const store = configureStore({
  reducer: {
    cart: persistedCartSlice,
    filter: persistedFilterSlice,
    favorites: persistedFavoritesSlice,
    sort: persistedSortSlice,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
