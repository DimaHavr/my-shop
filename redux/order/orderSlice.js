import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderId: null,
  },
  reducers: {
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
  },
});

export const { setOrderId } = orderSlice.actions;

const persistConfig = {
  key: "order",
  storage,
};

export const persistedOrderSlice = persistReducer(
  persistConfig,
  orderSlice.reducer
);
