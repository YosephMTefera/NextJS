import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./slice/navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice.reducer,
  },
});
