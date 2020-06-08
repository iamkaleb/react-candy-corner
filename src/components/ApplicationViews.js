import { Route } from 'react-router-dom';
import React from 'react';
import Login from "./auth/Login";
import ProductList from './products/ProductList'

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
        </>
    )
}

export default ApplicationViews