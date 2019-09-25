import React from 'react';

function PatientShowMedicalHistory(props){
    
    function renderComp() {
        if (Object.keys(props.patient).length && props.patient.medicalHistory) {
            const { BDI, BAI, epilepsyDiagnosis, previousResection, neuroPace } = props.patient.medicalHistory;
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div>BDI</div>
                    <div>{BDI}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>BAI</div>
                    <div>{BAI}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Epilepsy Diagnosis</div>
                    <div>{epilepsyDiagnosis}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Previous Resection</div>
                    <div>{previousResection}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Has Neuro Pace</div>
                    <div>{neuroPace}</div>
                </div>
                </>
            );
        } else {
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div>BDI</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>BAI</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Epilepsy Diagnosis</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Previous Resection</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Has Neuro Pace</div>
                    <div></div>
                </div>
                </>
            );
        }
    }
   
    return (
        <div className='patient-show-inner-card'>
            <h2>Medical history card</h2>
            {renderComp()}
        </div>
    );
    

}

export default PatientShowMedicalHistory;