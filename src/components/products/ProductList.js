import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'
import DataManager from '../../modules/DataManager'

const ProductList = props => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return DataManager.getAll('products')
                .then(APIproducts => {
                    setProducts(APIproducts)
                })
    };

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <section className="section-content">
                <button 
                    type="button"
                    className="btn"
                    onClick={() => {props.history.push('/products/new')}}>
                        Add Product
                </button>
            </section>
            <div className="container-cards">
                {products.map(product =>
                    <ProductCard 
                        key={product.id}
                        product={product}
                        {...props}
                    />
                )}
            </div>
        </>
    )
}

export default ProductList