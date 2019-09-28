import React from 'react';
import '../../../css/form.scss'

class MedicalHistoryForm extends React.Component {

    constructor(props){
        super(props)
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
                                
                                value={this.props.medicalHistory.epilepsyDiagnosis}
                                onChange={this.props.handleChange}
                            />
                        </div>

                    </section>


                    <section className='inner-card__section-grouping'>
                        <label className="inner-card__field-label-checkbox" >Previous Resection

                        <div>
                                <div className="checkbox-container">
                                    Yes
                                <label className="checkbox-label">
                                        <input
                                            name="consent"
                                            value={true}
                                            onChange={this.props.handleChange}
                                            type="checkbox" />
                                        <span

                                            className="checkbox-custom rectangular"></span>
                                    </label>
                                </div>
                                <div className="checkbox-container">
                                    No
                                <label className="checkbox-label">
                                        <input
                                            name="consent"
                                            value={false}
                                            onChange={this.props.handleChange}
                                            type="checkbox" />
                                        <span className="checkbox-custom rectangular"></span>
                                    </label>
                                </div>
                            </div>
                        </label>

                        <label className="inner-card__field-label-checkbox" >NeuroPace
                            <div>
                                <div className="checkbox-container">
                                    Yes
                                <label className="checkbox-label">
                                        <input type="checkbox" name="" id="" />
                                        <span className="checkbox-custom rectangular"></span>
                                    </label>
                                </div>
                                <div className="checkbox-container">
                                    No
                                <label className="checkbox-label">
                                        <input type="checkbox" name="" id="" />
                                        <span className="checkbox-custom rectangular"></span>
                                    </label>
                                </div>
                            </div>
                        </label>

                    </section>


                </div>
            </div>)
        
    }
}

export default MedicalHistoryForm;
