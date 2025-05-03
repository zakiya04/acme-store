import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cartSlice";
import { Button } from "@/components/ui/button";
import { ProductItem } from "@/hooks/useApi";

const Details: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const [product,setProduct] = useState< ProductItem | null>(null)
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json()
      setProduct(data)
     
    };
    getProduct()
  }, [id]);
  if(!product) return <div className="bg-white">Loading...</div>
  
  function handleClick() {
    console.log('Button clicked')
    if (product){
      dispatch(addToCart({product : product, qty:1}));
      console.log('Dispatch Completed!')
    }

  }
 
  return (
    <div className="bg-pink-500 w-[95%] h-[600px] m-auto flex flex-row items-center justify-center">
      <div className=" w-[70%] h-[90%] flex items-center justify-center">
        <div className="h-[95%] w-[95%]">
          <img src={product.image} className="w-full h-full object-cover"></img>
        </div>
      </div>
      <div className="bg-yellow-400 h-full text-white w-[40%]">
        <div>
          <h1 className="text-4xl font-bold p-2 ">{product.title}</h1>
          <p className="text-large font-light tracking-wide">
            {product.description}
          </p>
          <div>${product.price} USD</div>
        </div>
        <hr></hr>
        <Button onClick={handleClick}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default Details;
