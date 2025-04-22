import React from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../hooks/useApi";

interface ProductProps{
    product: ProductItem;
    className?: string;
}

const ProductCart: React.FC<ProductProps> = ({product,className}) => {
  return (
    <div className={`text-white w-full rounded-xl relative ${className}`}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} className="h-full w-full rounded-xl"/>
        <div className="flex items-center justify-between border-[0.5px] bg-black rounded-4xl w-[250px] px-3 py-2 absolute top-5 left-3 opacity-[85%]">
          <p className="truncate">{product.title}</p>
          <div className="bg-blue-700 px-2 py-1 rounded-3xl">${product.price} USD</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
