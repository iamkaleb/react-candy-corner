import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';

const ProductCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className='card-productname'>
                        {props.product.name}
                    </span>
                </h3>
                <button
                    type="button"
                    onClick={() => {props.history.push(`/products/${props.products.id}/details`)}}
                >Details</button>
            </div>
        </div>
    )
}

export default ProductCard