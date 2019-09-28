import React from 'react';
import '../../css/patient_index.scss';
// import PatientIndexItem from './PatientIndexItem';
import PatientIndexSideBar from './PatientIndexSubcomp/PatientIndexSideBar';
import PatientIndexQuickView from './PatientIndexSubcomp/PatientIndexQuickView';
import PatientTable from './PatientIndexSubcomp/PatientTable';
import navBar from '../nav_bar';

class PatientIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: '',
            quickView: '',
            patients: [],
            sortStatus: 'unsorted',
            arrow: '>'
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
        if (this.state.arrow === '>') {
            this.setState({arrow: '<'})
        } else {
            this.setState({arrow: '>'})
        }
    }

    handleQuickView(index) {
        this.setState({quickView: <PatientIndexQuickView patient={this.props.patients[index]} closeQuickView={this.closeQuickView}/>})
    }

    closeQuickView() {
        this.setState({quickView: ''})
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
            <div className='index-page-main-container'>
                {this.state.component}

                <button className='sidebar-trigger' onClick={this.handleClick}>
                    {this.state.arrow}
                </button>
                <div className='patient-index-main'>
                    <div className='patient-index-main-body'>
                        <div className='patients-title'>
                            PATIENTS
                        </div>
                        <div className='header-divider'></div>
                        <div className='patient-index-item-container'>
                            <PatientTable patients={this.props.patients} handleQuickView={this.handleQuickView}/>
                        </div> 
                    </div>
                </div>

                {this.state.quickView}
                
            </div>
        )
    }
};

export default PatientIndex;