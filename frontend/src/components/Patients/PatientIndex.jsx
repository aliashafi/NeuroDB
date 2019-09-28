import React from 'react';
import '../../css/patient_index.scss';
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
            component: '',
            quickView: '',
            patients: [],
            sortStatus: 'unsorted',
            
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleQuickView = this.handleQuickView.bind(this);
        this.sortBy = this.sortBy.bind(this);
        this.sortByDemographics = this.sortByDemographics.bind(this);
        this.closeQuickView = this.closeQuickView.bind(this);
    }

    componentDidMount() {
        this.props.fetchPatients();
    }

    handleClick() {
        if (this.state.component === '') {
            this.setState({component: <PatientIndexSideBar sortBy={this.sortBy} sortByDemographics={this.sortByDemographics}/>})
        } else {
            this.setState({component: ''})
        }
    }

    handleQuickView(index) {
        this.setState({quickView: <PatientIndexQuickView patient={this.props.patients[index]} closeQuickView={this.closeQuickView}/>})
    }

    closeQuickView() {
        this.setState({quickView: ''})
    }

    searchBy(filters){
        //filters will be an object with Name, Age
        let filteredPatients = []
        this.props.patient.forEach((patient, index) => {
            if (this.hasAnyLetters(patient.researchID, filters.researchID) && 
                this.hasAnyLetters(patient.demographics.gender, filters.demographics.gender)) filteredPatients.push(patient);
        })
        
    }

    hasAnyLetters(value, letters){
        if (letters === "") return true;
        return letters.split("").some(char => value.inclues(char))
    }

    sortBy(key) {
        let patients = this.props.patients;
        if (this.state.sortStatus === 'unsorted' || this.state.sortStatus === 'desc') {
            this.setState({
                patients: patients.sort(function(a, b) { 
                    if (a[key] < b[key]) {
                        return -1
                    } if (a[key] > b[key]) {
                        return 1
                    } else {
                        return 0
                    }
                })
            })
            this.setState({
                sortStatus: 'asc'
            })
        } else {
            this.setState({
                patients: patients.sort(function(a, b) {
                    if (b[key] < a[key]) {
                        return -1
                    } if (b[key] > a[key]) {
                        return 1
                    } else {
                        return 0
                    }
                })
            })
            this.setState({
                sortStatus: 'desc'
            })
        }
    }

    sortByDemographics(key) {
        let patients = this.props.patients;
        if (this.state.sortStatus === 'unsorted' || this.state.sortStatus === 'desc') {
            this.setState({
                patients: patients.sort(function(a, b) { 
                    if (a.demographics[key] < b.demographics[key]) {
                        return -1
                    } if (a.demographics[key] > b.demographics[key]) {
                        return 1
                    } else {
                        return 0
                    }
                })
            })
            this.setState({
                sortStatus: 'asc'
            })
        } else {
            this.setState({
                patients: patients.sort(function(a, b) {
                    if (b.demographics[key] < a.demographics[key]) {
                        return -1
                    } if (b.demographics[key] > a.demographics[key]) {
                        return 1
                    } else {
                        return 0
                    }
                })
            })
            this.setState({
                sortStatus: 'desc'
            })
        }
    }

    render() {
        return (
            <div className='patient-index-main'>

               {this.state.component}

                <button className='sidebar-trigger' onClick={this.handleClick}>
                    >
                </button>

                <div className='patient-index-main-body'>
                    <div className='patients-title'>
                        Patients
                    </div>
                    <div className='patient-index-item-container'>
                        <PatientTable patients={this.props.patients} handleQuickView={this.handleQuickView}/>
                    </div> 
                </div>
                
                {this.state.quickView}

            </div>
        )
    }
};

export default PatientIndex;