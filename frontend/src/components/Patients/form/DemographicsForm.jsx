import React from 'react';
import Select from 'react-select'
import '../../../css/form.scss'

class DemographicsForm extends React.Component {

    constructor(props){
        super(props)

        this.handleConsentToggle = this.handleConsentToggle.bind(this);
        this.handleSexToggle = this.handleSexToggle.bind(this);
        this.handleLanguageDominance = this.handleLanguageDominance.bind(this)
        this.handleDominantHand = this.handleDominantHand.bind(this);
    }

    handleConsentToggle(e) {
        const val = (e.target.value === 'true') ? true : false;
        this.props.updateForm("consent", val)
    }

    handleSexToggle(e) {   
        const val = (e.target.value === 'M') ? 'M' : 'F';
        this.props.updateForm("gender", val, "demographics")
    }

    handleLanguageDominance(e){
        const val = (e.target.value === 'L') ? 'L' : 'R';
        this.props.updateForm("languageDominance", val, "demographics")
    }

    handleDominantHand(e) {
        const val = (e.target.value === 'L') ? 'L' : 'R';
        this.props.updateForm("dominantHand", val, "demographics")
    }

    render(){
        const options = [
            { value: 'english', name: 'nativeLanguage' },
            { value: 'spanish', name: 'nativeLanguage' },
            { value: 'mandarin', name: 'nativeLanguage' },
        ];


        if (this.props.currentStep !== "patient info") {
            return null
        }


        return(
        <div className="patient-dem-container">
            <h1 className="patient-show-inner-card__header initial-header">Demographics</h1>
            <div className='header-divider'></div>
                <div className="patient-show-inner-card bigger flex-row">


                    <section className='inner-card__section-grouping'>
                        <div className='inner-card__field-grouping flex-size'>
                            <div className='inner-card__field-label'>Research ID</div>
                            <input
                                className='inner-card__field-value'
                                type="text"
                                name="researchId"
                                placeholder="ECXX"
                                value={this.props.demographics.researchId}
                                onChange={this.props.handleChange}
                            />
                        </div>

                        <div className='inner-card__field-grouping flex-size'>
                            <div className='inner-card__field-label'>Date of Surgery</div>
                            <input
                                className='inner-card__field-value'
                                type="date"
                                name="dateOfSurgery"
                                value={this.props.demographics.dateOfSurgery}
                                onChange={this.props.handleChange}
                                id=""
                            />
                        </div>

                        <div className='inner-card__field-grouping flex-size'>
                            <div className='inner-card__field-label'>Birth Date</div>
                            <input
                                className='inner-card__field-value'
                                type="date"
                                name="birthDate"
                                value={this.props.demographics.demographics.birthDate}
                                onChange={this.props.handleChange}
                                id="demographics"
                            />
                        </div>

                        <div className='inner-card__field-grouping flex-size'>
                            <div className='inner-card__field-label'>Native Language</div>
                            <input
                                className='inner-card__field-value'
                                ttype="text"
                                name="nativeLanguage"
                                value={this.props.demographics.demographics.nativeLanguage}
                                onChange={this.props.handleChange}
                                id="demographics"
                            />
                        </div>

                </section> 


                    <section className='inner-card__section-grouping'>
                        <label className="inner-card__field-label-checkbox" >Consent
                    
                        <div>


                        <div className='radio-grouping'>
                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleConsentToggle}
                                        checked={(this.props.demographics.consent) ? 'checked' : ''}
                                        type="radio"
                                        name="consent"
                                        value='true' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>Signed</span>
                                </div>

                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleConsentToggle}
                                        checked={(this.props.demographics.consent) ? '' : 'checked'}
                                        type="radio"
                                        name="consent"
                                        value='false' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>Unsigned</span>
                                </div>
                            </div>
                        </div>
                    </label>

                        <label className="inner-card__field-label-checkbox" >Sex
                            <div className='radio-grouping'>
                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleSexToggle}
                                        checked={(this.props.demographics.demographics.gender === 'F') ? 'checked' : ''}
                                        type="radio"
                                        name="gender"
                                        value='F' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>F</span>
                                </div>

                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleSexToggle}
                                        checked={(this.props.demographics.demographics.gender === 'F') ? '' : 'checked'}
                                        type="radio"
                                        name="gender"
                                        value='M' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>M</span>
                                </div>
                            </div>
                        </label>

                        <label className="inner-card__field-label-checkbox" >Language Dominance
                            <div className='radio-grouping'>
                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleLanguageDominance}
                                        checked={(this.props.demographics.demographics.languageDominance === 'L') ? 'checked' : ''}
                                        type="radio"
                                        name="languageDominance"
                                        value='L' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>L</span>
                                </div>

                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleLanguageDominance}
                                        checked={(this.props.demographics.demographics.languageDominance === 'L') ? '' : 'checked'}
                                        type="radio"
                                        name="languageDominance"
                                        value='R' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>R</span>
                                </div>
                            </div>
                        </label>


                        <label className="inner-card__field-label-checkbox" >Dominant Hand
                            <div className='radio-grouping'>
                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleDominantHand}
                                        checked={(this.props.demographics.demographics.dominantHand === 'L') ? 'checked' : ''}
                                        type="radio"
                                        name="dominantHand"
                                        value='L' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>L</span>
                                </div>

                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleDominantHand}
                                        checked={(this.props.demographics.demographics.dominantHand === 'L') ? '' : 'checked'}
                                        type="radio"
                                        name="dominantHand"
                                        value='R' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>R</span>
                                </div>
                            </div>
                        </label>
                    </section>


            </div>
        </div>
        )
    }
}

export default DemographicsForm;
