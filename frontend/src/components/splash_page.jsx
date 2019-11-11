import React from 'react';
import Brain from '../images/brain.png';
import BrainGrid from '../images/brain_grid.png';



function SplashPage() {


    return (
        <div className="splash-page">
            <div className='splash-page__top'>
                <img src={BrainGrid} alt=""/>
                <h1>Welcome to NeuroDB Lab</h1>
                <p className='splash-page-text'> Register to collaborate and make a difference with NeuroDB lab</p>
            </div>
            <div className="splash-page__bottom">
                
            </div>
        </div>
    );
}

export default SplashPage;