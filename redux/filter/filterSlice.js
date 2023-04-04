import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
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
