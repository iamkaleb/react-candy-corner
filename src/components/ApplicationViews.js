import { Route } from 'react-router-dom';
import React from 'react';
import Login from "./auth/Login";
import ProductList from './products/ProductList';
import ProductDetail from './products/ProductDetail';

const ApplicationViews = props => {

    return (
        <>
            <Route
                exact
                path="/"
                render={props => {
                    return <ProductList {...props} />
                }}
            />
            <Route
            exact
            path="/products/:productId(\d+)"
            render={(props) => {
                return (
                    <ProductDetail
                        productId={parseInt(props.match.params.productId)}
                        {...props}
                    />
                );
            }}
            />
        </>
    )
}

export default ApplicationViews