import React from 'react';

class PatientIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className='patient-index-item-main' onClick={() => this.props.handleQuickView(this.props.id)}>
                <td>{this.props.patient._id}</td>
                <td>{this.props.patient.researchId}</td>
                <td>Age: {this.props.patient.demographics.age}</td>
                <td>Gender: {this.props.patient.demographics.gender}</td>
            </tr>
        )
    }
};

export default PatientIndexItem;