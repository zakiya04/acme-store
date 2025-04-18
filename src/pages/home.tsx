import React from 'react'
import Header from "../components/header";
import Cart from "../pages/cart";

const Home: React.FC = () => {
  return (
    <div className='min-h-screen min-w-screen bg-orange-300 flex'>
      <div className="w-3/5 bg-amber-200 h-[100px]"> 
        <Header />
      </div>
      <div className="w-2/5 bg-pink-300 h-[100px] flex items-center justify-center"> 
        <Cart />
      </div>
    </div>
  )
}

export default Home
