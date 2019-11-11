import React from 'react';
import PatientShowSideNav from './PatientShowSubcomp/patient_show_side_nav';
import PatientCreateForm from './form/PatientCreateForm';
// import '../../css/patient_show.scss';
// import '../../css/_tackons.scss';

class PatientCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleCard: 'patient info',
        };

        this.handleVisibleCardChange = this.handleVisibleCardChange.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
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
                    handleVisibleCardChange={this.handleVisibleCardChange}
                    />
                
            </div>
        )
    }
}

export default PatientCreate;