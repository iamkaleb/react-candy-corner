import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';

const ProductCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Product: <span className='card-productname'>
                        {props.product.name}
                    </span>
                </h3>
                <Link to={`/products/${props.product.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard