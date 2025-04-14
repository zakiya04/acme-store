import React from 'react';
import {useProducts} from '../hooks/useApi';
import Product from './product';

const Products: React.FC = () => {
  const {products} = useProducts()
  return (
    <div className='grid gap-4 grid-cols-3 w-[75%] m-auto p-4'>
      {products.map(product => (
        <div key={product.id}>
          <Product product={product}/>
          </div>
      ))}
    </div>
  )
}

export default Products;
