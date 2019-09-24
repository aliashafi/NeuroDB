import { connect } from 'react-redux';
import { fetchPatient } from '../../actions/patient_actions'; //??????
import PatientShow from './PatientShow';

const mapStateToProps = (state, ownProps) => {
    return {
        patient: state.entities.patients[ownProps.match.params.patientId] || {}
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPatient: (id) => dispatch(fetchPatient(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientShow);