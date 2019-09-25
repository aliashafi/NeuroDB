import React from 'react';
import PatientShowCard from './PatientShowSubcomp/patient_show_card';
import PatientShowSideNav from './PatientShowSubcomp/patient_show_side_nav';

class PatientShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleCard: 'patient info',
        };

        this.handleVisibleCardChange = this.handleVisibleCardChange.bind(this);
    }

    componentDidMount() {
        // this.props.fetchPatient(this.props.match.params.patientId);
        // 5d898eaf55c6d054529b7853
        this.props.fetchPatient('5d898eaf55c6d054529b7853');
    }

    handleVisibleCardChange (e, card) {
        this.setState({ visibleCard: card });
    }

    render() {
        return (
            <div className='patient-show-page-container'>
                <PatientShowSideNav 
                    handleVisibleCardChange={this.handleVisibleCardChange}/>
                <PatientShowCard 
                    visibleCard={this.state.visibleCard}
                    patient={this.props.patient}
                    updatePatient={this.props.updatePatient} />
            </div>
        )
    }
};

export default PatientShow;