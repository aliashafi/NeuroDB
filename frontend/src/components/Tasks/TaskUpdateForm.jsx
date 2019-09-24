import React from 'react'

class TaskUpdateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This is the TaskUpdate Form
                <form>
                    <input type="text" value='name'/>
                </form>
            </div>
        )
    }
};

export default TaskUpdateForm;