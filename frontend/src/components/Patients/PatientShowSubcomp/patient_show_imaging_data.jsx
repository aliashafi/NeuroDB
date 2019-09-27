import React, { useState, useEffect } from 'react';
import ElectrodeItem from './patient_show_electrodeItem';

function PatientShowImagingData(props) {
    const [renderEdit, setRenderEdit] = useState(false);

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
            imaging: { 
                //imaging data
            }
        };

        props.updatePatient(data)
        .then(() => {
            const allValueFields = document.querySelectorAll('.inner-card__field-value');
            Array.from(allValueFields).forEach(field => field.classList.remove('editable'));
        });
    }

    function handleCancelClick(e) {
        setRenderEdit(!renderEdit);
  
        const allValueFields = document.querySelectorAll('.inner-card__field-value');
        Array.from(allValueFields).forEach(field => field.classList.remove('editable'));
    }

    
    return (
        <div className='patient-show-inner-card'>
            {renderButton()}
            <div className='patient-show-inner-card__header'>Imaging Data</div>
            <div className='header-divider'></div>
            <div className='patient-show-inner-card__body'>
                <div className='patient-show-inner-card__info'>
                {renderComp()}
                </div>
            </div>           

        </div>
    );
}

export default PatientShowImagingData;