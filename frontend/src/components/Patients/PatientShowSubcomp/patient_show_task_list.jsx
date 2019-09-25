import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../../actions/task_actions';
import PatientShowTaskItem from './patient_show_task_item';

class PatientShowTasks extends React.Component {


    render() {
        debugger
        return (
            <div className='patient-show-inner-card'>
                <div className='task-item-details__header'>
                    <div>Task Name</div>
                    <div>Date conducted</div>
                </div>
                {this.props.tasks.forEach((task, i) => (
                    <PatientShowTaskItem 
                        key={i}
                        task={task} />
                ))}

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