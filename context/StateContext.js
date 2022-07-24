import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

// create context
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  let foundProduct;
  let index;
  const [qty, setQty] = useState(1);

  //   todo create add to cart function
  const onAdd = (product, quantity) => {
    // check the product in cart
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    // set total price
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    // set total quantity
    setTotalQuantities((prevTotalQty) => prevTotalQty + quantity);
    // check the product in cart
    if (checkProductInCart) {
      // update cart item
      const updatedCartItems = cartItems.map((cartProduct) => {
        // check the cartProduct === to product
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  //   todo create toggle cart quantity
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQty) => prevTotalQty + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQty) => prevTotalQty - 1);
      }
    }
  };


  // todo remove product from cart
  const OnRemove=(product)=>{
    foundProduct=cartItems.find((item)=> item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantities((prevTotalQty)=>prevTotalQty - foundProduct.quantity)
    setCartItems(newCartItems)
  }
  //   todo create incQty function
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  //   todo create decQty function
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        OnRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
