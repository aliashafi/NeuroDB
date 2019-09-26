import React from 'react';
import PatientShowSideNav from './PatientShowSubcomp/patient_show_side_nav';
import PatientCreateForm from './form/PatientCreateForm';
import '../../css/patient_show.scss';
import '../../css/_tackons.scss';

class PatientCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleCard: 'patient info',
        };

        this.handleVisibleCardChange = this.handleVisibleCardChange.bind(this);
    }

    handleVisibleCardChange(e, card) {
        this.setState({ visibleCard: card });

    }

    render(){
        return (
            <div className='patient-show-page-container'>
                <PatientShowSideNav
                    handleVisibleCardChange={this.handleVisibleCardChange} />
                <PatientCreateForm 
                    visibleCard={this.state.visibleCard}
                    processForm={this.props.processForm}
                    />
                
            </div>
        )
    }
}

export default PatientCreate;