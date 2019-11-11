import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Features from "./features";
import Collaborators from "./collaborators";
import Brain from '../images/brain.png';
import BrainGrid from '../images/brain_grid.png';
import '../css/splash-page.scss';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId
    }
}

const SplashPage = (props) => {

    console.log(props)

    const splashBtns = props.currentUserId ? (
        <div>
        </div>
    ) : (
        <div>
            <p className='splash-page-text'>Login or register to collaborate and make a difference with NeuroDB lab</p>
            <div className="splash-btn-container">
                <div className='btn btn--nav custom-link'>
                    <Link to="/login">Login</Link>
                </div>
                <div className="btn btn--nav custom-link">
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className="splash-page">
            <div className='splash-page__top'>
                <img id="main-img" src={BrainGrid} alt=""/>
                <h1>Welcome to NeuroDB Lab</h1>
                <p className='splash-page-text'>NeuroDB is a database tool to help researchers studying intracranial Electrocorticography (ECoG) manage patient meta data and research related information.</p>
                {splashBtns}
            </div>
            <div className="splash-page__features">
                <Features />
            </div>
            <div className="splash-page__people">
                <h2 id="splash-headers"> Collaborators</h2>
                <Collaborators />
            </div>
            <div className="splash-page__footer">

            </div>
        </div>
    );
}

export default connect(mapStateToProps, null)(SplashPage);