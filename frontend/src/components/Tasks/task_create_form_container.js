import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import TaskCreateForm  from './TaskCreateForm';

const mapStateToProps = (state) => {
    return {
        formType: 'create'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (task) => dispatch(createTask(task))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreateForm);