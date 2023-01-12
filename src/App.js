import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.scss';
import Homepage from './components/Homepage';
import { Route, Routes,Switch,useLocation } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

import { Container} from 'react-bootstrap';

import "./fonts/Monofett/Monofett-Regular.ttf"

// fonts

const App = () => {

  const location = useLocation()
  const [cart,setCart] = useState([]);

  const addToCart = (event,item) => {
    event.preventDefault();
    setCart([...cart,item]);
  }

  const handleItemQuantity = (index) => (e) => {
    const newArray = cart.map((item,i) => {
      if (index === i) {
        return {...item, [e.target.name]: e.target.value}
      } else {
        return item 
      }
    })
    setCart(newArray)
  }

  const handleCartButtonDisable = () => {
    const buttons = document.querySelectorAll('[data-button_type="add_to_cart"]')
    Array.from(buttons).map((button) => {
      if (getProduct(+button.id)) {
        button.disabled = true
        return
      }
    })
  }

  const removeItemFromCart = (id) => {
    let cart_copy = [...cart];
    const item_index = cart_copy.indexOf(getProduct(id));
    cart_copy.splice(item_index,1)
    setCart(cart_copy)
    
    
  }

  useLayoutEffect(handleCartButtonDisable,[cart,location])
  


  const getProduct = (id) => {
    return cart.find((product) => product.id === id);
  }
  

  return(
    <Container className="font-weight-bold">
      <Header cart_info ={cart} addToCart = {addToCart} removeItemFromCart = {removeItemFromCart} handleItemQuantity = {handleItemQuantity}/>
    </Container>
  )
}

export default App
