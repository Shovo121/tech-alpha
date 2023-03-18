import { useSelector } from "react-redux"
import Cart from "../components/Cart"

const Products = () => {
  const {items:data, status} = useSelector(state=> state.products);
  return (
   <div className="products-section container mx-auto py-10">
     <h2 className="section text-center font-semibold space-font text-2xl mb-10 uppercase">
      Browse all products
     </h2>
     <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
      {
        status && <p className="col-span-full text-center">{status}</p>
      }
      {
        data.map(product => (
          <Cart key={product.id} product ={product}/>
        ))  
      }
     </div>
   </div>
  )
}

export default Products