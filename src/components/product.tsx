import React from 'react'
import { Link } from 'react-router-dom';
import { Product } from '../hooks/useApi';

type Props = {
  product : Product
}
const Product: React.FC <Props> = (product) => {
  return (
    <div>
      <Link to='/hi'>
        <div>
            <img></img>
        </div>
        <div>
            <p></p>
            <button></button>
        </div>
      </Link>
    </div>
  )
}

export default Product
