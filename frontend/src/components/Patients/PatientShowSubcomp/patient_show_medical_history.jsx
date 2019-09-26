import React, { useState, useEffect } from 'react';

function PatientShowMedicalHistory(props){
    const [renderEdit, setRenderEdit] = useState(false);
    const initBDI = (props.patient.medicalHistory) ? props.patient.medicalHistory.BDI : '';
    const initBAI = (props.patient.medicalHistory) ? props.patient.medicalHistory.BAI : '';
    const initEpilepsyDiagnosis = (props.patient.medicalHistory) ? props.patient.medicalHistory.EpilepsyDiagnosis : '';
    const initPreviousResection = (props.patient.medicalHistory) ? props.patient.medicalHistory.previousResection : '';
    const initNeuroPace = (props.patient.medicalHistory) ? props.patient.medicalHistory.NeuroPace : '';

    const [BDI, setBDI] = useState(initBDI);
    const [BAI, setBAI] = useState(initBAI);
    const [epilepsyDiagnosis, setEpilepsyDiagnosis] = useState(initEpilepsyDiagnosis);
    const [previousResection, setPreviousResection] = useState(initPreviousResection);
    const [neuroPace, setNeuroPace] = useState(initNeuroPace);

    function handleEditClick(e) {
        setRenderEdit(!renderEdit);
        const allValueFields = document.querySelectorAll('.inner-card__field-value');
        Array.from(allValueFields).forEach(field => field.classList.add('editable'));
    }

    function handleUpdateClick(e) {
        //grab form input and dispatch updatePatient
        setRenderEdit(!renderEdit);
        const data = {
            _id: props.patient._id,
            medicalHistory: {
                BDI,
                BAI,
                epilepsyDiagnosis,
                previousResection,
                neuroPace
            },
        };
        props.updatePatient(data)
        .then(() => {
            const allValueFields = document.querySelectorAll('.inner-card__field-value');
            Array.from(allValueFields).forEach(field => field.classList.remove('editable'));
        });

    }

    function handleCancelClick(e) {
        setRenderEdit(!renderEdit);
        setBDI(initBDI);
        setBAI(initBAI);
        setEpilepsyDiagnosis(initEpilepsyDiagnosis);
        setPreviousResection(initPreviousResection);
        setNeuroPace(initNeuroPace);

        const allValueFields = document.querySelectorAll('.inner-card__field-value');
        Array.from(allValueFields).forEach(field => field.classList.remove('editable'));
    }
    function renderButton() {
        if (!renderEdit) {
            return (
                <div className='btn-group'>
                    <div onClick={handleEditClick} className='btn btn--card'>Edit</div>
                </div>
            )
        } else {
            return (
            <div className='btn-group'>
                <div onClick={handleUpdateClick} className='btn btn--card'>Update</div>
                <div onClick={handleCancelClick} className='btn btn--card'>Cancel</div>
            </div>
            )
        }
    }
    function handleBDIChange(e) {
        setBDI(e.target.value);
    }
    function handleBAIChange(e) {
        setBAI(e.target.value);
    }
    function handleEpilepsyDiagnosisChange(e) {
        setEpilepsyDiagnosis(e.target.value);
    }
    function handlePreviousResectionChange(e) {
        setPreviousResection(e.target.value);
    }
    function handleNeuroPaceChange(e) {
        setNeuroPace(e.target.value);
    }

    function renderComp() {
        return (
            <>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>BDI</div>
                <input onChange={handleBDIChange} className='inner-card__field-value' value={BDI} disabled={!renderEdit} />
                
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>BAI</div>
                <input onChange={handleBAIChange} className='inner-card__field-value' value={BAI} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Epilepsy Diagnosis</div>
                <input onChange={handleEpilepsyDiagnosisChange} className='inner-card__field-value' value={epilepsyDiagnosis} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Previous Resection</div>
                <input onChange={handlePreviousResectionChange} className='inner-card__field-value' value={previousResection} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Has Neuro Pace</div>
                <input onChange={handleNeuroPaceChange} className='inner-card__field-value' value={neuroPace} disabled={!renderEdit} />
            </div>
            </>
        );
    }
   
    return (
        <div className='patient-show-inner-card'>
            {renderButton()}
            <div className='patient-show-inner-card__header'>Medication</div>
            <div className='header-divider'></div>
            <div className='patient-show-inner-card__body'>
                <div className='patient-show-inner-card__info'>
                    {renderComp()}
                </div>
            </div>           

        </div>
    );
    

}

export default PatientShowMedicalHistory;