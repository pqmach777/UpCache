import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import Login from './components/Login';
import {Router, Redirect} from 'react-router'
import {Switch,Route} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css'

const customHistory = createBrowserHistory();

// const store = createStore(reducer, composeWithDevTools(
//     applyMiddleware(thunk),
//     // other store enhancers if any
//   ));

ReactDOM.render(
    <BaseLayout>
        <Router history={customHistory}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/app/home" component={Home} />
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    </BaseLayout>

     
    , document.getElementById('root'));


