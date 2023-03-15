import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'

function CartHeader() {
    return <div className="cart-header">
        <Link  to= '/' >
            <button className="cart-icon">back</button>
        </Link>
        <h1>Items in cart</h1>
    </div>
}

export default CartHeader;