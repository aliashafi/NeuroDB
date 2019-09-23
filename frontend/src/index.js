import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import {setAuthToken} from "./util/session_api_util";
import { logout, loginUser, registerUser } from "./actions/session_actions";

import axios from "axios";


document.addEventListener("DOMContentLoaded", () => {

    let store;

    // for returning user
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser}}
    
        store = configureStore(preloadedState);
    
        const currentTime = Date.now() / 1000;
    
        // checking if user token expired
        if (decodedUser.exp < currentTime) {
            // logout user and redirect to login
            store.dispatch(logout());
            window.location.href = "/login";
        }
    } else {
        // for new user, start w/ empty store
        store = configureStore({});
    }

    ReactDOM.render(<App />, document.getElementById('root'));

    window.axios = axios;
    window.dispatch = store.dispatch

    window.loginUser = loginUser;
    window.registerUser = registerUser;
    
});






