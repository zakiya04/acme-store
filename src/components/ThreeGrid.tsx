import React from "react";
import { useProducts } from "../hooks/useApi";
import ProductCart from "./ProductCart";

const ThreeGrid: React.FC = () => {
  const { products ,loading} = useProducts();
  const top3 = products.slice(0, 3);
  if (loading) {
    return <div className="text-white">Loading...</div>; 
  }
  return (
    <div className="p-5  h-[450px] flex items-center justify-between w-full rounded ">
      <div className="h-full  w-[70%]">
        <ProductCart product={top3[0]} className="h-full"/>
      </div>
      <div className="h-full  flex flex-col w-[29%] gap-2">
       <ProductCart product={top3[1]} className="h-[50%]"/>
       <ProductCart product={top3[2]} className="h-[50%]"/>
      </div>
    </div>
  );
};
export default ThreeGrid
