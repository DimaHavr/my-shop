import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleProduct } from "./operations";
const productInitialState = {
  singleProduct: {},
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
