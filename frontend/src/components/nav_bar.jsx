import React from 'react';
import {Link, withRouter} from "react-router-dom";
import '../css/nav_bar.scss'
import Logo from '../images/NeuroDBLogo.png'

const App = (props) => {
    // function App() {

    const {logout, currentUser} = props;

    const handleLogout = (event) => {
        event.preventDefault();
        logout()
        props.history.push("/")
    }

    const rightNav = currentUser ? (
        <div className="btn-container">
            <div className="btn custom-link">
                <Link to={`/users/${currentUser.id}`}>My Account</Link>
            </div>
            <div id="button-logout" onClick={handleLogout}>
                Logout
            </div>
        </div>
    ) : (
        <div className="btn-container">
            <div className='btn custom-link'>
                <Link to="/login">Login</Link>
            </div>
            <div className="btn custom-link">
                <Link to="/register">Register</Link>
            </div>
        </div>
    )

    return (
        <div className="nav-bar">

            <div id="left-nav">
                <div id="logo">
                    <img src={Logo} alt=""/>
                </div>
            </div>

            <div id="right-nav">
                {rightNav}
            </div>


        </div>
    );
}

export default withRouter(App);