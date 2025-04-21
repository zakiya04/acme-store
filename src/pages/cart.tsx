import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { addToCart, removeFromCart,toggleCart} from "../redux/cartSlice";
import { CartItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch:AppDispatch= useDispatch();

  const addItem = (item:CartItem)=>{
    dispatch(addToCart(item))
  }
  const removeItem = (item:CartItem)=>{
    dispatch(removeFromCart(item))
  }
  const closeCart = ()=>{
    dispatch(toggleCart())
  }
  return (
    <>
      {cart && (
        <div className="p-2 border-l-[0.5px] border-gray-600 w-full m-2 h-full bg-amber-400 ">
          <div className="flex items-center justify-between">
            <h1 className="">My Cart</h1>
            <div onClick={closeCart} className="cursor-pointer">
            <RiCloseLargeFill />
            </div>
          </div>
          <div className="py-4 flex flex-col h-[95%]">
            <div className="h-[70%] bg-blue-400 w-full flex-grow">
              {cart.map((item) => (
                <div className="flex items-center m-3">
                  <div>
                  <RiCloseLargeFill />
                  </div>
                  <div className="flex items-center">
                    <img src={item.image} className="w-[100px] h-[100px]"></img>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <p>${item.price} USD</p>
                    <div className="flex items-center justify-between">
                      <button onClick={()=>removeItem(item)}>-</button>
                      <p>{item.qty}</p>
                      <button onClick={()=>addItem(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-pink-300">
              <div className="flex items-center justify-between  w-full px-3 py-2">
                <p>Taxes</p>
                <p>$0.00 USD</p>
              </div>
              <hr className="w-full" />
              <div className="flex items-center justify-between  w-full px-3 py-2">
                <p>Shipping</p>
                <p>Calculated at checkout</p>
              </div>
              <hr className="w-full" />
              <div className="flex items-center justify-between w-full px-3 py-2">
                <p>Total</p>
                <p></p>
              </div>
              <hr className="w-full" />
            </div>
          </div>
          <Link to="/product:id"></Link>
        </div>
      )}
    </>
  );
};

export default Cart;
