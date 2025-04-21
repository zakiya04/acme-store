import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { addToCart, removeFromCart, toggleCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <>
      {cart && (
        <div className="p-2 border-l-[0.5px] w-full m-2 h-full bg-amber-400 ">
          <div className="flex items-center justify-between">
            <h1 className="">My Cart</h1>
            <div>
              <RiCloseLargeFill />
            </div>
          </div>
          <div className="py-4 flex flex-col h-[95%] ">
            <div className="h-[70%] bg-blue-400 w-full">
              {cart.map(item => (
                <div>{item.title}</div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-pink-300">
              <div className="flex items-center justify-between  w-full px-3 py-2">
                <p>Taxes</p>
                <p></p>
              </div>
              <hr className="w-full"/>
              <div className="flex items-center justify-between  w-full px-3 py-2">
                <p>Shipping</p>
                <p>Calculated at checkout</p>
              </div>
              <hr className="w-full"/>
              <div className="flex items-center justify-between w-full px-3 py-2">
                <p>Total</p>
                <p></p>
              </div>
              <hr className="w-full"/>
            </div>
          </div>
          <Link to="/product:id"></Link>
        </div>
      )}
    </>
  );
};

export default Cart;
