import React from "react";
import CartHeader from "./CardHeader";
import CartBody from "./CartBody";
import cartItems from "./cartArray";


function Cart() {
    let b
    if(cartItems.length > 0){
        return (
            <>
                <CartHeader />
                {cartItems.map((item) => <CartBody key = {item.id}  item={item}/>)}
            </>
        )
    } else{
        return(
            <>
                <CartHeader />
                <div></div>
            </>
        )
    }
}

export default Cart;