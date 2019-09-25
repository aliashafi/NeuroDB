import { connect } from 'react-redux';
import { fetchPatients } from '../../actions/patient_actions'; //???
import PatientIndex from './PatientIndex';

const mapStateToProps = (state) => {
    return {
        patients: Object.values(state.entities.patients)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPatients: () => dispatch(fetchPatients())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientIndex);