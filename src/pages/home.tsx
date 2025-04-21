import React from 'react'
import Header from "../components/header";
import Cart from "../pages/cart";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home: React.FC = () => {
  const showCart = useSelector((state:RootState)=> state.cart.isOpen)
  return (
    <div className=' min-w-screen flex'>
      <div className={`${showCart ? 'w-3/5':'w-full'} h-[100px]`}> 
        <Header />
      </div>
      {showCart &&(
        <div className="w-2/5 h-[600px] flex items-center justify-center "> 
        <Cart />
      </div>
      )}
    </div>
  )
}

export default Home
