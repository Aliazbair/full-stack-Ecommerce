import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

function HeroBanner({ bannerData }) {
  console.log(bannerData);
  return (
    <section className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
        <h2>{bannerData.largeText1}</h2>
        <img
          src={urlFor(bannerData.image)}
          alt='headphones'
          className='hero-banner-image'
        />
      </div>
      <div>
        <Link href={`/product/${bannerData.product}`}>
          <button type='button'>{bannerData.buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>
            {bannerData.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner