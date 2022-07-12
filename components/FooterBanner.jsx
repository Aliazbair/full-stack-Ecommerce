import React from 'react'
import Link from 'next/link'
export default function FooterBanner() {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        {/* left */}
        <div className='left'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            debitis laborum eveniet..
          </p>
          <h3>Lorem, ipsum.</h3>
          <h3>Lorem, ipsum dolor.</h3>
          <p>12/07/2022</p>
        </div>

        {/* right */}
        <div className='right'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            doloremque ad dignissimos?
          </p>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sed
            ipsam perferendis blanditiis, quibusdam nobis excepturi autem optio
            iste rem omnis corporis corrupti quaerat! Iusto molestias quos culpa
            animi accusamus!
          </p>
          <Link href='/product'>
            <button type='button'>buttonText</button>
          </Link>
        </div>

        {/* <img src={urlFor(image)} className='footer-banner-image' /> */}
      </div>
    </div>
  );
}

