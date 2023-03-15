import '../styles/Header.css'

import cartLogo from "../images/cart-shopping-solid.svg"
import {Outlet, Link } from 'react-router-dom'

function Header(props)
{
    return <div className='header'>
        <h1>Laptops</h1>
        <div>
            <Link to="/cart">
                <button className='icon'>
                    <img src={cartLogo} alt="cart logo"></img>
                    {props.items}
                </button>

            </Link>
        </div>
        <Outlet />
    </div>
}

export default Header