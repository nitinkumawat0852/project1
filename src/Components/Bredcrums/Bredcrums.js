import React from 'react'
import arrow_icon from "../../Assets/arrow_icon.png";
import '..//Bredcrums/Bredcrums.css'
const Bredcrums = (props) => {
const {product} = props;
  return (
    <div className='bredcrums'>
Home <img src={arrow_icon} alt="" height="10px"/> SHOP <img src={arrow_icon} alt="" height="10px" />{product.category} <img src={arrow_icon} alt="" height="10px" /> {product.name} 
    </div>
  )
}

export default Bredcrums;