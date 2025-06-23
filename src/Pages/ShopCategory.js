import React, { useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icons from '../Assets/dropdown_icon.png'
import Item from '../Components/item/Item';
const ShopCategory= (props) =>{
    const {all_product} = useContext(ShopContext)
    return (
        <div className='shop-catagory'>
            <img  src={props.banner} className='shopcategory-banner' />
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shopcatagory-short'>
                    Short by <img src={dropdown_icons} height="20px"/> 
                </div>
            </div>
            <div className='shopcategory-products'>
                {all_product.map((item,i)=>{
                    if(props.category ===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className='shopcategory-loadmore'>
                Explore More    
            </div>
        </div>
    );
}

export default ShopCategory;