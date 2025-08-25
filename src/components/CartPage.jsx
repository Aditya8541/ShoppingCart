import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPageCard from "./CartPageCard";
const Cart = () => {
    const items = useSelector((store) => store.cart.items)
    const price = useSelector((store) => store.cart.totalPrice)
    console.log(items)
    return(
        <>

        {
            (items.length) > 0 ? 

            <div className="flex flex-col mx-auto w-[70%] pb-10 mt-10 shadow-2xl px-10">
           <p className="text-2xl font-semibold">Your Cart</p>
           {

            items.map((value , index)=>{
                return <CartPageCard data={value} key={index}/>
            })

           }
        <p className="text-xl font-semibold flex justify-end mt-2">Total : ${price.toFixed(2)}</p>
        <Link to={'/'} className="mt-5">
            <button className="cursor-pointer  text-center w-[100%] h-13 sm:h-11 bg-orange-400 text-white rounded-md sm:text-lg hover:bg-orange-500 font-semibold ">Back to shopping</button>
        </Link>  
            
            
            
        </div>   : 
         <div className="flex flex-col mx-auto w-[80%] sm:w-[70%] pb-10 mt-10 shadow-2xl px-10">
           <p className="text-2xl font-semibold">Your Cart is Empty</p>
           
           
        <Link to={'/'} className="mt-5">
            <button className="cursor-pointer  text-center w-[100%] h-13 sm:h-11 bg-orange-400 text-white rounded-md sm:text-lg hover:bg-orange-500 font-semibold ">Back to shopping</button>
        </Link>  
        </div>
        
    }
    </>
        
    )
}

export default Cart;