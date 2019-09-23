import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'
import App from './App';
import Root from './components/Root'
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store'
ReactDOM.render(<App />, document.getElementById('root'));
    let store;
    // if (localStorage.jwtToken) {
    //     // setAuthToken(localStorage.jwtToken);
    //     // const decodedUser = jwt_decode(localStorage.jwtToken);
    //     // const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        // store = configureStore(preloadedState);

    //     const currentTime = Date.now() / 1000;

    //     // if (decodedUser.exp < currentTime) {
    //     //     // store.dispatch(logout());
    //     //     // window.location.href = '/login';
    //     // }
    // } else {
        store = configureStore({});
    // }
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
serviceWorker.unregister();
