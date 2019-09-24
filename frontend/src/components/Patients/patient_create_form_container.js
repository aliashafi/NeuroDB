import { connect } from 'react-redux';
import { createPatient } from '../../actions/patient_actions';
import PatientCreateForm  from './PatientCreateForm';

const mapStateToProps = (state) => {
    return {
        formType: 'create'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (patient) => dispatch(createPatient(patient)) //???
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientCreateForm);