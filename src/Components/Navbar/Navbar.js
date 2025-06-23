import React, { useContext, useState } from 'react';
import "./Navbar.css"
import logo from "../../Assets/logo.webp";
import cart_icon from "../../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar() {
    const [memu,setMenu] = useState("home");
    const{getTotalCartItems} =useContext(ShopContext);
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' height="50px"/>
                <p>Shopify</p>
            </div> 
            <ul className='nav-menu'>
                <li onClick={()=>setMenu("home")}><Link style={{textDecoration:'none',color:'#626262'}} to="/" >Home</Link>{memu==="home" ? <hr/> : <></>}</li>
                <li onClick={()=>setMenu("mens")}><Link  style={{textDecoration:'none',color:'#626262'}}to="/mens">Men</Link> {memu==="mens" ? <hr/> : <></>}</li>
                <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:'none',color:'#626262'}} to="/womens">Womens</Link> {memu==="womens" ? <hr/> : <></>}</li>
                <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:'none',color:'#626262'}} to="/kids">Kids</Link> {memu==="kids" ? <hr/> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button className='login'>Login </button></Link>
                <Link to="/cart"><img src={cart_icon} height="40px"/></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;