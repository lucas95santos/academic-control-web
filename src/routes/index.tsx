import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// pages
import { Dashboard, SignIn } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route exact path="/" component={SignIn} />
        </Switch>
    );
}

export default Routes;
