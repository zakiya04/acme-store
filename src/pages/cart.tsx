import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { addToCart, removeFromCart,toggleCart} from "../redux/cartSlice";
import { CartItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = cart.reduce((total,item)=> total + (item.price * item.qty),0)
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)
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
  if(!isOpen) return null;
  return (
    <>
      {cart.length >= 1 ? (
        <div className="p-2 border-l-[0.5px] border-gray-600 w-[500px] m-2 bg-black text-white h-[630px] fixed top-0 right-0 z-40">
          <div className="flex items-center justify-between px-2 py-3 text-white font-semibold text-2xl">
            <h1 className="">My Cart</h1>
            <div onClick={closeCart} className="cursor-pointer">
            <RiCloseLargeFill />
            </div>
          </div>
          <div className="py-4 flex flex-col h-[95%]">
            <div className="h-[70%] w-full flex-grow">
              {cart.map((item) => (
                <div className="flex items-center m-3" key={item.id}>
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
            <div className="flex flex-col items-center justify-center p-4 ">
              <div className="flex items-center justify-between  w-full px-3 py-2">
                <p className="text-gray-400">Taxes</p>
                <p>$0.00 USD</p>
              </div>
              <hr className="w-full" />
              <div className="flex items-center justify-between  w-full px-3 py-2">
                <p className="text-gray-400">Shipping</p>
                <p className="text-gray-400">Calculated at checkout</p>
              </div>
              <hr className="w-full" />
              <div className="flex items-center justify-between w-full px-3 py-2">
                <p className="text-gray-400">Total</p>
                <p>${totalPrice} USD</p>
              </div>
              <hr className="w-full" />
            </div>
          </div>
          <Link to="/product:id"></Link>
        </div>
      ): <div className="text-white">
        Your Cart Is Empty
        </div>}
    </>
  );
};

export default Cart;
