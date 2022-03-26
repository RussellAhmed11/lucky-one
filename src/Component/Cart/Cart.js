import React from 'react';
import SelectedCart from '../SelctedCart/SelectedCart';
import './Cart.css'
const Cart = ({carts,removecart,randomitem}) => {
            console.log(randomitem)
            return (     
                <div className='cart'>
                    <h3>Guitter add item list</h3>
                    {
                        carts.map(cart=> <SelectedCart cart={cart} key={cart.id}
                        ></SelectedCart>)
                    }
                    <button className='btn-1'>Chose 1 for me</button><br />
                    <button onClick={()=>removecart(carts)} className='btn-2'>Chose Again</button>
                </div>
             
            ); 
                     
};
 
export default Cart;


