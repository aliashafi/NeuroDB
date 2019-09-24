<<<<<<< HEAD
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import RootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState={}) => (
    createStore(
        RootReducer,
=======
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
>>>>>>> 40da76dd655bf920afcd21b2595bc0b4b352a821
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;