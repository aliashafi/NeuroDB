import React from 'react';
import '../../css/patient_table.scss'
// import PatientIndexItem from './PatientIndexItem';
import PatientIndexSideBar from './PatientIndexSubcomp/PatientIndexSideBar';
import PatientIndexQuickView from './PatientIndexSubcomp/PatientIndexQuickView';
import PatientTable from './PatientIndexSubcomp/PatientTable';

import navBar from '../nav_bar';
import { Agent } from 'https';

class PatientIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            slide: "false",
            notFound: false
        }

        this.toggleSlide = this.toggleSlide.bind(this)
        this.updatePatientsWithFilter = this.updatePatientsWithFilter.bind(this);
    }

    componentDidMount() {
        this.props.fetchPatients();
    }

    updatePatientsWithFilter(filteredPatients){
        if (filteredPatients.length == 0){
            this.setState({notFound: true})
        }else{
            this.setState({
            patients: filteredPatients,
            notFound: false
        })
        }

    }

    toggleSlide(){
        if (this.state.slide){
            this.openNav();
        }else{
            this.closeNav();
        }

        this.setState({
            slide: !this.state.slide
        })
    }

    openNav() {
        document.querySelector(".side-nav-container-index").style.width = "300px";
        // document.querySelector(".hold-advanced-search").style.marginLeft = "250px";
    }

    closeNav() {
        document.querySelector(".side-nav-container-index").style.width = "0";
        document.querySelector(".hold-advanced-search").style.marginLeft = "0";
    }

    render() {
        const patients = this.state.patients.length === 0 ? this.props.patients : this.state.patients

        console.log(this.state.patients)
        return (
            <div className="hold-advanced-search">
                {/* {this.state.component} */}

                <PatientIndexSideBar 
                    patients={this.props.patients}
                    updatePatientsWithFilter={this.updatePatientsWithFilter}
                    />
                
                <div className="patient-index-page">
                    <div className="patient-index-page__headers">
                        <h2>NeuroDB Database</h2>
                        <h3>All Patients</h3>
                    </div>

                    
                    <PatientTable 
                        patients={patients} 
                        handleQuickView={this.handleQuickView}
                        toggleSlide={this.toggleSlide}
                        notFound={this.state.notFound}

                        />
                    
                    {/* {this.state.quickView} */}
                </div>
                
            </div>
        )
    }
};

export default PatientIndex;