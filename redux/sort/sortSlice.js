import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sortValue: "",
  },
  reducers: {
    setSortValue: (state, action) => {
      state.sortValue = action.payload;
    },
  },
});

export const { setSortValue } = sortSlice.actions;

const persistConfig = {
  key: "sort",
  storage,
};

export const persistedSortSlice = persistReducer(
  persistConfig,
  sortSlice.reducer
);
