import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartdata: [],
  cartTotalPrice: [],
  quantity: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_TO_CART: (state, action) => {
      state.cartdata.push(action.payload);
    },
    cart_total_price: (state, action) => {
      state.cartTotalPrice.push(action.payload);
    },
    qtt: (state, action) => {
      state.quantity = action.payload;
    },
    removeCartItem: (state, action) => {
      state.cartdata.splice(action.payload, 1);
    },
    cartTotal: (state, action) => {
      state.cartTotal += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_TO_CART, cart_total_price, qtt, removeCartItem, cartTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
