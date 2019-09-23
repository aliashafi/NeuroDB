import React from 'react';

class TaskShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTask(this.props.match.params.taskId)
    }

    render() {
        return (
            <div>
                This is the Task show page
            </div>
        )
    }
};

export default TaskShow;