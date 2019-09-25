import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// We'll create this soon
import App from '../App';
import NavBarContainer from '../components/nav_bar_container'

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <NavBarContainer />
            <App />
        </HashRouter>
    </Provider>
);

export default Root;