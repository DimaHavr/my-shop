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
import { persistedFilterSlice } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    cart: persistedCartSlice,
    filter: persistedFilterSlice,
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
