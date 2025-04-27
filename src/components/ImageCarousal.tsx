import React from "react";
import { useProducts } from "../hooks/useApi";
import ProductCart from "./ProductCart";

const Carousal: React.FC = () => {
  const { products } = useProducts();
  const required = products.slice(2, 16);
  return (
    <div className=" min-w-screen h-[200px] flex items-center justify-center mt-2 gap-6 overflow-x-auto">
      {required.map((item) => (
        <div
          key={item.id}
          className=" w-[300px] h-[90%] flex-shrink-0 flex justify-center bg-white items-center border-[0.5px] border-gray-600 rounded-2xl flex-col"
        >
          <ProductCart product={item} />
        </div>
      ))}
    </div>
  );
};

export default Carousal;

