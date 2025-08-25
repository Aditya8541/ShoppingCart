import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const items = useSelector((store)=> (store.cart.items))
    return(
        <div className="flex justify-between items-center  pl-10 sm:pl-20 pr-10 bg-gray-700 h-22 w-full text-white">
            <p className=" text-lg  sm:text-2xl font-semibold">Shopping Cart</p>
            <div className="flex  gap-10 sm:gap-15 sm:text-xl   sm:pr-20">
                <p className="cursor-pointer hover:text-orange-400">Home</p>
               <Link to={'/cart'}><p className="cursor-pointer font-semibold hover:text-orange-400">Cart {items.length > 0 && `(${items.length})`}</p></Link> 
            </div>
        </div>
    )
}

export default Header;