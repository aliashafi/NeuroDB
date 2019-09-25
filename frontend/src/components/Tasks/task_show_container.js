import { connect } from 'react-redux';
import { fetchTask } from '../../actions/task_actions';
import TaskShow from './TaskShow';

const mapStateToProps = (state, ownProps) => {
    return {
        task: state.entities.tasks[ownProps.match.params.taskId] || {}
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTask: (id) => dispatch(fetchTask(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskShow);