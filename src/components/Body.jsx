import Card from "./Card";
import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    const [dataList , setdataList] = useState([]);
   
    

    useEffect(()=> {
        fetchdata();
    } , [])



    const fetchdata = async() => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json()
        setdataList(data)
        
    }

    if(dataList.length === 0)
    {
        return <div className="font-semibold text-2xl mt-5">
           <Shimmer/>
        </div>
    }

    return(
        <div className="flex flex-wrap gap-10 items-center justify-center space-y-5   w-[95%] mx-auto mt-20 mb-5 ">
            {dataList.map((value , index)=> {
                return <Card data={value} key={index}/>
            })}
            
        </div>
    )
}
export default Body;