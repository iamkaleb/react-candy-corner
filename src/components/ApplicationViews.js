import {React, Redirect} from 'react-router-dom';
import React from 'react';
import CandyCorner from './CandyCorner';
import Login from "./auth/Login";

const ApplicationViews = props => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route
                exact
                path="/"
                render={props => {
                    return <Login />;
                }}
            />
        </>
    )
}