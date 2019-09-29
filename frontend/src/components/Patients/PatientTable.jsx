import React from 'react';
import { EventEmitter } from 'events';

class PatientTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredPatients: [],
            filteredParams: [],
            filteredRID: '',
            filteredAge: ''
        }
        this.handlePIDSearch = this.handlePIDSearch.bind(this);
        this.handleRIDSearch = this.handleRIDSearch.bind(this);
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
                <div>
                    <input type="text" placeholder='Search by Patient ID' onChange={this.handlePIDSearch}/>
                    <input type="text" placeholder='Search by Research ID' onChange={this.handleRIDSearch}/>
                    <input type="text" placeholder='Search by Age' onChange={this.handleAgeSearch}/>
                    <select name="Search by Gender" onChange={this.handleGenderSearch}>
                        <option value="search by gender" selected disabled>Search by Gender</option>
                        <option value="m">M</option>
                        <option value="f">F</option>
                        <option value="">All</option>
                    </select>
                    <button>Clear all</button>
                </div>
                
                    
                    <div>
                        <div>
                            <h3>Patient ID</h3>
                            <h3>Research ID</h3>
                            <h3>Age</h3>
                            <h3>Gender</h3>
                        </div>
                        
                        {this.state.filteredPatients.map((patient, index) => (
                            <div onClick={() => this.props.handleQuickView(index)}>
                                <div>{patient._id}</div>
                                <div>{patient.researchId}</div>
                                <div>{patient.demographics.age}</div>
                                <div>{patient.demographics.gender}</div>
                            </div>
                        ))}
                    </div>
                    

            </div>
        )
    }
}

export default PatientTable;