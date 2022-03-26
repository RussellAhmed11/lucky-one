import React from 'react';
import SelectedCart from '../SelctedCart/SelectedCart';
import './Cart.css'
const Cart = ({carts}) => {
    console.log(carts)
    return (
       
        <div className='cart'>
            <h3>Order Summary</h3>
            {
                carts.map(cart=> <SelectedCart cart={cart} key={cart.id}></SelectedCart>)
            }
            <button className='btn-1'>Chose 1 for me</button><br />
            <button className='btn-2'>Chose Again</button>
        </div>
    );
};

export default Cart;

