import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getSubTotal, removeFromCart } from "../features/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter"

const Cart = () => {
  const {cartItems: data, cartTotalAmount: subtotal} = useSelector(state => state.carts);
  const dispatch = useDispatch();

  const handleRemove = product =>{
    dispatch(removeFromCart(product));
  }
  const decreaseHandle = product =>{
    dispatch(decreaseCart(product));
  };
  const increaseHandle = product => {
    dispatch(addToCart(product))
  }
  
  useEffect(()=>{
    dispatch(getSubTotal());
  },[data, dispatch])
 
  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section text-center font-semibold space-font text-2xl mb-10 uppercase">
        {
          data.length > 0 ? `You've added ${data.length} item${data.length > 1 ? "s" : ''} ` : "Your cart is empty"
        }
      </h2>
      <div className="text-center">
        {
          data.length === 0 && (
          <Link to="/Products" className="text-center cursor-pointer text-sky-500 uppercase font-bold">
            start shopping now
          </Link>
          )
        }
      </div>
      {
        data.length > 0 && (
          <>
            <div className="cart-container">
              <div className="product-headlines grid grid-cols-5 gap-10 border-b uppercase font-medium">
                <div className="col-product col-span-2">Product</div>
                <div className="col-unit-price">Unit Price</div>
                <div className="col-quantity">Quantity</div>
                <div className="col-total-price ml-auto">Total Pice</div>
              </div>
              <div className="products flex flex-col mt-10">
                {
                  data.map(product =>(
                    <div key={product.id} className="product grid grid-cols-5 border-b pb-5 mb-5">
                      <div className="left flex col-span-2 gap-5">
                        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover"/>
                        <div className="details flex flex-col gap-1 items-start lg:gap-5">
                          <span>{product.name}</span>
                          <button onClick={()=> handleRemove(product)} className="uppercase text-gray-400 hover:text-rose-400 duration-300">Remove</button>
                        </div>
                      </div>  
                      <div className="unit-price">
                        {currencyFormatter(product.price)}
                      </div>
                      <div className="counter flex">
                        <button onClick={()=>decreaseHandle(product)} className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700">-</button>
                        <span className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 flex justify-center items-center">{
                          product.cartQuantity
                        }</span>
                        <button onClick={()=>increaseHandle(product)} className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700">+</button>
                      </div>
                      <div className="total-price ml-auto">
                      {currencyFormatter(product.price * product.cartQuantity)}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="cart-lower flex justify-between items-start py-5">
              <button onClick={()=>dispatch(clearCart())} className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium hover:border-rose-200 duration-300">Clear cart</button>
              <div className="lower-right flex flex-col gap-3 items-start">
                <div className="top flex justify-between w-full text-2xl font-medium">
                  <span className="text-sky-500">Subtotal</span>
                  <span className="text-rose-500">{currencyFormatter(subtotal)}</span>
                </div>  
                <p className="text-gray-400">Taxes and shipping costs are calculated at the checkout</p>
                <button className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300">Checkout</button>
                <Link to="/products" className="continue uppercase text-sky-500 font-medium ">Continue Shopping</Link>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Cart