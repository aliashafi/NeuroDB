import React from 'react';
import { EventEmitter } from 'events';

class PatientTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredPatients: []
        }
        this.handleRIDSearch = this.handleRIDSearch.bind(this);
        this.handlePIDSearch = this.handlePIDSearch.bind(this);
        this.handleGenderSearch = this.handleGenderSearch.bind(this);
        this.handleAgeSearch = this.handleAgeSearch.bind(this);
    }

    componentDidMount() {
        this.setState({
            filteredPatients: this.props.patients
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredPatients: nextProps.patients
        })
    }

    handleRIDSearch(event) {
        event.preventDefault();
        let currentList;
        let newList;
        if (event.target.value !== '') {
            currentList = this.state.filteredPatients;
            newList = currentList.filter(patient => {
                let lowercased = patient.researchId.toLowerCase();
                let filtered = event.target.value.toLowerCase();
                return lowercased.includes(filtered);
            })
        } else {
            newList = this.props.patients
        }
        this.setState({
            filteredPatients: newList
        })
    }

    handlePIDSearch(event) {
        let currentList;
        let newList;
        if (event.target.value !== '') {
            currentList = this.state.filteredPatients;
            newList = currentList.filter(patient => {
                let lowercased = patient._id.toLowerCase();
                let filtered = event.target.value.toLowerCase();
                return lowercased.includes(filtered);
            })
        } else {
            newList = this.props.patients
        }
        this.setState({
            filteredPatients: newList
        })
    }

    handleGenderSearch(event) {
        let currentList;
        let newList;
        if (event.target.value !== '') {
            currentList = this.state.filteredPatients;
            newList = currentList.filter(patient => {
                let lowercased = patient.demographics.gender.toLowerCase();
                let filtered = event.target.value.toLowerCase();
                return lowercased.includes(filtered);
            })
        } else {
            newList = this.props.patients
        }
        this.setState({
            filteredPatients: newList
        })
    }

    handleAgeSearch(event) {
        let currentList;
        let newList;
        if (event.target.value !== '') {
            currentList = this.state.filteredPatients;
            newList = currentList.filter(patient => {
                let lowercased = patient.demographics.age.toString();
                let filtered = event.target.value
                return lowercased.includes(filtered);
            })
        } else {
            newList = this.props.patients
        }
        this.setState({
            filteredPatients: newList
        })
    }

    render() {

        return (
            <div>
                <div className='search-container'>
                    Search by
                    <input className='search-box' type="text" placeholder='Patient ID' onChange={this.handlePIDSearch}/>
                    <input className='search-box' type="text" placeholder='Research ID' onChange={this.handleRIDSearch}/>
                    <input className='search-box' type="text" placeholder='Age' onChange={this.handleAgeSearch}/>
                    <input className='search-box' type="text" placeholder='Gender (M/F)' onChange={this.handleGenderSearch}/>
                </div>
                
                <div className='patient-table-main-container'>
                    <div className='patient-table-headers'>
                        <div className='table-header1'>Research ID</div>
                        <div className='table-header2'>Patient ID</div>
                        <div className='table-header3'>Gender</div>
                        <div className='table-header4'>Age</div>
                        <div className='table-header5'>Dominant hand</div>
                        <div className='table-header6'>Native language</div>
                        <div className='table-header7'>Date of surgery</div>
                    </div>
                    <div>
                        {this.state.filteredPatients.map((patient, index) => (
                            <div  className='patient-table-body' onClick={() => this.props.handleQuickView(this.props.patients.indexOf(this.state.filteredPatients[index]))}>
                                <div className='table-text1'>{patient.researchId}</div>
                                <div className='table-text2'>{patient._id}</div>
                                <div className='table-text3'>{patient.demographics.gender}</div>
                                <div className='table-text4'>{patient.demographics.age}</div>
                                <div className='table-text5'>{patient.demographics.dominantHand}</div>
                                <div className='table-text6'>{patient.demographics.nativeLanguage}</div>
                                <div className='table-text7'>{patient.dateOfSurgery}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}

export default PatientTable;