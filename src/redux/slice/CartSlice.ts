import { createSlice } from "@reduxjs/toolkit";

import { Product as IProduct } from "../../types/auth";

const initialState = {
    products: [] as IProduct[],
}; 

if (localStorage.getItem('cart')) {
  initialState.products = JSON.parse(localStorage.getItem('cart') || '[]');
} else {
  localStorage.setItem('cart', JSON.stringify(initialState.products));
  initialState.products = JSON.parse(localStorage.getItem('cart') || '[]');

  

}
  
  

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      
      if (index === -1) {
        state.products.push({ ...action.payload, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(state.products));
      } else {
        state.products[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state.products));
      }
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
       
      if (index !== -1) {
        if (state.products[index].quantity > 1) {
          state.products[index].quantity -= 1;
          localStorage.setItem('cart', JSON.stringify(state.products));
        } else {
          state.products = state.products.filter(product => product.id !== action.payload.id);
          localStorage.setItem('cart', JSON.stringify(state.products));
        }
      }
    },
    clearCartItem: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.products));
    }
  }
});

export const { addToCart, removeFromCart, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;