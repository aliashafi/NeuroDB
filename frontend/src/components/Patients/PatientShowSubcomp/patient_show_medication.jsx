import React from 'react';

function PatientShowMedication(props){

    function renderComp() {
        if (Object.keys(props.patient).length && props.patient.medication) {
            const { medicationName, medicationPurpose } = props.patient.medication;
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div>Medication</div>
                    <div>{medicationName}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Purpose</div>
                    <div>{medicationPurpose}</div>
                </div>
                </>
            );
        } else {
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div>Medication</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Purpose</div>
                    <div></div>
                </div>
                </>
            );
        }
    }
    
    return (
        <div className='patient-show-inner-card'>
            <h2>Medication card</h2>
            {renderComp()}
        </div>
    );
    

}

export default PatientShowMedication;