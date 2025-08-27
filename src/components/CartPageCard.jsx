import { removefromcart } from "../Redux/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updatecart } from "../Redux/cartSlice";
import toast from "react-hot-toast";
const CartPageCard = (props) => {
  const [inputvalue , setinputvalue] = useState(props.data.quantity)
  
    const dispatch = useDispatch();
    const handleupdate = (id , value) => {
        if(inputvalue <= 0)
        {
          alert("Quantity must be atleast 1");
          setinputvalue(props.data.quantity)
        }
        else if (inputvalue === props.data.quantity) {
    
      toast(`${props.data.title.slice(0 , 19)}... is already set to ${inputvalue} ⚡`, {
      icon: "ℹ️",
      style: {
        borderRadius: "10px",
        background: "#222",
        color: "#fff",
      },
    });
  }
        else{
        dispatch(updatecart({id ,value}));
          toast.success(`${props.data.title.slice(0 , 19)}... quantity updated to ${value}  🛒`, {
        style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
        }
    }
    const items = useSelector((state)=> state.cart.items)
    const tempItems = useSelector((state)=> state.cart.tempItems)
    const handleremove = (id) => {
        dispatch(removefromcart(id))
        toast.success(`${props.data.title.slice(0,19)}... removed from cart 🛒`, {
        style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
    }
  
  return (
    <div className="mt-5 flex sm:flex-row flex-col  sm:gap-8   border-b-1 border-gray-200 pb-4">
      <div className="h-30 w-30">
        <img src={props.data.image} alt="" className="h-full" />
      </div>
      <div className="mt-2 space-y-2 w-full">
        <p className="font-semibold text-xl ">{props.data.title}</p>
        <p className="text-lg">Price : ${props.data.price}</p>

        <div className="flex sm:flex-row flex-col gap-3 sm:gap-2">
          <input
            type="number"
            min={1}
            // value={tempItems.find((item)=>item.id === props.data.id)?.quantity || props.data.quantity}
            // onChange={(e) => handleupdate(props.data.id , parseInt(e.target.value))}
            value={inputvalue}
            onChange={(e) => setinputvalue(e.target.value)}
            className="h-7 w-15 mt-[2px] pl-2 rounded-sm border"
          />
          <button className="bg-orange-400  px-4 py-1 rounded-md text-gray-200 cursor-pointer hover:bg-orange-500" onClick={() => {
            handleupdate(props.data.id , inputvalue)
          }}>
            Update
          </button>
          <button
            className="bg-orange-400  px-4 py-1 rounded-md text-gray-200 hover:bg-orange-500 cursor-pointer"
            onClick={() => handleremove(props.data.id , inputvalue)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPageCard;
