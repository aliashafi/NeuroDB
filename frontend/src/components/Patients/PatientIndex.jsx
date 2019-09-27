import React from 'react';
import '../../css/patient_index.scss';
// import PatientIndexItem from './PatientIndexItem';
import PatientIndexSideBar from './PatientIndexSideBar';
import PatientIndexQuickView from './PatientIndexQuickView';
import PatientTable from './PatientTable';
import navBar from '../nav_bar';

class PatientIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: '',
            quickView: '',
            patients: [],
            sortStatus: 'unsorted'
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleQuickView = this.handleQuickView.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    componentDidMount() {
        this.props.fetchPatients();
    }

    handleClick() {
        if (this.state.component === '') {
            this.setState({component: <PatientIndexSideBar/>})
        } else {
            this.setState({component: ''})
        }
    }

    handleQuickView(id) {
        this.setState({quickView: <PatientIndexQuickView patient={this.props.patients[id]}/>})
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
                        <PatientTable patients={this.props.patients} sortBy={this.sortBy}/>
                    </div> 
                </div>
                
                {this.state.quickView}

            </div>
        )
    }
};

export default PatientIndex;