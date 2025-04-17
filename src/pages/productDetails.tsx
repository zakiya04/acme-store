import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addToCart } from '../redux/cartSlice';

const Details: React.FC = () => {

  const dispatch:AppDispatch = useDispatch()

  const { state } = useLocation();
  const product = state?.product;

  function handleClick(){
    dispatch(addToCart(product))
  }
  return (
    <div className="bg-pink-500 w-[95%] h-[600px] m-auto flex flex-row items-center justify-center">
      <div className=" w-[70%] h-[90%] flex items-center justify-center">
        <div className="h-[95%] w-[95%]">
        <img src={product.image} className="w-full h-full object-cover" ></img>
        </div>
        
      </div>
      <div className="bg-yellow-400 h-full text-white w-[40%]">
        <div >
          <h1 className="text-4xl font-bold p-2 ">{product.title}</h1>
          <p className="text-large font-light tracking-wide">{product.description}</p>
          <div>${product.price} USD</div>
        </div>
        <hr></hr>
        <button onClick={handleClick}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Details;
