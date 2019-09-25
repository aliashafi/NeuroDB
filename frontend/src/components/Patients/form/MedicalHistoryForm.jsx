import React from 'react';
import '../../../css/form.scss'

class MedicalHistoryForm extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        if (this.props.currentStep !== "medicalHistory"){
            return null
        }
        return(<div className="card__sub-form">

            <h1>Medical History</h1>
            <section>
                <label className="form__label">BDI
                    <input 
                        type="text" 
                        name="BDI" 
                        value={this.props.medicalHistory.BDI}
                        onChange={this.props.handleChange}
                        id="medicalHistory"
                        />
                </label>
            
                <label className="form__label" >BAI
                    <input 
                        type="text" 
                        name="BAI"
                        value={this.props.medicalHistory.BAI}
                        onChange={this.props.handleChange}
                        id="medicalHistory"/>
                </label>
            </section>

            <section>

                <label className="form__label" >Epilepsy Diagnosis
                    <input
                        type="text"
                        name="birthDate"
                        value={this.props.medicalHistory.epilepsyDiagnosis}
                        onChange={this.props.handleChange}
                        id="medicalHistory" />
                </label>

                    <label className="form__label__checkbox" >Previous Resection
                        <div>
                            <label> Yes
                                <input
                                    type="checkbox"
                                    name="previousResection"
                                    id="medicalHistory"
                                    onChange={this.props.handleChange}
                                    value={true} />
                            </label>
                            <label> No
                                <input
                                    type="checkbox"
                                    name="previousResection"
                                    onChange={this.props.handleChange}
                                    id="medicalHistory"
                                    value={false} />
                            </label>
                        </div>
                    </label>


                    <label className="form__label__checkbox" >NeuroPace
                        <div>
                            <label> Yes
                                <input
                                    type="checkbox"
                                    name="neuroPace"
                                    id="medicalHistory"
                                    onChange={this.props.handleChange}
                                    value={true} />
                            </label>
                            <label> No
                                <input
                                    type="checkbox"
                                    name="neuroPace"
                                    onChange={this.props.handleChange}
                                    id="medicalHistory"
                                    value={false} />
                            </label>
                        </div>
                    </label>

            </section>


        </div>)
        
    }
}

export default MedicalHistoryForm;
