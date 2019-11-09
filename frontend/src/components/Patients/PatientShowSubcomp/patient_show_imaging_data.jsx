import React, { useState, useEffect } from 'react';
import ElectrodeItem from './patient_show_electrodeItem';
import PlaceholderBrainProfile from '../../../images/placeholder_rotating_brain.gif';


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
            {/* NOTE: uncomment button after implementing electrodes update functionality */}
            {/* {renderButton()} */}
            <div className='patient-show-inner-card__header'>
                <div>Imaging Data</div>
                <div className='header-divider'></div>
            </div>
            <div className='patient-show-inner-card__body'>
                <div className='patient-show-inner-card__info'>
                    <div className='flex-row-wrap'>
                        <div className='flex-col-nowrap row-align-topleft'>
                        <div className='patient-show-inner-card__subheader'>
                            <div>Electrodes</div>
                        </div>
                        <div className='electrode__table'>
                            <div className='electrode__col-header-group'>
                                <div className='electrode__col-header'>Number</div>
                                <div className='electrode__col-header'>Region</div>
                            </div>
                            <div className='electrode__list'>
                                {renderComp()}
                            </div>
                        </div>
                        </div>
                        <img className='brain-gif' src={PlaceholderBrainProfile} />
                    </div>
                </div>
            </div>           

        </div>
    );
}

export default PatientShowImagingData;