import React from 'react';

import { AiFillInstagram ,AiOutlineTwitter} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <p>2022 Ali Headphones All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </footer>
  );
}
