import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
export default function Product({product:{name,price,image,slug}}) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div>
          <img src={urlFor(image && image[0])} alt='product image' className='product-image' width={250} height={250} />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  ); 
}
