import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface RouteWrapperProps extends RouteProps {
    component: React.FunctionComponent;
    isPrivate?: boolean;
}

const RouteWrapper: React.FunctionComponent<RouteWrapperProps> = ({
    component: Component,
    isPrivate,
    ...rest
}) => {
    const signInStoraged = localStorage.getItem('ac-signin');

    if (signInStoraged) {
        if (!JSON.parse(signInStoraged) && isPrivate) {
            return <Redirect to="/" />;
        }

        if (JSON.parse(signInStoraged) && !isPrivate) {
            return <Redirect to="/dashboard" />;
        }
    }

    return <Route {...rest} component={Component} />;
}

RouteWrapper.defaultProps = {
    isPrivate: false,
}

export default RouteWrapper;
