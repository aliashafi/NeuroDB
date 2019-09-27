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
            currentList = this.props.patients;
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
                
                <table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Research ID</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredPatients.map((patient, index) => (
                            <tr onClick={() => this.props.handleQuickView(index)}>
                                <td>{patient._id}</td>
                                <td>{patient.researchId}</td>
                                <td>{patient.demographics.age}</td>
                                <td>{patient.demographics.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default PatientTable;