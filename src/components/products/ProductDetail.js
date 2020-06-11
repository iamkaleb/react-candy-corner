import React, { useState, useEffect } from 'react';
import DataManager from '../../modules/DataManager'
import LocationCard from '../locations/LocationCard'
import './ProductDetail.css'

const ProductDetail = props => {
    const [product, setProduct] = useState({});
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        DataManager.getWithEmbed("products", props.match.params.productId, "locations")
                        .then(APIresult => {
                            setProduct(APIresult);
                            setLocations(APIresult.locations)
                        })
                    }, []);
    
    return (
        <div className="card">
            <p>{product.name}</p>
            {locations.map(location =>
            <LocationCard
                key={location.id}
                location={location}
                {...props}
            />
            )}
        </div>
    )
}

export default ProductDetail