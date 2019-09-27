import React from 'react';
import {Link} from "react-router-dom";
import '../css/nav_bar.scss'
import Logo from '../images/NeuroDBLogo.png'

const App = (props) => {
    // function App() {

    const {logout} = props;

    return (
        <div className="nav-bar">

            <div id="left-nav">
                <div id="logo">
                    <img src={Logo} alt=""/>
                </div>
            </div>

            <div id="right-nav">
                <div id="button-login">
                    <Link to="/login">Login</Link>
                </div>
                <div id="button-register">
                    <Link to="/register">Register</Link>
                </div>
                <div id="button-logout">
                    <button onClick={logout}>Logout</button>
                </div>
            </div>


        </div>
    );
}

export default App;