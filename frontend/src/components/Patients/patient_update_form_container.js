import { connect } from 'react-redux';
import { updatePatient } from '../../actions/patient_actions'; //???
import PatientUpdateForm  from './PatientUpdateForm';

const mapStateToProps = (state) => {
    return {
        formType: 'update'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (patient) => dispatch(updatePatient(patient)) //???
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientUpdateForm);