/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Render a private routes
 *
 */
import * as React from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    // check if user is logged in
    let isAuthenticated = false;

    // return the proper path
    // if user is logged in, render the page else redirect to "/"
    return (
        <Route {...rest}>
            {isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />}
        </Route>
    );
}
