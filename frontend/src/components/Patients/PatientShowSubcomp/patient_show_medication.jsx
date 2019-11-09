import React, { useState, useEffect } from 'react';

function PatientShowMedication(props){
    const [renderEdit, setRenderEdit] = useState(false);

    const initMedication = (props.patient.medication) ? props.patient.medication : [];
    const [medication, setMedication] = useState(initMedication);

    useEffect(() => {

    }, [props.patient]);

    function handleMedicationChange(e) {
        let updatedMed = [...medication];
        updatedMed[e.target.dataset.idx][e.target.dataset.field] = e.target.value;
        setMedication(updatedMed);
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
            medication: medication,
        };
        props.updatePatient(data)
        .then(() => {
            const allValueFields = document.querySelectorAll('.inner-card__field-value');
            Array.from(allValueFields).forEach(field => field.classList.remove('editable'));
        });
    }

    function handleCancelClick(e) {
        setRenderEdit(!renderEdit);
        setMedication(initMedication);
        const allValueFields = document.querySelectorAll('.inner-card__field-value');
        Array.from(allValueFields).forEach(field => field.classList.remove('editable'));
    }

    function renderComp() {
        return (
            <>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Medication</div>
                <div className='inner-card__field-value-medication'>
                    <div className='medication-body-container'>
                    {medication.map((med, i) => (
                        <div>
                            <input 
                                key={i}
                                onChange={handleMedicationChange} 
                                dataset-idx={i}
                                dataset-field="medicationName"
                                className='inner-card__field-value' 
                                value={med.medicationName} 
                                disabled={!renderEdit}
                            />
                            <input 
                                key={i}
                                onChange={handleMedicationChange} 
                                dataset-idx={i}
                                dataset-field="medicationPurpose"
                                className='inner-card__field-value' 
                                value={med.medicationPurpose} 
                                disabled={!renderEdit} 
                            />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            </>
        );
       
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