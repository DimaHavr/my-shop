import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    selectedSort: "",
    sortPrice: "",
    sortNew: "",
    sortPopular: "",
  },
  reducers: {
    setSortPrice: (state, action) => {
      state.sortPrice = action.payload;
    },
    setSortNew: (state, action) => {
      state.sortNew = action.payload;
    },
    setSortPopular: (state, action) => {
      state.sortPopular = action.payload;
    },
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
    },
  },
});

export const { setSortPrice, setSortNew, setSortPopular, setSelectedSort } =
  sortSlice.actions;

const persistConfig = {
  key: "sort",
  storage,
};

export const persistedSortSlice = persistReducer(
  persistConfig,
  sortSlice.reducer
);
