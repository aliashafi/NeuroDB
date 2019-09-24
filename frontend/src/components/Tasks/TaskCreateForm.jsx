import React from 'react'

class TaskCreateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This is the Task Create Form
                <form>
                    <input type="text" value='name'/>
                </form>
            </div>
        )
    }
};

export default TaskCreateForm;