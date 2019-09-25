import { connect } from 'react-redux';
import { fetchPatient, updatePatient } from '../../actions/patient_actions'; 
import PatientShow from './PatientShow';

const mapStateToProps = (state, ownProps) => {
    return {
        patient: state.entities.patients[ownProps.match.params.patientId] || {},
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPatient: id => dispatch(fetchPatient(id)),
        updatePatient: id => dispatch(updatePatient(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientShow);