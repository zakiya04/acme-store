import React from "react";
import Products from "./components/products";
import Details from "./pages/productDetails";
import Home from "./pages/home";
import Cart from "./pages/cart";
import {Toaster} from 'react-hot-toast'
import { Routes, Route } from "react-router-dom";
import Related from './components/Related'

const App: React.FC = () => {
  
  return (
    <>
    <Toaster/>
    <Routes>
    <Route path="/" element={<Home/>} /> 
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Details/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/category/:catName' element={<Related/>}/>
    </Routes>
    </> 

  )
};

export default App;
