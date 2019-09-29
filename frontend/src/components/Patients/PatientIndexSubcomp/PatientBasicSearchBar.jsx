import React from 'react';
import { sortByDate, sortByAge, sortByResearchID } from '../../../util/sort_api_util'
import '../../../css/patient_table.scss'
import '../../../css/_tackons.scss'


class PatientBasicSearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filters: {
                researchId: "",
                gender: "",
                dominantHand: "",
                nativeLanguage: "",
                age: "",
            },
            viewDropDown: false,
            orderBy: "",
            patients: [],
        }

        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.filters !== this.state.filters) {
            this.searchBy()
        }

        if (prevState.patient !== this.state.patients){
        }
    }


    ///SEARCH
    searchBy() {
        //filters will be an object with search options
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


    sortWithOrder(order, patients) {
        let sorted = []
        order = order.reverse()
        order.forEach(idx => sorted.push(patients[idx]))
        this.props.updateTablePatients(sorted)
    }

    //sort after the search
    sortByMostRelevant(filters) {
        let patientRelevance = {}
        filters.forEach(filter => {
            filter.map(patientIndex => {

                if (!patientRelevance[`patient-${patientIndex}`]) patientRelevance[`patient-${patientIndex}`] = 0;
                patientRelevance[`patient-${patientIndex}`] += 1
            })
        })
        let keys = Object.keys(patientRelevance);
        keys.sort(function (a, b) { return patientRelevance[a] - patientRelevance[b] });
        let sortedPatientIndicies = keys.map(keyIdx => {
            let idx = keyIdx.split("-")[1]

            return parseInt(idx)
        })
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
    handleSearchInput(e) {
        let id = e.target.id
        let value = e.target.value
        let newState = { ...this.state.filters };
        newState[id] = value
        this.setState({
            filters: newState
        })
    }

    ///SORT

    sortBy(filter) {
        let sorted = [];

        if (filter === 'date of surgery') {
            sorted = this.props.patients.sort(sortByDate);
            this.props.updateTablePatients(sorted)
        } else if (filter === 'age') {
            sorted = this.props.patients.sort(sortByAge);
            this.props.updateTablePatients(sorted)
        } else if (filter === 'research id') {
            sorted = this.props.patients.sort(sortByResearchID);
            this.props.updateTablePatients(sorted)
        }

        
    }

    handleOrder(filter){
        this.setState({
            orderBy: `Order By: ${filter}`
        })
        this.sortBy(filter)
    }

    toggleDropDown(){
        this.setState({viewDropDown: !this.state.viewDropDown })
    }


    render(){

        const activeClass = this.state.viewDropDown ? "active" : ""

        return(
            <div className="search-bar no-padding" >
                <div className="search-icon"><i class="fas fa-search"></i></div>
                <input className="search-bar__researchId" type="text" placeholder='Search by Research ID'
                    onChange={(e) => this.handleSearchInput(e)}
                    id="researchId"
                    value={this.state.filters.researchId} />

                <div className="order-by-container">
                    <div className="order-by search-bar__researchId">
                        <div className="order-by__inner-text">
                            {this.state.orderBy !== "" ? this.state.orderBy : "Order By"}
                        </div>
                        
                        <div onClick={this.toggleDropDown} className={`dropdown-icon ${activeClass}`}><i className="fas fa-caret-down"></i></div>

                        {this.state.viewDropDown ? 
                        <div className="order-by__dropdown-menue">
                            <div onClick={() => this.handleOrder("age")} name="age">Age</div>
                            <div onClick={() => this.handleOrder("date of surgery")} name="date of surgery">Date of Surgery</div>
                            <div onClick={() => this.handleOrder("research id")}name="research id">Research Id</div>
                        </div> : ""
                        }
                    </div>
                    
                </div>

                <div onClick={this.props.toggleSlide} className="btn_advanced-search">
                    Advanced Search
                </div>
                {/* <input type="text" 
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
                        onChange={(e) => this.handleSearchInput(e)} /> */}
            </div>
        )
    }
}

export default PatientBasicSearchBar;