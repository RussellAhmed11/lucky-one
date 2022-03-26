import React, { useEffect, useState } from 'react';
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
      const newcart=[...cart,product]
      setcart(newcart)
    }
    return (
        <div className='body-container'>
            <div className="product-container">
                {
                    products.map(product=>
                    <Product product={product}
                     key={product.id} handleAddtoCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order summery:{cart.length}</h2>
            </div>
        </div>
    );
};

export default Guitter;