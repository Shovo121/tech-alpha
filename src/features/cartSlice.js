import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalAmount: 0,
};
export const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addToCart(state, action){
      //check if the item is already in the cart
      const existedItem = state.cartItems.findIndex(item => item.id === action.payload.id);

      //if exist
      if(existedItem >= 0){
        //in crease quantity
        state.cartItems[existedItem].cartQuantity += 1;
        toast.info('Quantity incresed!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }else{
        //add to cart
        const assembledItem = {...action.payload, cartQuantity : 1};
        state.cartItems.push(assembledItem);

        toast.success('Product added info cart!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      };
      //add to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action){
      const removeItem = state.cartItems.filter(item => item.id !== action.payload.id);
      state.cartItems = removeItem;
      toast.warn('Product removed from cart!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action){
      state.cartItems = [];
      toast.error('Cart cleared!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action){
      const existedItem = state.cartItems.findIndex(item => item.id === action.payload.id);

      if(state.cartItems[existedItem].cartQuantity > 1){
        state.cartItems[existedItem].cartQuantity -= 1;
        toast.info('Quantity decresed!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }else if(state.cartItems[existedItem].cartQuantity === 1){
        const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        state.cartItems = updatedCartItems;
        toast.warn('Product removed from cart!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getSubTotal(state, action){
      const subtotal = state.cartItems.reduce((acc, item)=>{
        const { price, cartQuantity } = item;
        const totalPrice = price * cartQuantity;
        acc += totalPrice;

        return acc;
      }, 0);

      state.cartTotalAmount = subtotal;
    }
  },
});

export const {addToCart, removeFromCart, clearCart, decreaseCart, getSubTotal, } = cartsSlice.actions;
export default cartsSlice.reducer;