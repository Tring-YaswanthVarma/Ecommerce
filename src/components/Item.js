import cartItems from "./cartArray";


import React, { useState, useContext } from "react";
import { ArrayLengthContext } from '../App.js'



function Item(props)
{
    let btText = props.item.cart ? "Remove from cart" : "Add to cart"

    const arrayLength = useContext(ArrayLengthContext);
    
    const [buttonText, setButtonText] = useState(btText)

    if(props.item.info.length > 100){
        props.item.info = props.item.info.slice(0,150) + "..."
    }

    let addOrRemoveFromCart = () => {
        props.item.cart ? removeFromCart() : addToCart()
        arrayLength.setArrayLength(cartItems.length)

    }

    let removeFromCart = () => {
        props.item.cart = false
        setButtonText("Add to cart")
        cartItems.forEach( (ele, index) => {
            if(ele.id === props.item.id){
                cartItems.splice(index,1)
            }
        })
        
    }

    let addToCart = () => {
        props.item.cart = true
        setButtonText("Remove fron cart")
        cartItems.push(props.item)

    }
    return (
        <div className="item">
            <div className="image">
                <img src={props.item.img} alt={props.item.alt} />
            </div>
            <p>{props.item.info}</p>
            <p>{props.item.price}</p>
            <button className="cart-button" onClick={() => {addOrRemoveFromCart()}}>{buttonText}</button>
        </div>
    )
}

export default Item