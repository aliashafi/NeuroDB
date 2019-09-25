import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/task_actions';
import TaskIndex from './TaskIndex';

const mapStateToProps = (state) => {
    return {
        tasks: Object.keys(state.entities.tasks).map((id) => state.entities.tasks[id])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: () => dispatch(fetchTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);