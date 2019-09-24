import { connect } from 'react-redux';
import { updateTask } from '../../actions/task_actions';
import TaskUpdateForm from './TaskUpdateForm';

const mapStateToProps = (state) => {
    return {
        formType: 'update'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (taskId, taskData) => dispatch(updateTask(taskId, taskData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskUpdateForm);