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
    color: "",
    size: "",
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
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },

    toggleCartItemQuantity: (state, action) => {
      const { id, value } = action.payload;
      const index = state.cartItems.findIndex((product) => product.id === id);
      const itemToUpdate = state.cartItems[index];
      console.log(itemToUpdate.attributes.price);

      if (value === "inc") {
        state.cartItems[index] = {
          ...itemToUpdate,
          quantity: itemToUpdate.quantity + 1,
        };
        state.totalPrice += itemToUpdate.attributes.price;
        state.totalQuantities += 1;
      } else if (value === "dec") {
        if (itemToUpdate.quantity > 1) {
          state.cartItems[index] = {
            ...itemToUpdate,
            quantity: itemToUpdate.quantity - 1,
          };
          state.totalPrice -= itemToUpdate.attributes.price;
          state.totalQuantities -= 1;
        }
      }
    },
    onAdd: (state, action) => {
      const { product, quantity, color, size } = action.payload;
      const isAlreadyInCart = state.cartItems.some(
        (item) =>
          item.id === product.id && item.color === color && item.size === size
      );

      if (isAlreadyInCart) {
        state.showCart = true;
        return state;
      }

      const newCartItem = {
        ...product,
        quantity,
        color,
        size,
      };

      state.totalPrice += product.attributes.price * quantity;
      state.totalQuantities += quantity;
      state.cartItems.push(newCartItem);
    },

    onRemove: (state, action) => {
      const { product } = action.payload;
      const foundProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== product.id
      );

      state.totalPrice -= foundProduct.attributes.price * foundProduct.quantity;
      state.totalQuantities -= foundProduct.quantity;
      state.cartItems = newCartItems;
    },
  },
});

export const {
  setSize,
  setColor,
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
