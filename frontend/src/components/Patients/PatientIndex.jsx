import React from 'react';
import '../../css/patient_index.scss';
import PatientIndexItem from './PatientIndexItem';
import PatientIndexSideBar from './PatientIndexSideBar';
import PatientIndexQuickView from './PatientIndexQuickView';

class PatientIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPatients();
    }

    render() {
        const patients = this.props.patients.map(patient => {
            return (
                <PatientIndexItem patient={patient} ownProps={this.props} />
            )
        });
       
        return (
            <div className='patient-index-main'>

                <PatientIndexSideBar />

                <div className='patient-index-main-body'>
                    <div className='patients-title'>
                        Patients
                    </div>
                    <div className='patient-index-item-container'>
                        {patients}
                    </div> 
                </div>
                
                <PatientIndexQuickView />

            </div>
        )
    }
};

export default PatientIndex;