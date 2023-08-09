import React, { createContext, useState } from 'react'
export const ShopContext =createContext(null); 
import {Product} from "../components/data/Vegetable.js";


const getDefaultCart =()=>{
  let cart={};
  for(let i=1;i<Product.length+1;i++){
    cart[i]=0;
  }
  return cart;
}
export const ShopContextProvider = (props) => {
  const [cartItems,setCartItems] = useState(getDefaultCart()); 
  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  };
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  };
  const contextValue ={cartItems,addToCart,removeFromCart};
  return (
    <ShopContext.Provider value={contextValue }>{props.children}</ShopContext.Provider>
  )
}
