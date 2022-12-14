import React from 'react';
import './SelectedCart.css'

const SelectedCart = ({cart}) => {
    const {img,name,price}=cart;
        return (
                <div className='selected-cart'>
                    <img src={img} alt="" />
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
        );     
};

export default SelectedCart;