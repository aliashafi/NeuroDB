import React from 'react';
import ElectrodeItem from './patient_show_electrodeItem';

function PatientShowImagingData(props) {

    function renderComp() {
        if (Object.keys(props.patient).length && props.patient.imaging) {
            const { electrodeMontage } = props.patient.imaging;
            return (
                <>
                {electrodeMontage.map((electrode, i) => (
                    <ElectrodeItem key={i} electrode={electrode} />
                ))}
                </>
            );
        } else {
            return null;
        }
    }
    
    return (
        <div className='patient-show-inner-card'>
            <h2>Imaging card</h2>
            <div className='inner-card__electrodeMontage-container'>
                {renderComp()}
            </div>

        </div>
    );
}

export default PatientShowImagingData;