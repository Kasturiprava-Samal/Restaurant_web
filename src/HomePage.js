//import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import React,{useState} from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function HomePage() {

  const [cartIsShown,setCartIsShown] =useState(false);

  const showCartHandler =()=>{
    setCartIsShown(true);
  };

  const hideCartHandler =()=>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default HomePage;