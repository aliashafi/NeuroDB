import React from 'react';

class PatientShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPatient(this.props.match.params.patientId)
    }

    render() {
        return (
            <div>
                This is the Patient show page
            </div>
        )
    }
};

export default PatientShow;