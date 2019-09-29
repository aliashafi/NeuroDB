import React from 'react';
import '../../../css/form.scss'

class MedicalHistoryForm extends React.Component {

    constructor(props){
        super(props)

        this.handleResectionToggle = this.handleResectionToggle.bind(this);
        this.handleNeuroPace = this.handleNeuroPace.bind(this);
    }

    handleResectionToggle(e){
        const val = (e.target.value === 'true') ? true : false;
        this.props.updateForm("previousResection", val, "medicalHistory")
    }

    handleNeuroPace(e){
        const val = (e.target.value === 'true') ? true : false;
        this.props.updateForm("neuroPace", val, "medicalHistory")
    }

    render(){
        if (this.props.currentStep !== "medical history"){
            return null
        }
        return(
            <div className="patient-dem-container">
                <h1 className="patient-show-inner-card__header initial-header">Medical History</h1>
                <div className='header-divider'></div>
                <div className="patient-show-inner-card bigger flex-row">


                    <section className='inner-card__section-grouping'>
                        <div className='inner-card__field-grouping flex-size'>
                            <div className='inner-card__field-label'>BDI</div>
                            <input
                                className='inner-card__field-value'
                                type="text"
                                name="BDI"
                                id="medicalHistory"
                                value={this.props.medicalHistory.BDI}
                                onChange={this.props.handleChange}
                            />
                        </div>

                        <div className='inner-card__field-grouping flex-size'>
                            <div className='inner-card__field-label'>BAI</div>
                            <input
                                className='inner-card__field-value'
                                type="text"
                                name="BAI"
                                id="medicalHistory"
                                value={this.props.medicalHistory.BAI}
                                onChange={this.props.handleChange}
                            />
                        </div>

                        <div className='inner-card__field-grouping flex-size'>
                            <div className='inner-card__field-label'>Epilepsy Diagnosis</div>
                            <input
                                className='inner-card__field-value'
                                type="text"
                                name="epilepsyDiagnosis"
                                id="medicalHistory"
                                value={this.props.medicalHistory.epilepsyDiagnosis}
                                onChange={this.props.handleChange}
                            />
                        </div>

                    </section>


                    <section className='inner-card__section-grouping'>
                        <label className="inner-card__field-label-checkbox" >Previous Resection
                        <div className='radio-grouping'>
                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleResectionToggle}
                                        checked={(this.props.medicalHistory.previousResection) ? 'checked' : ''}
                                        type="radio"
                                        name="previousResection"
                                        value='true' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>Yes</span>
                                </div>

                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleResectionToggle}
                                        checked={(this.props.medicalHistory.previousResection) ? '' : 'checked'}
                                        type="radio"
                                        name="previousResection"
                                        value='false' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>No</span>
                                </div>
                            </div>
                        </label>

                        <label className="inner-card__field-label-checkbox" >NeuroPace
                            <div className='radio-grouping'>
                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleNeuroPace}
                                        checked={(this.props.medicalHistory.neuroPace) ? 'checked' : ''}
                                        type="radio"
                                        name="neuroPace"
                                        value='true' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>Yes</span>
                                </div>

                                <div className='radio-btn-container'>
                                    <input
                                        onChange={this.handleNeuroPace}
                                        checked={(this.props.medicalHistory.neuroPace) ? '' : 'checked'}
                                        type="radio"
                                        name="neuroPace"
                                        value='false' />
                                    <label htmlFor="option"><span><span>✓</span></span></label>
                                    <span className='radio-label'>No</span>
                                </div>
                            </div>
                        </label>

                    </section>


                </div>
            </div>)
        
    }
}

export default MedicalHistoryForm;
