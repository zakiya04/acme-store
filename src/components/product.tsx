import React from 'react'
import { Link } from 'react-router-dom';
import { ProductItem } from '../hooks/useApi';

type Props = {
  product : ProductItem
}
const Product: React.FC <Props> = ({product}) => {
  return (
    <div className='border rounded-2xl border-gray-900 p-4 bg-gray-800' >
      <Link to='/products/'>
        <div>
            <img src={product.image} className='h-75 w-75'></img>
        </div>
        <div className='px-2 py-4 flex items-center justify-center gap-4'>
            <p className='truncate'>{product.title}</p>
            <button className='text-white '>${product.price}</button>
        </div>
      </Link>
    </div>
  )
}

export default Product
