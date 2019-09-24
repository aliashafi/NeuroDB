import React from 'react';
import TaskIndexItem from './TaskIndexItem';

class TaskIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTasks
    }

    render() {
        const tasks = this.props.tasks.map(task => {
            return (
                <TaskIndexItem task={task} ownProps={this.props} />
            )
        });

        return (
            <div>
                tasks
                {tasks}
            </div>
        )
    }
};

export default TaskIndex;