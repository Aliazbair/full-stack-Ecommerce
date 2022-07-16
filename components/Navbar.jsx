import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

// todo import usestateContext

export default function Navbar() {
  // const [showCart, setShowCart] = useState(false)
  const { showCart, setShowCart, totalQuantities, onAdd } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Ali Headphones</Link>
      </p>

      <button
        type='button'
        className='cart-icon'
        onClick={() => setShowCart((prev) => !prev)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {/* show cart */}
      {showCart && <Cart />}
    </div>
  );
}
