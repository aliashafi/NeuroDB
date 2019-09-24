import React from 'react';
import PatientShowPatientInfo from './patient_show_patient_info';
import PatientShowImagingData from './patient_show_imaging_data';
import PatientShowMedicalHistory from './patient_show_medical_history';
import PatientShowMedication from './patient_show_medication';
import PatientShowTasks from './patient_show_tasks';


class PatientShowCard extends React.Component {

    renderRelevantCard() {
        let comp = <div></div>
        switch (this.props.visibleCard) {
            case 'patient info':
                comp = (
                    <PatientShowPatientInfo 
                        patient={this.props.patient}
                        updatePatient={this.props.updatePatient} />
                );
                break;
            case 'medication':
                comp = (
                    <PatientShowMedication 
                        patient={this.props.patient}
                        updatePatient={this.props.updatePatient} />
                );
                break;
            case 'medical history':
                comp = (
                    <PatientShowMedicalHistory 
                        patient={this.props.patient}
                        updatePatient={this.props.updatePatient} />
                );
                break;

            case 'imaging data':
                comp = (
                    <PatientShowImagingData 
                        patient={this.props.patient}
                        updatePatient={this.props.updatePatient} />
                );
                break;
            case 'tasks':
                comp = (
                    <PatientShowTasks 
                        patient={this.props.patient}
                        updatePatient={this.props.updatePatient} />
                );
                break;
            default:
                break;
        }
        return comp;
    }

    render() {
        return (
            <div>
                {this.renderRelevantCard()}
            </div>
        );
    }
}

export default PatientShowCard;