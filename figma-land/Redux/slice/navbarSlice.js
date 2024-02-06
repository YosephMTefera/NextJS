import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const navbarSlice = createSlice({
  name: "NAVBAR",
  initialState,
  reducers: {
    setIsOpened: (state, action) => {
      state.isOpened = action.payload;
    },
  },
});

export const navbarAction = navbarSlice.actions;

export default navbarSlice;
