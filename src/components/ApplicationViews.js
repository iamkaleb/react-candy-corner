import { Route } from 'react-router-dom';
import React from 'react';
import Login from "./auth/Login";
import ProductList from './products/ProductList';
import ProductDetails from './products/ProductDetails';

const ApplicationViews = props => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route
                exact
                path="/products"
                render={props => {
                    return <ProductList {...props} />
                }}
            />
            <Route
            exact
            path="/products/:productId(\d+)"
            render={(props) => {
                return (
                    <ProductDetails
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