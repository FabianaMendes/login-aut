import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';

import { history } from './history';
import GlobalStyles from '../styles/GlobalStyles';

const Routes: React.FC = () => {
    return (
        <Router history={history}>
            <GlobalStyles/>
            <Switch>
                <Route component={Login} exact path="/login"/>
                <Route component={Register} exact path="/register"/>
                <PrivateRoute component={Home} exact path="/"/>
                <PrivateRoute component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes;