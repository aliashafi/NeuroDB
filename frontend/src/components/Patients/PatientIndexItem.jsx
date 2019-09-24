import React from 'react';

class PatientIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        return (
            <div className='patient-index-item-main'>
                <div>{this.props.patient._id}</div>
                <div>{this.props.patient.researchId}</div>
                <div>Age: {this.props.patient.demographics.age}</div>
                <div>Gender: {this.props.patient.demographics.gender}</div>
            </div>
        )
    }
};

export default PatientIndexItem;