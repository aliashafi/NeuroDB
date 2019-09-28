import React from 'react';
import { EventEmitter } from 'events';

class PatientTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: {
                researchId: "",
                gender: "",
                dominantHand: "",
                nativeLanguage: "",
                age: "",
            },
            patients: [],
        }
       
    }


    componentDidUpdate(prevProps, prevState){
        if (prevState.filters !== this.state.filters){
            this.searchBy()
        }
    }


    searchBy() {
        //filters will be an object with Name, Age
        let filteredPatients = []
        let researchCount = []
        let hasGenderCount = []
        let nativeLanguageCount = []
        let dominantHandCount = []

        this.props.patients.forEach((patient, index) => {
            let hasResearchLetters = this.hasAnyLetters(patient.researchId, this.state.filters.researchId)
            let hasGenderLetters = this.hasAnyLetters(patient.demographics.gender, this.state.filters.gender)
            let hasNativeLanguageLetters = this.hasAnyLetters(patient.demographics.nativeLanguage, this.state.filters.nativeLanguage)
            let hasDominantHandLetters = this.hasAnyLetters(patient.demographics.dominantHand, this.state.filters.dominantHand)
            if (hasResearchLetters || hasGenderLetters || hasNativeLanguageLetters || hasDominantHandLetters) filteredPatients.push(patient);
            
            if (hasResearchLetters) researchCount.push(index);
            if (hasGenderLetters) hasGenderCount.push(index);
            if (hasNativeLanguageLetters) nativeLanguageCount.push(index);
            if (hasDominantHandLetters) dominantHandCount.push(index);
            console.log(hasDominantHandLetters)
        })

        let order = this.sortByMostRelevant([researchCount, hasGenderCount, nativeLanguageCount, dominantHandCount])
        
        this.sortWithOrder(order, this.props.patients)
    }

    sortWithOrder(order, patients){
        let sorted = []
        order = order.reverse()
        order.forEach(idx => sorted.push(patients[idx]))
        this.setState({ patients: sorted })
    }

    sortByMostRelevant(filters){
        let patientRelevance = {}
        filters.forEach(filter => {
            filter.map(patientIndex => {
                
                if (!patientRelevance[`patient-${patientIndex}`]) patientRelevance[`patient-${patientIndex}`] = 0;
                patientRelevance[`patient-${patientIndex}`] += 1
            })
        })
        let keys = Object.keys(patientRelevance);
        keys.sort(function (a, b) { return patientRelevance[a] - patientRelevance[b] });
        // debugger
        let sortedPatientIndicies = keys.map(keyIdx => {
            let idx = keyIdx.split("-")[1]
            
            return parseInt(idx)
        })
        // debugger
        return sortedPatientIndicies;
    }

    

    ///helper method for searching function
    hasAnyLetters(value, letters) {
        if (letters === "") return false;
        if (value === undefined) return false;
        value = value.split("").map(v => v.toLowerCase())
        return letters.split("").every(char => value.includes(char.toLowerCase()))
    }

    //handleInput for search methods
    handleSearchInput(e){
        let id = e.target.id
        let value = e.target.value
        let newState = {...this.state.filters};
        newState[id] = value
        this.setState({
            filters: newState
        })
    }

    render() {        
        let patients = this.props.patients;
        if (this.state.patients.length > 0){
            patients = this.state.patients
        }
        console.log(patients)

        return (
            <div>
                <div>
                    <input type="text" placeholder='Search by Research ID' 
                        onChange={(e) => this.handleSearchInput(e)}
                        id="researchId" 
                        value={this.state.filters.researchId}/>


                    <input type="text" 
                        placeholder='Search by Gender (M/F)'
                        id="gender"
                        value={this.state.filters.gender} 
                        onChange={(e) => this.handleSearchInput(e)}/>

                    <input type="text"
                        placeholder='Dominant Hand'
                        id="dominantHand"
                        value={this.state.filters.dominantHand}
                        onChange={(e) => this.handleSearchInput(e)} />

                    <input type="text"
                        placeholder='Native Language'
                        id="nativeLanguage"
                        value={this.state.filters.nativeLanguage}
                        onChange={(e) => this.handleSearchInput(e)} />
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
                        {patients.map((patient, index) => (
                            <tr onClick={() => this.props.handleQuickView(this.props.patients.indexOf(this.state.filteredPatients[index]))}>
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