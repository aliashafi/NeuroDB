import React from 'react';


class TaskForm extends React.Component {


    render() {
        if (this.props.currentStep !== "tasks") {
            return null;
        }
        return (
            <>
                <div className='patient-show-inner-card__header'>Tasks</div>
                <div className='header-divider'></div>
                <div className='patient-show-inner-card__body'>
                    <div className='task-item-details__header'>
                        <div className='development-notice'>
                            <i class="fas fa-shipping-fast coming-soon-icon"></i>
                            <p>Task Create/Edit functionalities are coming soon.</p>

                        </div>
                    
                    </div>
                    
                </div>
            </>
        );
    }

}
export default TaskForm;