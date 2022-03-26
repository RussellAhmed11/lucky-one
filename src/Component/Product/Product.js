import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name,img,price,ratings,seller}=props.product
    return (
        <div className='product'>
           <img src={img} alt="" /> 
           <div className='product-info'>
           <p className='product_name'>Name:{name}</p>
           <p>Price:{price}</p>
           <p><small>Seller:{seller}</small></p>
           <p><small>Ratting:{ratings} Starts</small></p>
           </div>
           <button className='btn-cart'><p className='btn-text'>Add to cart</p></button>
        </div>
    );
};

export default Product;