import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/cartSlice";
import toast from "react-hot-toast";
const Card = (props) => {

    const dispatch = useDispatch();
    const handleaddtocart = (data) => {
        dispatch(addtocart(data))
        toast.success(`${data.title.slice(0 , 19)}... added to cart 🛒`, {
        style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
    }
    return(
        <div className="flex flex-col  items-center pb-5  w-70 rounded-md  shadow-xl gap-1 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={props.data.image} alt="" className="h-40 w-35 " />
            <p className="font-semibold mt-2 text-lg">{(props.data.title.length > 20) ? `${props.data.title.slice(0,19)}...`  : `${props.data.title}`}</p>
            <p className="font-semibold">Price : ${props.data.price}</p>
            <button className="cursor-pointer mt-2 px-3 py-2 bg-orange-400 text-white rounded-md font-semibold" onClick={() =>handleaddtocart(props.data)}>Add to Cart</button>
        </div>
    )
}

export default Card;