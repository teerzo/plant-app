// Packages
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from 'components/header';

// Routes
import Login from './login';
import Logout from './logout';
import Register from './register';

import Home from './home';
import Collection from './collection';
import About from './about';
import Plants from './plants';

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/plants">
                        <Plants />
                    </Route>
                    <Route path="/collection">
                        <Collection />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}