import React from 'react';

class PatientIndexQuickView extends React.Component {

    renderTasks () {

    }

    render() {
        return (
            <div className='quick-view-main'>
                <div className='quick-view-close' onClick={this.props.closeQuickView}>close</div>
                <br/>
                <br/>
                Patient ID: 
                <br/>
                {this.props.patient._id}
                <br/>
                <br/>
                Research ID:
                <br/>
                {this.props.patient.researchId}
                <br/>
                <br/>
                Sex: 
                <br/>
                {this.props.patient.demographics.gender}
                <br/>
                <br/>
                Age: 
                <br/>
                {this.props.patient.demographics.age}
                <br/>
                <br/>
                Last visited:
                <br/>
                7/1/19
                <br/>
                <br/>
                Tasks: 
                <br/>
                None
                <br/>
                {this.props.patient.tasks}
                <br/>
                View full profile
            </div>
        )
    }
};

export default PatientIndexQuickView;