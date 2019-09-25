import React from 'react';


function PatientShowPatientInfo(props) {

    function renderBasicInfo(){
        
        if (Object.keys(props.patient).length) {
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>ECID</div>
                    <div className='inner-card__field-value'>{props.patient.researchId}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Consent</div>
                    <div className='inner-card__field-value'>{props.patient.consent}</div>
                </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='inner-card__field-grouping'>
                        <div className='inner-card__field-label'>ECID</div>
                        <div className='inner-card__field-value'></div>
                    </div>
                    <div className='inner-card__field-grouping'>
                        <div className='inner-card__field-label'>Consent</div>
                        <div className='inner-card__field-value'></div>
                    </div>
                </>
            )
        }
    };

    function renderDemographics(){
        if (Object.keys(props.patient).length && props.patient.demographics) {
            const { birthDate, age, gender, languageDominance, dominantHand, nativeLanguage } = props.patient.demographics;

            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Birth Date</div>
                    <div className='inner-card__field-value'>{birthDate}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Age</div>
                    <div className='inner-card__field-value'>{age}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Gender</div>
                    <div className='inner-card__field-value'>{gender}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Language</div>
                    <div className='inner-card__field-value'>{languageDominance}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Hand</div>
                    <div className='inner-card__field-value'>{dominantHand}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Native Language</div>
                    <div className='inner-card__field-value'>{nativeLanguage}</div>
                </div>
                </>
            )
        } else {
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Birth Date</div>
                    <div className='inner-card__field-value'></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Age</div>
                    <div className='inner-card__field-value'></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Gender</div>
                    <div className='inner-card__field-value'></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Language</div>
                    <div className='inner-card__field-value'></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Dominant Hand</div>
                    <div className='inner-card__field-value'></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div className='inner-card__field-label'>Native Language</div>
                    <div className='inner-card__field-value'></div>
                </div>
                </>
            )
        }
    };


    return (
        <div className='patient-show-inner-card'>
            <h2>Patient info card</h2>
            {renderBasicInfo()}
            {renderDemographics()}            

        </div>
    );
}

export default PatientShowPatientInfo;