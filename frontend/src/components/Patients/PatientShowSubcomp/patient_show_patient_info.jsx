import React, { useState, useEffect } from 'react';
import PlaceholderBrainProfile from '../../../images/placeholder_rotating_brain.gif';


function PatientShowPatientInfo(props) {
    const [renderEdit, setRenderEdit] = useState(false);
    const [researchId, setResearchId] = useState(props.patient.researchId);
    const [consent, setConsent] = useState(props.patient.consent);
    
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
        //
        // props.updatePatient(data);
    }

    function handleResearchIdChange(e) {
        setResearchId(e.target.value);
    }
    function handleConsentChange(e) {
        setConsent(e.target.value);
    }
    function handleBirthDateChange(e) {
        setBirthDate(e.target.value);
    }
    function handleAgeChange(e) {
        setAge(e.target.value);
    }
    function handleGenderChange(e) {
        setGender(e.target.value);
    }
    function handleLanguageDominanceChange(e) {
        setLanguageDominance(e.target.value);
    }
    function handleDominantHandChange(e) {
        setDominantHand(e.target.value);
    }
    function handleNativeLanguageChange(e) {
        setNativeLanguage(e.target.value);
    }


    function renderBasicInfo(){
        return (
            <>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Research ID</div>
                <input onChange={handleResearchIdChange} className='inner-card__field-value' value={researchId} disabled={!renderEdit} />
            </div>
            <div className='inner-card__field-grouping'>
                <div className='inner-card__field-label'>Consent</div>
                <input onChange={handleConsentChange} className='inner-card__field-value' value={consent} disabled={!renderEdit} />
            </div>
            </>
        )
    };

    function renderDemographics(){
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Birth Date</div>
                    <input onChange={handleBirthDateChange} className='inner-card__field-value' value={birthDate} disabled={!renderEdit} />
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Age</div>
                    <input onChange={handleAgeChange} className='inner-card__field-value' value={age} disabled={!renderEdit} />
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Gender</div>
                    <input onChange={handleGenderChange} className='inner-card__field-value' value={gender} disabled={!renderEdit} />
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Language</div>
                    <input onChange={handleLanguageDominanceChange} className='inner-card__field-value' value={languageDominance} disabled={!renderEdit} />
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Hand</div>
                    <input onChange={handleDominantHandChange} className='inner-card__field-value' value={dominantHand} disabled={!renderEdit} />
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Native Language</div>
                    <input onChange={handleNativeLanguageChange} className='inner-card__field-value' value={nativeLanguage} disabled={!renderEdit} />
                </div>
                </>
            )
       
    };

    function renderButton() {
        if (!renderEdit) {
            return <div onClick={handleEditClick} className='btn btn--card'>Edit</div>
        } else {
            return <div onClick={handleUpdateClick} className='btn btn--card'>Update</div>
        }
    }

    return (
        <div className='patient-show-inner-card'>
            {renderButton()}
            <div className='patient-show-inner-card__header'>Patient info</div>
            <div className='header-divider'></div>
            <div className='patient-show-inner-card__body'>
                <div className='patient-show-inner-card__profile-img'><img src={PlaceholderBrainProfile} /></div>
                <div className='patient-show-inner-card__info'>
                    {renderBasicInfo()}
                    {renderDemographics()} 
                </div>
            </div>           

        </div>
    );
}

export default PatientShowPatientInfo;