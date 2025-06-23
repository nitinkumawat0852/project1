import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.webp";
import instagram_icon from '../../Assets/instagram.png';
import facebook_icon from '../../Assets/facebook.png';
import whatsapp_icon from '../../Assets/whatsapp.png'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="footer-links">
        <li>About</li>
        <li>Product</li>
        <li>Officies</li>
        <li>Company</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} height="30px"/>
            </div>
             <div className="footer-icon-container">
                <img src={facebook_icon} height="30px"/>
            </div>
             <div className="footer-icon-container">
                <img src={whatsapp_icon} height="30px"/>
            </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
