import React from 'react';
import {useProducts} from '../hooks/useApi';
import Product from './product';

const Products: React.FC = () => {
  const {products} = useProducts()
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <Product product={product}/>
          </div>
      ))}
    </div>
  )
}

export default Products;
