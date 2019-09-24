import React from 'react';


function PatientShowPatientInfo(props) {

    function renderBasicInfo(){
        
        if (Object.keys(props.patient).length) {
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div>ECID</div>
                    <div>{props.patient.researchId}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Consent</div>
                    <div>{props.patient.consent}</div>
                </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='inner-card__field-grouping'>
                        <div>ECID</div>
                        <div></div>
                    </div>
                    <div className='inner-card__field-grouping'>
                        <div>Consent</div>
                        <div></div>
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
                    <div>Birth Date</div>
                    <div>{birthDate}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Age</div>
                    <div>{age}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Gender</div>
                    <div>{gender}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Dominant Language</div>
                    <div>{languageDominance}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Dominant Hand</div>
                    <div>{dominantHand}</div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Native Language</div>
                    <div>{nativeLanguage}</div>
                </div>
                </>
            )
        } else {
            return (
                <>
                <div className='inner-card__field-grouping'>
                    <div>Birth Date</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Age</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Gender</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Dominant Language</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Dominant Hand</div>
                    <div></div>
                </div>
                <div className='inner-card__field-grouping'>
                    <div>Native Language</div>
                    <div></div>
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