import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/cart";
import modalReducer from "./feature/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
