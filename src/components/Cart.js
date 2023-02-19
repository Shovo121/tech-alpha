import { currencyFormatter } from "../utilities/currencyFormatter"

const Cart = ({ product }) => {
  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden  hover:shadow-2xl">
      <div className="img h-80 overflow-hidden flex justify-center items-center">
        <img src={product.image} alt={product.name} className="w-full block"/>
      </div>
      <div className="product-text p-5 flex flex-col">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-teal-500 mb-2">{product.category}</span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medum text-rose-500">{currencyFormatter(product.price)}</span>
          <button className="uppercase bg-violet-500 text-violet-50 font-medium py-3 px-8 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-orange-300">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart