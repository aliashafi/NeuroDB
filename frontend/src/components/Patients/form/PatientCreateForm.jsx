import React from 'react';
import DemographicsForm from './DemographicsForm';
import MedicalHistoryForm from './MedicalHistoryForm'
import ImagingForm from './ImagingForm'
import MedicationForm from './MedicationForm'
import '../../../css/form.scss'
import '../../../css/button.scss'
class PatientCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: this.props.visibleCard,
            researchId: "",
            dateOfSurgery: "",
            consent: false,
            demographics: {
                birthDate: "",
                age: "",
                gender: "",
                languageDominance: "",
                dominantHand: "",
                nativeLanguage: ""
            },
            medication: {
                medicationName: "",
                medicationPurpose: ""
            },
            medicalHistory: {
                BDI: "",
                BAI: "",
                epilepsyDiagnosis: "",
                previousResection: false,
                neuroPace: false
            },
            imaging: {
                electrodeMontage: []
            },
            relatedRecords: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // debugger
        const { id, name, value } = event.target
        if (id){
            let newSubState = this.state[id]
            newSubState[name] = value
            this.setState({ [id]: newSubState })

        }else{
            this.setState({
                [name]: value
            })  
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const patient = Object.assign({}, this.state)
        delete patient["currentStep"]
        // const { researchId, dateOfSurgery, consent,
        //     demographics, medication, medicalHistory,
        //     imaging, relatedRecords
        //      } = this.state
        console.log(patient)
        this.props.processForm(patient)
        
    }

    updateForm(key, value, parent){
        // debugger
        if (!parent){
            this.setState({[key]: value});
        }else{
            let newSubState = this.state[parent]
            newSubState[key] = value
            this.setState({[parent]: newSubState});
        }
    }


    render() {
    //    console.log(this.state.imaging)
        return (
            <div className="patient-show-card std-shadow">
            <React.Fragment >

                <form className="card__form" onSubmit={this.handleSubmit}>
                    <DemographicsForm 
                        currentStep={this.props.visibleCard}
                        handleChange={this.handleChange}
                        demographics={this.state}
                        updateForm={this.updateForm}
                    />

                    <MedicalHistoryForm
                        currentStep={this.props.visibleCard}
                        handleChange={this.handleChange}
                        medicalHistory={this.state.medicalHistory}
                        updateForm={this.updateForm}
                    />

                    <ImagingForm
                        currentStep={this.props.visibleCard}
                        handleChange={this.handleChange}
                        imaging={this.state.imaging}
                        updateForm={this.updateForm}
                    />

                    <MedicationForm
                        currentStep={this.props.visibleCard}
                        handleChange={this.handleChange}
                        imaging={this.state.imaging}
                        updateForm={this.updateForm}
                    />
                    
                    <div onClick={this.handleSubmit} id="button-submit">Add Patient
                        {/* <input type="submit" value="Add Patient"/> */}
                    </div>
                </form>

            </React.Fragment>
        </div>
        )
    }
};

export default PatientCreateForm;