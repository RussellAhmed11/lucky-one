import React, { useEffect, useState } from 'react';

const Guitter = () => {
    const [products,setproducts]=useState([]);
    console.log(products)
    useEffect(() =>{
        fetch('packes.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div>
            <div className="product-container">
                <h1>Guitter name:{products.length}</h1>
            </div>
            <div className="cart-container">
                <h1>order summery</h1>
            </div>
        </div>
    );
};

export default Guitter;