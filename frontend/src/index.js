import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import axios from 'axios';
import { createPatient, getPatient, getPatients } from './util/patient_api_util';
import { logout, loginUser, registerUser } from './actions/session_actions';
import {fetchUsers, fetchUser, deleteUser, updateUser} from "./actions/user_actions";
import { createTask, getTask, updateTask } from './util/task_api_util';

import {verifyToken} from "./util/user_api_util";

document.addEventListener('DOMContentLoaded', () => {
    let store;
    store = configureStore({})
    window.getState = store.getState;
    window.dispatch = store.dispatch
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, currentUser: decodedUser } };
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;
        // if (decodedUser.exp < currentTime) {
            // store.dispatch(logout());
            // window.location.href = '/login';
        // }
    } else {
        store = configureStore({});
    }
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store}/>, root);

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchUsers = fetchUsers;
    window.fetchUser = fetchUser;
    window.deleteUser = deleteUser;
    // window.updateUser = updateUser;
    window.verifyToken = verifyToken;


    window.createPatient = createPatient;
    window.getPatient = getPatient;
    window.getPatients = getPatients;

    window.createTask = createTask;
    window.getTask = getTask;
    window.updateTask = updateTask;

});
