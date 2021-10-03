import React from 'react';
import './Shop.css';
import fackData from '../../fakeData'
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fackData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('this product is added', product);
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd =>
                        <Product
                            product={pd}
                            handleAddProduct={handleAddProduct}>

                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;