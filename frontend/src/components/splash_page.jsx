import React from 'react';
import Brain from '../images/brain.png'
import '../css/splash-page.scss';

function SplashPage() {
    return (
        <div className="splash-page">
            <h1>NeuroDB</h1>
            <img src={Brain} alt=""/>
           
        </div>
    );
}

export default SplashPage;