import React from 'react';
import PatientIndexItem from './PatientIndexItem';

class PatientIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPatients
    }

    render() {
        const patients = this.props.patients.map(patient => {
            return (
                <PatientIndexItem patient={patient} ownProps={this.props} />
            )
        });

        return (
            <div>
                This is the Patient Index
                {patients} 
            </div>
        )
    }
};

export default PatientIndex;