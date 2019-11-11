import React from "react";
import "../css/collaborators.scss";
import Alia from "../images/alia-img.jpeg";
import Dolly from "../images/dolly-img.jpeg";
import Ernie from "../images/ernie-img.jpg";
import Jeffrey from "../images/jeffrey-img.jpeg";


function Collaborators() {
    return (
        <div className="collaborators-container">
            <div className="person-card">
                <h3>Alia Shafi</h3>
                <div className="person-info">
                    <img className="person-img" src={Alia}/>
                    <div className="person-links">
                        <a href="https://github.com/aliashafi" target="_blank"><i className="fab fa-github fa-2x"></i> Github</a>
                        <a href="https://linkedin.com/in/alia-shafi-9939a4a8/" target="_blank"><i className="fab fa-linkedin fa-2x"></i> LinkedIn</a>
                        <a href="https://angel.co/alia-shafi" target="_blank"><i className="fab fa-angellist fa-2x"></i> Angellist</a>
                    </div>
                </div>
            </div>
            <div className="person-card">
                <h3>Dolly Shin</h3>
                <div className="person-info">
                    <img className="person-img" src={Dolly} />
                    <div className="person-links">
                        <a href="https://github.com/dollyshin88" target="_blank"><i className="fab fa-github fa-2x"></i> Github</a>
                        <a href="https://linkedin.com/in/dollyshin88/" target="_blank"><i className="fab fa-linkedin fa-2x"></i> LinkedIn</a>
                        <a href="https://angel.co/dollyshin88" target="_blank"><i className="fab fa-angellist fa-2x"></i> Angellist</a>
                    </div>
                </div>
            </div>
            <div className="person-card">
                <h3>Ernie Man</h3>
                <div className="person-info">
                    <img className="person-img" src={Ernie} />
                    <div className="person-links">
                        <a href="https://github.com/ernestman" target="_blank"><i className="fab fa-github fa-2x"></i> Github</a>
                        <a href="https://linkedin.com/in/ernestman/" target="_blank"><i className="fab fa-linkedin fa-2x"></i> LinkedIn</a>
                        <a href="https://angel.co/ernestman" target="_blank"><i className="fab fa-angellist fa-2x"></i> Angellist</a>
                    </div>
                </div>
            </div>
            <div className="person-card">
                <h3>Jeffrey Bui</h3>
                <div className="person-info">
                    <img className="person-img" src={Jeffrey} />
                    <div className="person-links">
                        <a href="https://github.com/jeffkbui" target="_blank"><i className="fab fa-github fa-2x"></i> Github</a>
                        <a href="https://linkedin.com/in/jeffreykbui/" target="_blank"><i className="fab fa-linkedin fa-2x"></i> LinkedIn</a>
                        <a href="https://angel.co/jeffrey-bui-1" target="_blank"><i className="fab fa-angellist fa-2x"></i> Angellist</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaborators;

