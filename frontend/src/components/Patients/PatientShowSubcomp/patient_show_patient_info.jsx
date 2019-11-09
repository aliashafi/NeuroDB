import React, { useState, useEffect } from 'react';


function PatientShowPatientInfo(props) {
    const [renderEdit, setRenderEdit] = useState(false);
    const [researchId, setResearchId] = useState(props.patient.researchId);
    const [consent, setConsent] = useState(props.patient.consent);
    const [dateOfSurgery, setDateOfSurgery] = useState(props.patient.dateOfSurgery);
    
    const initBirthDate = 
        (props.patient.demographics) ? props.patient.demographics.birthDate : '';

    const initAge = (props.patient.demographics) ? props.patient.demographics.age : '';
    const initGender = (props.patient.demographics) ? props.patient.demographics.gender : '';
    const initLanguageDominance = (props.patient.demographics) ? props.patient.demographics.languageDominance : '';
    const initDominantHand = (props.patient.demographics) ? props.patient.demographics.dominantHand : '';
    const initNativeLanguage = (props.patient.demographics) ? props.patient.demographics.nativeLanguage : '';
    
    const [birthDate, setBirthDate] = useState(initBirthDate);
    const [age, setAge] = useState(initAge);
    const [gender, setGender] = useState(initGender);
    const [languageDominance, setLanguageDominance] = useState(initLanguageDominance);
    const [dominantHand, setDominantHand] = useState(initDominantHand);
    const [nativeLanguage, setNativeLanguage] = useState(initNativeLanguage);

    useEffect(() => {
        if (props.patient.demographics) {
            setResearchId(props.patient.researchId);
            setConsent(props.patient.consent);
            setDateOfSurgery(props.patient.dateOfSurgery);
            setBirthDate(props.patient.demographics.birthDate);
            setAge(props.patient.demographics.age);
            setGender(props.patient.demographics.gender);
            setLanguageDominance(props.patient.demographics.languageDominance);
            setDominantHand(props.patient.demographics.dominantHand);
            setNativeLanguage(props.patient.demographics.nativeLanguage);
        }
    }, [props.patient]);

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
            researchId,
            consent,
            dateOfSurgery,
            demographics: { 
                birthDate,
                age,
                gender,
                languageDominance,
                dominantHand,
                nativeLanguage 
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
        setResearchId(props.patient.researchId);
        setConsent(props.patient.consent);
        setDateOfSurgery(props.patient.dateOfSurgery);
        setBirthDate(initBirthDate);
        setAge(initAge);
        setGender(initGender);
        setLanguageDominance(initLanguageDominance);
        setDominantHand(initDominantHand);
        setNativeLanguage(initNativeLanguage);
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

    function handleResearchIdChange(e) {
        setResearchId(e.target.value);
    }
    function handleDateOfSurgeryChange(e) {
        setDateOfSurgery(e.target.value);
    }
    function handleBirthDateChange(e) {
        setBirthDate(e.target.value);
    }
    function handleAgeChange(e) {
        setAge(e.target.value);
    }
    function handleNativeLanguageChange(e) {
        setNativeLanguage(e.target.value);
    }
    function handleConsentToggle(e) {
        const val = (e.target.value === 'true') ? true : false;
        setConsent(val);
    }
    function handleGenderToggle(e) {
        setGender(e.target.value);
    }
    function handleDominantHandToggle(e) {
        setDominantHand(e.target.value);
    }
    function handleLanguageDominanceToggle(e) {
        setLanguageDominance(e.target.value);
    }


    function renderBasicInfo(){
        return (
            <div className='input-column'>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Research ID</div>
                <input onChange={handleResearchIdChange} className='inner-card__field-value' value={researchId} disabled={!renderEdit} />
            </div>
            
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Date of Surgery</div>
                <input onChange={handleDateOfSurgeryChange} className='inner-card__field-value' value={dateOfSurgery} disabled={!renderEdit} placeholder='MM/DD/YYYY'/>
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Birth Date</div>
                <input onChange={handleBirthDateChange} className='inner-card__field-value' value={birthDate} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Native Language</div>
                <input onChange={handleNativeLanguageChange} className='inner-card__field-value' value={nativeLanguage} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Age</div>
                <input onChange={handleAgeChange} className='inner-card__field-value' value={age} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Sex</div>
                    
                    <div className='radio-grouping'>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleGenderToggle} 
                                checked={(gender === 'M') ? 'checked' : ''} 
                                type="radio" 
                                name="gender" 
                                value='M' />
                            <label htmlFor="option"><span><span>✓</span></span></label>
                            <span className='radio-label'>Male</span>
                        </div>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleGenderToggle} 
                                checked={(gender === 'F') ? 'checked' : ''} 
                                type="radio" 
                                name="gender" 
                                value='F' />
                            <label htmlFor="option"><span><span>✓</span></span></label>    
                            <span className='radio-label'>Female</span>
                        </div>
                    </div>
                </div>

                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Hand</div>
                    
                    <div className='radio-grouping'>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleDominantHandToggle} 
                                checked={(dominantHand === 'L') ? 'checked' : ''} 
                                type="radio" 
                                name="dominantHand" 
                                value='L' />
                            <label htmlFor="option"><span><span>✓</span></span></label>
                            <span className='radio-label'>Left</span>
                        </div>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleDominantHandToggle} 
                                checked={(dominantHand === 'R') ? 'checked' : ''} 
                                type="radio" 
                                name="dominantHand" 
                                value='R' />
                            <label htmlFor="option"><span><span>✓</span></span></label>    
                            <span className='radio-label'>Right</span>
                        </div>
                    </div>

                </div>
                
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Language</div>
                    
                    <div className='radio-grouping'>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleLanguageDominanceToggle} 
                                checked={(languageDominance === 'L') ? 'checked' : ''} 
                                type="radio" 
                                name="languageDominance" 
                                value='L' />
                            <label htmlFor="option"><span><span>✓</span></span></label>
                            <span className='radio-label'>Left</span>
                        </div>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleLanguageDominanceToggle} 
                                checked={(languageDominance === 'R') ? 'checked' : ''} 
                                type="radio" 
                                name="languageDominance" 
                                value='R' />
                            <label htmlFor="option"><span><span>✓</span></span></label>    
                            <span className='radio-label'>Right</span>
                        </div>
                    </div>
                </div> 
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Consent</div>
                    
                    <div className='radio-grouping'>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleConsentToggle} 
                                checked={(consent) ? 'checked' : ''} 
                                type="radio" 
                                name="consent" 
                                value='true' />
                            <label htmlFor="option"><span><span>✓</span></span></label>
                            <span className='radio-label'>Signed</span>
                        </div>
                        <div className='radio-btn-container'>
                            <input 
                                disabled={!renderEdit}
                                onClick={handleConsentToggle} 
                                checked={(consent) ? '' : 'checked'} 
                                type="radio" 
                                name="consent" 
                                value='false' />
                            <label htmlFor="option"><span><span>✓</span></span></label>
                            <span className='radio-label'>Unsigned</span>
                        </div>
                    </div>
                </div> 
            </div>
        )
    };

    function handleCancelClick(e) {
        setRenderEdit(!renderEdit);
        setResearchId(props.patient.researchId);
        setConsent(props.patient.consent);
        setBirthDate(initBirthDate);
        setAge(initAge);
        setGender(initGender);
        setLanguageDominance(initLanguageDominance);
        setDominantHand(initDominantHand);
        setNativeLanguage(initNativeLanguage);

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
            );
        }
    }

    return (
        <div className='patient-show-inner-card'>
            {renderButton()}
            <div className='patient-show-inner-card__header'>Patient info</div>
            <div className='header-divider'></div>
            <div className='patient-show-inner-card__body'>
                
                <div className='patient-show-inner-card__info'>
                    {renderBasicInfo()}
                </div>
            </div>           

        </div>
    );
}

export default PatientShowPatientInfo;