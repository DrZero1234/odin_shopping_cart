import React from "react";
 import { Link, Route, Routes,BrowserRouter } from "react-router-dom";
 import Homepage from "./Homepage";
 import Cart from "./Cart";
 import { Products } from "./Products";
 import Nav from "react-bootstrap/Nav";
 import Navbar from "react-bootstrap/Navbar";
 import { Container } from "react-bootstrap";
 import products_data from "../products_data";


 const Header = ({cart_info,addToCart,removeItemFromCart,handleItemQuantity}) => {

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src="icon.png" alt="Site icon" width="125" height="125" className="d-inline-block align-center"/> {" "}
                     Site name
                    </Navbar.Brand>
                <Nav className="justify-content-end ">
                    <Nav.Link><Link to="/" >Home </Link></Nav.Link>
                    <Nav.Link><Link to="/products" >Products </Link></Nav.Link>
                    <div className="d-flex flex-column align-items-center">
                    {cart_info.length > 0 ?
                        <div className="p-1 border bg-danger bg-gradient rounded-circle">
                            <span>{cart_info.length} </span>
                         </div>
                          : null}
                        <Nav.Link className="m-0 p-0"><Link to="/cart"  id = "header-icon-wrapper">
                            <img src="shopping-cart.svg" alt = "Cart" width="64" height = "64" /></Link>
                        </Nav.Link>

                    </div>
                        
                </Nav>
            </Container>
      </Navbar>
        <Routes>
            <Route path='/' element = {<Homepage />}></Route>
            <Route path='/cart' element = {<Cart cart_items={cart_info} removeItemFromCart = {removeItemFromCart} handleItemQuantity = {handleItemQuantity}/>}></Route>
            <Route path='/products' element = {<Products data = {products_data} addToCart = {addToCart}/>}></Route>
        </Routes>
        </>
)

}


 export default Header

{/*
<nav className = "site-navbar">
                    <ul>
                        <li>
                            <Link to="/" >Home </Link>
                        </li>
                        <li>
                            <Link to="/products" >Products </Link>
                        </li>
                        <li>
                            <Link to="/cart" >Cart </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
        <Routes>
            <Route path='/' element = {<Homepage />}></Route>
            <Route path='/cart' element = {<Cart />}></Route>
            <Route path='/products' element = {<Products />}></Route>
        </Routes>
*/}