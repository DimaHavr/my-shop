import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    showFilter: false,
  },
  reducers: {
    setShowFilter: (state, action) => {
      state.showFilter = action.payload;
    },
  },
});

export const { setShowFilter } = filterSlice.actions;

const persistConfig = {
  key: "filter",
  storage,
};

export const persistedFilterSlice = persistReducer(
  persistConfig,
  filterSlice.reducer
);
