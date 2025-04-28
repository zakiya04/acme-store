import React from 'react'
import { Link } from 'react-router-dom'

const Links:React.FC = () => {
  return (
    <div className='flex items-center justify-between text-white'>
      <Link to='/products/category/jewelery'>Jewelery</Link>
      <Link to='/products/category/electronics'>Electronics</Link>
      <Link to='/products/category/men'>Men's Clothing</Link>
      <Link to='/products/category/'>Women's Clothing</Link>
    </div>
  )
}

export default Links
