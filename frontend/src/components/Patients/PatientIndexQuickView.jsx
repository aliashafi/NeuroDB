import React from 'react';

class PatientIndexQuickView extends React.Component {
    render() {
        return (
            <div className='quick-view-main'>
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
                F
                <br/>
                {this.props.patient.demographics.gender}
                <br/>
                Age: 
                <br/>
                20
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