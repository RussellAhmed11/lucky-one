import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Guitter.css'

const Guitter = () => {
    const [products,setproducts]=useState([]);
    useEffect(() =>{
        fetch('packes.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div className='body-container'>
            <div className="product-container">
                {
                    products.map(product=>
                    <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>order summery</h1>
            </div>
        </div>
    );
};

export default Guitter;