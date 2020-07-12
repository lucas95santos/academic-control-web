import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// pages
import { Dashboard, SignIn, SignUp } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/cadastro" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
}

export default Routes;
