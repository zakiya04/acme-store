import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItem } from "../hooks/useApi";
import Product from "./product";

const Related: React.FC = () => {
  const { catName } = useParams<{ catName: string }>();
  const [products, setProducts] = useState<ProductItem[]>([]);
  console.log(products)
  useEffect(() => {
    if (!catName) console.log('Category nhi aayi');
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((data: ProductItem[]) => setProducts(data));
  }, [catName]);
  return (
    <div className="grid gap-4 grid-cols-3 w-[85%] m-auto p-4">
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Related;
