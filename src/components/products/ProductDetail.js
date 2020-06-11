import React, { useState, useEffect } from 'react';
import DataManager from '../../modules/DataManager'
import LocationCard from '../locations/LocationCard'
import './ProductDetail.css'

const ProductDetail = props => {
    const [product, setProduct] = useState({name: ""});
    const [productType, setProductType] = useState({})
    const [productLocations, setProductLocations] = useState([])

    useEffect(() => {
        DataManager.getWithExpand("products", props.match.params.productId, "productType")
                        .then(APIresult => {
                            console.log(APIresult)
                            setProduct(APIresult);
                            setProductType(APIresult.productType)
                        })
                    }, [props.productId]);
    
    useEffect(() => {
        // const stateToChange = []

        DataManager.getAll("productLocations")
        .then(APIprodlocs => {
            return console.log(APIprodlocs)
            // APIprodlocs.filter(APIprodloc => {
            //     APIprodloc.productId === props.match.params.productId
            //         }).map(prodloc => prodloc.locationId)
            // }).then(locationIds => {
            //     locationIds.forEach(locationId => {
            //     DataManager.get(locationId)
            //         .then(APIlocation => stateToChange.push(APIlocation))
            //     })
            // setProductLocations(stateToChange)
            })
    }, []);
    
    return (
        <div className="card">
            <h3>{product.name}</h3>
            <p>{productType.name}</p>
        </div>
    )
}

export default ProductDetail