import React from 'react';

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
            <>
                <div className='patient-show-inner-card__header'>
                    <div>Medical History</div>
                    <div className='header-divider'></div>
                </div>
                <div className="patient-show-inner-card__body">

                    
                    <div className='patient-show-inner-card__info'>
                        <div className='input-column'>
                            <div className='inner-card__field-grouping'>
                                <div className='inner-card__field-label'>BDI</div>
                                <input
                                    className='inner-card__field-value editable'
                                    type="text"
                                    name="BDI"
                                    id="medicalHistory"
                                    value={this.props.medicalHistory.BDI}
                                    onChange={this.props.handleChange}
                                />
                            </div>

                            <div className='inner-card__field-grouping'>
                                <div className='inner-card__field-label'>BAI</div>
                                <input
                                    className='inner-card__field-value editable'
                                    type="text"
                                    name="BAI"
                                    id="medicalHistory"
                                    value={this.props.medicalHistory.BAI}
                                    onChange={this.props.handleChange}
                                />
                            </div>

                            <div className='inner-card__field-grouping'>
                                <div className='inner-card__field-label'>Epilepsy Diagnosis</div>
                                <input
                                    className='inner-card__field-value editable'
                                    type="text"
                                    name="epilepsyDiagnosis"
                                    id="medicalHistory"
                                    value={this.props.medicalHistory.epilepsyDiagnosis}
                                    onChange={this.props.handleChange}
                                />
                            </div>
                        
                            <div className='inner-card__field-grouping'>
                                <div className="inner-card__field-label" >Previous Resection</div>
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
                            </div>
                            <div className='inner-card__field-grouping'>
                                <div className="inner-card__field-label" >NeuroPace</div>
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
                            </div>
                        </div>

                    </div>
                </div>
            </>)
        
    }
}

export default MedicalHistoryForm;
