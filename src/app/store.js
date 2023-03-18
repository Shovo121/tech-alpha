import { configureStore } from "@reduxjs/toolkit";
import productsReducer , { productFetching } from "../features/products/productSlice";
import cartsReducer from "../features/cartSlice";

export const store = configureStore({
  reducer:{
    //multiple reducers here....
    products: productsReducer,
    carts: cartsReducer,
  },
});

store.dispatch(productFetching());