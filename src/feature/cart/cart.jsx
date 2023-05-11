import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../../cartItems";

const initialState = {
  cartItem: CartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
