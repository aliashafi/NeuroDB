import React from 'react';

class PatientShowTaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        };
    }

    renderDetails() {
        if (this.state.showDetails) {
            return (
                <div className='task-item-details__wrap'>
                    <div className='task-item-details__field-grouping'>
                        <div>Participants</div>
                        <div>...list to be added...</div>
                    </div>
                    <div className='task-item-details__field-grouping'>
                        <div>Task Notes</div>
                        <div>{this.props.task.notes}</div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    handleToggleDetails() {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        return (
            <div className='task-item-container'>
                <div className='task-item-row'>
                    <div>{this.props.task.name}</div>
                    <div>{this.props.task.date}</div>
                    <div onClick={this.handleToggleDetails} className='btn'>Details</div>
                </div>
                {this.renderDetails()}
            </div>
        );
    }
};

export default PatientShowTaskItem;