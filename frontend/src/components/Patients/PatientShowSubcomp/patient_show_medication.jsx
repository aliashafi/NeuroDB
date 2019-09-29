import React, { useState, useEffect } from 'react';

function PatientShowMedication(props){
    const [renderEdit, setRenderEdit] = useState(false);

    const initMedicaitonName = (props.patient.medication) ? props.patient.medication.medicationName : '';
    const initMedicationPurpose = (props.patient.medication) ? props.patient.medication.medicationPurpose : '';

    const [medicationName, setMedicationName] = useState(initMedicaitonName);
    const [medicationPurpose, setMedicationPurpose] = useState(initMedicationPurpose);

    useEffect(() => {
        if (props.patient.medication) {
            setMedicationName(props.patient.medication.medicationName);
            setMedicationPurpose(props.patient.medication.medicationPurpose);
        }
    }, [props.patient]);

    function handleMedicationNameChange(e) {
        setMedicationName(e.target.value);
    }
    function handleMedicationPurposeChange(e) {
        setMedicationPurpose(e.target.value);
    }

    function renderComp() {
        return (
            <>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Medication</div>
                <input onChange={handleMedicationNameChange} className='inner-card__field-value' value={medicationName} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Purpose</div>
                <input onChange={handleMedicationPurposeChange} className='inner-card__field-value' value={medicationPurpose} disabled={!renderEdit} />
            </div>
            </>
        );
       
    }

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
            medication: {
                medicationName,
                medicationPurpose
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
        setMedicationName(initMedicaitonName);
        setMedicationPurpose(initMedicationPurpose);
        const allValueFields = document.querySelectorAll('.inner-card__field-value');
        Array.from(allValueFields).forEach(field => field.classList.remove('editable'));
    }

    function handleCancelClick(e) {
        setRenderEdit(!renderEdit);
        setMedicationName(initMedicaitonName);
        setMedicationPurpose(initMedicationPurpose);
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
    
    return (
        <div className='patient-show-inner-card-show'>
            {renderButton()}
            <div className='patient-show-inner-card__header'>Medication</div>
            <div className='header-divider'></div>
            <div className='patient-show-inner-card__medication-body'>
                <div className='patient-show-inner-card__info2'>

                    {renderComp()}
                </div>
            </div>           

        </div>
    );
    

}

export default PatientShowMedication;