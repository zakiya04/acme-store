import React from "react";
import Products from "./components/products";
import Details from "./pages/productDetails";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { Routes, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  
  return (
    <>
    <Home/>
    <Link to='/products' className="bg-white p-4 hover:bg-gray-500">Go to Products</Link>
    <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Details/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </> 

  )
};

export default App;
