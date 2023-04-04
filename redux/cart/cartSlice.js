import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 0,
    qty: 1,
  },
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setTotalQuantities: (state, action) => {
      state.totalQuantities = action.payload;
    },
    setQty: (state, action) => {
      state.qty = action.payload;
    },
    incQty: (state) => {
      state.qty += 1;
    },
    decQty: (state) => {
      state.qty -= 1;
    },
    toggleCartItemQuantity: (state, action) => {
      const { id, value } = action.payload;
      const index = state.cartItems.findIndex((product) => product.id === id);
      const itemToUpdate = state.cartItems[index];

      if (value === "inc") {
        state.cartItems[index] = {
          ...itemToUpdate,
          quantity: itemToUpdate.quantity + 1,
        };
        state.totalPrice += itemToUpdate.price;
        state.totalQuantities += 1;
      } else if (value === "dec") {
        if (itemToUpdate.quantity > 1) {
          state.cartItems[index] = {
            ...itemToUpdate,
            quantity: itemToUpdate.quantity - 1,
          };
          state.totalPrice -= itemToUpdate.price;
          state.totalQuantities -= 1;
        }
      }
    },
    onAdd: (state, action) => {
      const { product, quantity } = action.payload;
      const isAlreadyInCart = state.cartItems.some(
        (item) => item.id === product.id
      );
      if (isAlreadyInCart) {
        state.showCart = true;
        return;
      }
      const checkProductInCart = state.cartItems.find(
        (item) => item.id === product.id
      );

      state.totalPrice += product.price * quantity;
      state.totalQuantities += quantity;

      if (checkProductInCart) {
        const updatedCartItems = state.cartItems.map((cartProduct) => {
          if (cartProduct.id === product.id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
        });

        state.cartItems = updatedCartItems;
      } else {
        product.quantity = quantity;
        state.cartItems.push({ ...product });
      }
    },
    onRemove: (state, action) => {
      const { product } = action.payload;
      const foundProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== product.id
      );

      state.totalPrice -= foundProduct.price * foundProduct.quantity;
      state.totalQuantities -= foundProduct.quantity;
      state.cartItems = newCartItems;
    },
  },
});

export const {
  setShowCart,
  setQty,
  incQty,
  decQty,
  onAdd,
  toggleCartItemQuantity,
  onRemove,
  setCartItems,
  setTotalPrice,
  setTotalQuantities,
} = cartSlice.actions;

const persistConfig = {
  key: "cart",
  storage,
};

export const persistedCartSlice = persistReducer(
  persistConfig,
  cartSlice.reducer
);