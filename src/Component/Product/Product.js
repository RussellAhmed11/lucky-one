import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
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
           <button onClick={()=>props.handleAddtoCart(props.product)} className='btn-cart'><p className='btn-text'>Add to cart</p>
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;