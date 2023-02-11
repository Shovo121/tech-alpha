import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
const Navbar = () => {
  return (
    <div className="navbar-bg bg-violet-700 text-violet-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="left">
          <h3 className="uppercase text-xl font-semibold">tech<span className="text-orange-500">alpha</span></h3>
        </div>
        <div className="right flex items-center gap-5">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/products' className="nav-link">Products</Link>
          <Link to='/cart'>
            <span className="cart-icon relative"><FaShoppingCart />
            <span className="cart-counter absolute -top-3 -right-3 bg-orange-700 h-5 w-5 rounded-full flex items-center justify-center text-sm font-medium">10</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar