import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://fakestoreapi.com";

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingle",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/products/${id}`);

      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
