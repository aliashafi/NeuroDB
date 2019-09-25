import React from 'react';
import DemographicsForm from './DemographicsForm';
import MedicalHistoryForm from './MedicalHistoryForm'
import '../../../css/form.scss'
import '../../../css/button.scss'
class PatientCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: "demographics",
            researchId: undefined,
            dateOfSurgery: undefined,
            consent: undefined,
            demographics: {
                birthDate: undefined,
                age: undefined,
                gender: undefined,
                languageDominance: undefined,
                dominantHand: undefined,
                nativeLanguage: undefined
            },
            medication: {
                medicationName: undefined,
                medicationPurpose: undefined
            },
            medicalHistory: {
                BDI: undefined,
                BAI: undefined,
                epilepsyDiagnosis: undefined,
                previousResection: undefined,
                neuroPace: undefined
            },
            imaging: {
                patientID: undefined,
                electrodeMontage: []
            },
            relatedRecords: [],
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { id, name, value } = event.target
        if (id){
            this.setState({
                [id] : {
                    [name]: value
                }
            })

        }else{
            this.setState({
                [name]: value
            })  
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { researchId, dateOfSurgery, consent,
            demographics, medication, medicalHistory,
            imaging, relatedRecords
             } = this.state
        this.props.processForm(this.state)
        
    }


    render() {
        console.log(this.state)  
        return (
        <div className="card">
            <React.Fragment >

                <form className="card__form" onSubmit={this.handleSubmit}>
                    <DemographicsForm 
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        demographics={this.state}
                    />

                    <MedicalHistoryForm
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        medicalHistory={this.state.medicalHistory}
                    />
                    
                    <div id="button-submit">Add Patient
                        {/* <input type="submit" value="Add Patient"/> */}
                    </div>
                </form>

            </React.Fragment>
        </div>
        )
    }
};

export default PatientCreateForm;