import React, { useContext } from "react";
import cartItems from "./cartArray";
import '../styles/CartBody.css'
import { ArrayLengthContext } from "../App";

function CartBody(props)
{
    const arrayLength = useContext(ArrayLengthContext)

    function removefromCart() {
        console.log(props.item)
        props.item.cart = false
        arrayLength.setButtonText("Add to cart")
        cartItems.forEach( (ele, index) => {
            if(ele.id === props.item.id){
                cartItems.splice(index,1)
            }
        })
        arrayLength.setArrayLength(cartItems.length)
    }
    return (
        <div className="cart-body">
            <div className="cart-container">
                <div className="image">
                    <img src={props.item.img} alt={props.item.alt}></img>
                </div>
                <p className="info">{props.item.info}</p>
                <p className="price">{props.item.price}</p>
                <button className="btn" onClick={() => removefromCart()}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CartBody;