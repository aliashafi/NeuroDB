import React from 'react';
import { EventEmitter } from 'events';

class PatientTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredPatients: [],
            filters: {
                researchId: '',
                age: '',
            }
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

    updateRIDParams(event) {
        if (event.target.value !== '') {
            this.setState({RIDParams: event.target.value})
        }
    }

    updateAgeParams(event) {
        if (event.target.value !== '') {
            this.setState({ageParams: event.target.value})
        }
    }

    handleSearch() {
        let filteredPatients = [];
        let patients = this.props.patients.filter(patient => {
            Object.keys(this.state.filters).filter(param => {
                if (this.state.filters[param] !== '') {
                    return patient[param].toLowerCase().includes()
                } 
            })
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
                <div>
                    <input type="text" placeholder='Search by Patient ID' onChange={this.handlePIDSearch}/>
                    <input type="text" placeholder='Search by Research ID' onChange={this.handleRIDSearch}/>
                    <input type="text" placeholder='Search by Age' onChange={this.handleAgeSearch}/>
                    <input type="text" placeholder='Search by Gender (M/F)' onChange={this.handleGenderSearch}/>
                    <button>Clear all</button>
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Research ID</th>
                            <th>Date of surgery</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Dominant hand</th>
                            <th>Native language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredPatients.map((patient, index) => (
                            <tr onClick={() => this.props.handleQuickView(this.props.patients.indexOf(this.state.filteredPatients[index]))}>
                                <td>{patient._id}</td>
                                <td>{patient.researchId}</td>
                                <td>{patient.dateOfSurgery}</td>
                                <td>{patient.demographics.age}</td>
                                <td>{patient.demographics.gender}</td>
                                <td>{patient.demographics.dominantHand}</td>
                                <td>{patient.demographics.nativeLanguage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default PatientTable;