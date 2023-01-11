import React from "react";
import {Card,Button,Badge} from "react-bootstrap";

export const Product = ({id,name,price,image_url,addToCart}) => {

    const product_obj = {id,name,price,image_url,quantity: 1}
    return (

    <div className="product" key = {id}>
      <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={image_url} className="img-thumbnail" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p className="lead font-weight-bold">{price}€</p>
          <Button variant="primary" id = {id} data-button_type = "add_to_cart" onClick={(e) => addToCart(e,product_obj)}>Add to Cart</Button>
        </Card.Body>
      </Card>
     </div>
    )
} 