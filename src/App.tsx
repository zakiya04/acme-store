import React from "react";
import Products from "./components/products";
import Details from "./pages/productDetails";
import { Routes, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  
  return (
    <>
    <Link to='/products' className="bg-white p-4 hover:bg-gray-500">Go to Products</Link>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Details/>}/>
    </Routes>
    </> 
  )
};

export default App;
