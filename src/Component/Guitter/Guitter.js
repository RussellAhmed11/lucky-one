import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Guitter.css'

const Guitter = () => {
    const [products,setproducts]=useState([]);
    const [cart,setcart]=useState([])
    useEffect(() =>{
        fetch('packes.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    const handleAddToCart=(product)=>{
        let newcart=[...cart,product] 
        if(newcart.length>4){
            return;
        }
          setcart(newcart)
    }
    const removecart=(product)=>{
        let newcart=[...cart,product] 
        setcart([])  
    }
    return (
        <div className='body-container'>
            <div className="product-container">
                {
                    products.map(product=>
                    <Product product={product}
                     key={product.id} handleAddtoCart={handleAddToCart}
                     ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={cart} removecart={removecart}></Cart>  
            </div>
        </div>
    );
};

export default Guitter;