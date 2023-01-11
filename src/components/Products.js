import React from "react";
import products_data from "../products_data";
import { Product } from "./Product";
import {Card, Badge, Button, Row,Col} from "react-bootstrap";
import { GridSystem } from "./gridSystem";



export const  Products = ({data,addToCart}) => {

    
    return (
        <div className="products">
            <h2 display = "h2">Products</h2>
            <GridSystem colCount = {4} md={6} sm={6} lg={3} children = {data.length > 0 ? data.map((product) => <Product id = {product.id} key = {product.id} name={product.name} image_url={product.image_url} price = {product.price} addToCart = {addToCart} />
                ) : [<p>No products were found</p>]}>
            </GridSystem>
        </div>
            
    )
}
{/*
    return(
        <div className="products-wrapper">
            <div className="products">
                {products_data.map((product) => (
                    <Product id={product.id} name={product.name} price = {product.price} image_url = {product.image_url} key={product.id} />
                ))}
            </div>
        </div>
    )
}

*/}