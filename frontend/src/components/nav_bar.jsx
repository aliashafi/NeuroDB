import React from 'react';
import '../css/nav_bar.scss'
import Logo from '../images/NeuroDBLogo.png'

function App() {
    return (
        <div className="nav-bar">

            <div id="left-nav">
                <div id="logo">
                    <img src={Logo} alt=""/>
                </div>
            </div>

            <div id="right-nav">
                <div id="button-logout">
                    Logout
                </div>
                <div id="button-login">
                    Login
                </div>
            </div>


        </div>
    );
}

export default App;