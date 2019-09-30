import React from 'react';
import AddMedicationForm from './AddMedicationForm'
import '../../../css/form.scss'

class MedicationForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numMeds: [0],
            medication: {}
        }
        this.addMed = this.addMed.bind(this);
        this.deleteMed = this.deleteMed.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.props.updateForm("medication", Object.values(this.state))
        }
    }

    addMed() {
        this.state.numMeds.push(1 + this.state.numMeds[this.state.numMeds.length - 1]);
        this.setState({ numMeds: this.state.numMeds });
    }

    updateState(med, idx) {
        let newMed = Object.assign({}, this.state.medication, { [idx]: med })
        this.setState({ medication: newMed })
        
    }

    deleteMed(num) {
        let newState = this.state.numMeds.slice(0, num)
        if (this.state.numMeds.length === num) {
            let remove = Object.assign({}, this.state.medication);
            delete remove[num];
            this.setState({ numMeds: newState, medication: remove });
        } else {
            let remove = Object.assign({}, this.state.medication);
            delete remove[num];
            newState = this.state.numMeds.slice(0, num).concat(this.state.numMeds.slice(num + 1));
            this.setState({ numMeds: newState, medication: remove });
        }
    }

    render() {
        if (this.props.currentStep !== "medication") {
            return null
        }

        let addMedication = this.state.numMeds.map(medForm => {
            return (
                <AddMedicationForm
                    key={medForm}
                    num={medForm}
                    deleteMed={this.deleteMed}
                    updateState={this.updateState}
                />
            )
        })


        return(
            <div className="patient-dem-container">
                <h1 className="patient-show-inner-card__header initial-header">Medication</h1>
                <div className='header-divider'></div>



                <div className="patient-add-imaging">
                    <div className="left-side">
                        <div>
                            <h1>Add Medication</h1><span><i onClick={() => this.addMed()} className="far fa-plus-square clickable"></i></span>
                        </div>
                    
                    <div className="left-side__electrode-form">

                        <div>
                            {addMedication}
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default MedicationForm;