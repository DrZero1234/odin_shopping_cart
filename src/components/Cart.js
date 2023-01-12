import React from "react";
import {Card,Button,Badge} from "react-bootstrap";
import { mdiDelete } from '@mdi/js'; 
import Icon from "@mdi/react";

const Cart = ({cart_items,removeItemFromCart,handleItemQuantity}) => {

    let total_price = 0;

    cart_items.map((i) => total_price += +i.price * i.quantity)
    return(
            <div className = "main-wrapper">
                    <section className="h-100">
                        <div className="container h-100 py-5">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-10">

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                    </div>
                    {cart_items.map((cart_item,index) => (
                        <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                src={cart_item.image_url}
                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <p className="lead fw-normal mb-2">{cart_item.name}</p>
                                <p><span className="text-muted">{cart_item.price}€/qty</span></p>

                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                                <input id="form1" min="1" name="quantity" value={cart_item.quantity} type="number" onChange={handleItemQuantity(index)}
                                className="form-control form-control-sm" />

                                <button className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 className="mb-0">{(cart_item.price * cart_item.quantity).toFixed(2)}€</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <Icon path={mdiDelete} color="red" id={cart_item.id} onClick={(e) => removeItemFromCart(cart_item.id)} size = {1.5} className = "delete-icon" />
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                            {cart_items.length > 0 ? 
                                <>
                                    <div className="card mb-4">
                                        <div className="card-body p-2 d-flex flex-row-reverse">
                                            <p className="fw-bold lead">Total price: {total_price.toFixed(2)}€</p>
                                        </div>
                                                                                <div className="card-body d-flex flex-row-reverse">
                                            <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                        </div>
                                    </div>

                                </>
                        : <p>Your cart is empty</p>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Cart