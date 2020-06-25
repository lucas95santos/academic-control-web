import React from 'react';
import { Switch, Route } from 'react-router-dom';
// pages
import { Dashboard } from './pages';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
        </Switch>
    );
}
