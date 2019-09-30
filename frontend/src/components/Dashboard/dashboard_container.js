import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchPatients } from '../../actions/patient_actions';


const mapStateToProps = (state) => ({
    
    patients: (Object.values(state.entities.patients)) ? Object.values(state.entities.patients) : [],
});

const mapDispatchToProps = dispatch => ({
    fetchPatients: () => dispatch(fetchPatients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);