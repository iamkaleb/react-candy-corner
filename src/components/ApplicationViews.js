import { Route } from 'react-router-dom';
import React from 'react';
// import Login from "./auth/Login";
import ProductList from './products/ProductList';
import ProductDetail from './products/ProductDetail';
import ProductForm from './products/ProductForm';
import EmployeeList from './employees/EmployeeList'
import EmployeeDetail from './employees/EmployeeDetail'
import LocationList from './locations/LocationList'


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
            render={props => {
                return (
                    <ProductDetail
                        productId={parseInt(props.match.params.productId)}
                        {...props}
                    />
                );
            }}
            />
            <Route
                exact
                path='/products/new'
                render={props => {
                    return <ProductForm {...props} />
                }}
            />
            <Route
                exact
                path="/employees"
                render={props => {
                    return <EmployeeList {...props} />
                }}
            />
            <Route
            exact
            path="/employees/:employeeId(\d+)"
            render={props => {
                return (
                    <EmployeeDetail
                        employeeId={parseInt(props.match.params.employeeId)}
                        {...props}
                    />
                );
            }}
            />
            <Route
                exact
                path="/locations"
                render={props => {
                    return <LocationList {...props} />
                }}
            />
        </>
    )
}

export default ApplicationViews