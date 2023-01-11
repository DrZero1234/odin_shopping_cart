import React from "react";
import {Card,Button,Badge} from "react-bootstrap";

const Cart = ({cart_items,removeItemFromCart,handleItemQuantity}) => {

    let total_price = 0;

    cart_items.map((i) => total_price += +i.price * i.quantity)
    return(
            <div className = "main-wrapper">
                    <section class="h-100">
                        <div class="container h-100 py-5">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-10">

                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                                    </div>
                    {cart_items.map((cart_item,index) => (
                        <div class="card rounded-3 mb-4">
                        <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                src={cart_item.image_url}
                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                                <p class="lead fw-normal mb-2">{cart_item.name}</p>
                                <p><span class="text-muted">{cart_item.price}€/qty</span></p>

                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

                                <input id="form1" min="1" name="quantity" value={cart_item.quantity} type="number" onChange={handleItemQuantity(index)}
                                class="form-control form-control-sm" />

                                <button class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">{(cart_item.price * cart_item.quantity).toFixed(2)}€</h5>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <img src="delete.png" width={50} height = {50} id={cart_item.id} onClick={removeItemFromCart}/>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                            {cart_items.length > 0 ? 
                                <>
                                    <div class="card mb-4">
                                        <div class="card-body p-2 d-flex flex-row-reverse">
                                            <p className="fw-bold lead">Total price: {total_price.toFixed(2)}€</p>
                                        </div>
                                                                                <div class="card-body d-flex flex-row-reverse">
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