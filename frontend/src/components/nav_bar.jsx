import React from 'react';
import {Link, withRouter, Redirect} from "react-router-dom";
import '../css/nav_bar.scss'
import Logo from '../images/NeuroDBLogo.png'

const App = (props) => {
    // function App() {

    const {logout, currentUserId} = props;
    // console.log(props.currentUserId)
    const handleLogout = (event) => {
        event.preventDefault();
        logout();
        props.history.push("/");
    }
    const handleRedirectHome = () => {
        props.history.push('/');
    }

    const toggleMenuDropdown = (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById('nav-bar-menu-dropdown');
        dropdown.classList.toggle('hidden');
    }
    const rightNav = currentUserId ? (
        <div className="btn-container">
            <div onClick={toggleMenuDropdown} className='nav-bar-menu'>
                <div className='nav-bar-menu-btn btn btn--nav custom-link'>
                    <i class="fas fa-bars"></i>
                    <div>Menu</div>
                </div>

                <div id='nav-bar-menu-dropdown' className='nav-bar-menu-dropdown hidden'>
                    <div className="nav-dropdown-item custom-link">
                        <Link to={`/patients`}>Patients Database</Link>
                    </div>
                    <div className="nav-dropdown-item custom-link">
                        <Link to={`/patient/create`}>Enter Patient Data</Link>
                    </div>
                    <div className="nav-dropdown-item custom-link">
                        <Link to={`/users/${currentUserId}`}>My Account</Link>
                    </div>
                    <div className="nav-dropdown-item custom-link">
                        <Link to={`/dashboard`}>Stats</Link>
                    </div>
                    <div className="nav-dropdown-item custom-link" onClick={handleLogout}>
                        Logout
                    </div>
                    
                </div>
            </div>
        </div>
    ) : (
        <div className="btn-container">
            <div className='btn btn--nav custom-link'>
                <Link to="/login">Login</Link>
            </div>
            <div className="btn btn--nav custom-link">
                <Link to="/register">Register</Link>
            </div>
        </div>
    )

    return (
        <div className="nav-bar">

            <div id="left-nav">
                <div onClick={handleRedirectHome} id="logo" className='clickable'>
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