import React,{useState} from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai';
import {Cart} from './'

// todo import usestateContext

export default function Navbar() {
  const [showCart, setShowCart] = useState(false)
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Ali Headphones</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart((prev)=>!prev)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>21</span>
      </button>

      {/* show cart */}
      {showCart && <Cart />}
    </div>
  );
}
