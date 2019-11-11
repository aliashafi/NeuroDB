import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../../actions/task_actions';
import PatientShowTaskItem from './patient_show_task_item';

class PatientShowTasks extends React.Component {


    render() {

        return (
            <div className='patient-show-inner-card'>
                <div className='patient-show-inner-card__header'>Tasks</div>
                <div className='header-divider'></div>
                <div className='patient-show-inner-card__body'>
                    <div className='task-item-details__header'>
                        <div className='development-notice'>
                            <i class="fas fa-shipping-fast coming-soon-icon"></i>
                            <p>Task Create/Edit functionalities are coming soon.</p>

                        </div>
                        {/* <div>Task Name</div>
                        <div>Date conducted</div> */}
                    </div>
                    {this.props.tasks.forEach((task, i) => (
                        <PatientShowTaskItem 
                            key={i}
                            task={task} />
                    ))}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    patientId: ownProps.patient._id,
    tasks: Object.values(state.entities.tasks),
})
const mapDispatchToProps = dispatch => ({
    fetchTasks: patientId => dispatch(fetchTasks(patientId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PatientShowTasks);

//maybe need to fetch users(researcher participant) and tasks earlier 