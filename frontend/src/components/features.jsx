import React from "react";
import "../css/features.scss";

function Features() {

    return (
        <div className="features-container">
            <div className="feature-card">
                <h2>Patient Data</h2>
                <p className="splash-page-text__card">Verified users can view and enter patient data like medication, medical history, imaging, and tasks</p>
            </div>
            <div className="feature-card">
                <h2>Advanced Search</h2>
                <p className="splash-page-text__card">Use NeuroDB's Advanced Search feature to filter patients by coverage, demographics, or medical history</p>
            </div>
            <div className="feature-card">
                <h2>Patient Statistics</h2>
                <p className="splash-page-text__card">View patient statistics in the Statistics Dashboard</p>
            </div>
        </div>
    )

}

export default Features;