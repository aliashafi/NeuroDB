import React from 'react';
import PatientShowCard from './PatientShowSubcomp/patient_show_card';
import PatientShowSideNav from './PatientShowSubcomp/patient_show_side_nav';
import '../../css/patient_show.scss';
import '../../css/_tackons.scss';

class PatientShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleCard: 'patient info',
        };

        this.handleVisibleCardChange = this.handleVisibleCardChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchPatient(this.props.match.params.patientId);
        // 5d898eaf55c6d054529b7853
        // this.props.fetchPatient('5d8e4c79e9b0122dd7c44ad9');
        const navIdSuffix = this.state.visibleCard.split(' ').join('-');
        setTimeout( () => {
            const navItem = document.querySelector(`#side-nav-patient-info`);
            navItem.classList.add('nav-selected');

        }, 800);
    }
    componentDidUpdate(prevProp, prevState) {
        if (prevState.visibleCared !== this.state.visibleCard) {
            const navIdSuffix = this.state.visibleCard.split(' ').join('-');
            const navItem = document.querySelector(`#side-nav-${navIdSuffix}`);
            const prevNavIdSuffix = prevState.visibleCard.split(' ').join('-');
            const prevItem = document.querySelector(`#side-nav-${prevNavIdSuffix}`);
            navItem.classList.add('nav-selected');
            prevItem.classList.remove('nav-selected');
        }
    }

    handleVisibleCardChange (e, card) {
        this.setState({ visibleCard: card });

    }

    render() {
        return (
            <div className='patient-show-page-container'>
                <PatientShowSideNav 
                    handleVisibleCardChange={this.handleVisibleCardChange}/>
                <PatientShowCard 
                    visibleCard={this.state.visibleCard}
                    patient={this.props.patient}
                    updatePatient={this.props.updatePatient} />
            </div>
        )
    }
};

export default PatientShow;