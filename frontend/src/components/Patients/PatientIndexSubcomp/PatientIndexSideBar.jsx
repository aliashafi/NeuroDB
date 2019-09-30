import React from 'react';
import CoverageSearch from './patient_search_by/CoverageSearch'
import DemographicSearch from './patient_search_by/DemographicSearch'
import MedicalHistorySearch from './patient_search_by/MedicalHistory'
import '../../../css/index_nav.scss'
import '../../../css/_tackons.scss'

class PatientIndexSideBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            filters:{
                gender: "",
                dominantHand: "",
                nativeLanguages: [],
                dateOfSurgery: [],
                ageRange: [],
                gender: "",
                coverage: [],
                BDI: [],
                BAI: [],
                epilepsyDiagnosis: []
            },
            strict: false,
            patients: []
        }

        this.openSearch = this.openSearch.bind(this);
        this.handleRadioInput = this.handleRadioInput.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.updateState = this.updateState.bind(this);
        this.getFilteredPatients = this.getFilteredPatients.bind(this);
        this.handleDateInput = this.handleDateInput.bind(this);
        this.clearFilters = this.clearFilters.bind(this);

    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.patients !== this.state.patients){
            this.props.updatePatientsWithFilter(this.state.patients)
        }
    }

    updateState(){

    }

    clearFilters(){
        let filters = {
            gender: "",
            dominantHand: "",
            nativeLanguages: [],
            dateOfSurgery: [],
            ageRange: [],
            gender: "",
            coverage: [],
            BDI: [],
            BAI: [],
            epilepsyDiagnosis: []
        }
        this.setState({
            filters: filters,
            patients: this.props.patients
            })
    }


    //filtering logic
    getFilteredPatients(){
        let filters = Object.keys(this.state.filters);
        let count = 0
        let filteredPatientIndicies = [];
        filters.forEach(filter => {
            if (this.state.filters[filter].length !== 0) {
                count ++;
                filteredPatientIndicies = filteredPatientIndicies.concat(this.getPatientIndex(filter, this.state.filters[filter]));
            }
        })

        let filteredPatients = []
        filteredPatientIndicies = this.getStrictFilter(filteredPatientIndicies, count)
        filteredPatientIndicies.map(idx => filteredPatients.push(this.props.patients[idx]))
    
        this.setState({patients: filteredPatients});
    }

    //only get patients that have all of the criteria
    getStrictFilter(indicies, count){
        let indexCount = {}
        indicies.forEach(index => {
            if (!indexCount[index]) indexCount[index] = 0;
            indexCount[index] += 1;
        })
        
        let strictFilterIndicies = []
        Object.keys(indexCount).forEach(idx => {
            if (indexCount[idx] === count) strictFilterIndicies.push(idx);
        })
        return strictFilterIndicies;
    }

    ///get the indecies of patients of a certain criteria
    getPatientIndex(filter, value){
        let indiciesOfPatients = [];
        // debugger

        //look over the coverage and see if the patient has filtered region
        if (filter === "coverage"){
            this.props.patients.forEach((patient, index) => {
                // if (this.electrodeMontageHasFilter(patient.imaging.electrodeMontage, value)) indiciesOfPatients.push(index);
                if (this.electrodeMontageHasAllFilter(patient.imaging.electrodeMontage, value)) indiciesOfPatients.push(index);
            })
        }else if (typeof value === "string" || typeof value === "number"){
            //get patient indecies that match sex, dominant hand and gender
            this.props.patients.forEach((patient, index) => {
                if (patient.demographics[filter] === value) indiciesOfPatients.push(index);
            })
        } else if (filter === "age"){
            this.props.patients.forEach((patient, index) => {
                if (patient.demographics[filter] > value[0] && patient.demographics[filter] < value[1]) indiciesOfPatients.push(index);
            })
        } else if (filter === "dateOfSurgery") {
            this.props.patients.forEach((patient, index) => {
                if (new Date(patient[filter]) > new Date(value[0]) && new Date(patient[filter]) < new Date(value[1])) indiciesOfPatients.push(index);
            })
        } else if (filter === "BDI" || filter === "BAI"){
            this.props.patients.forEach((patient, index) => {
                if (patient.medicalHistory[filter] > value[0] && patient.medicalHistory[filter] < value[1]) indiciesOfPatients.push(index);
            })
        }
        return indiciesOfPatients;
    }

    electrodeMontageHasFilter(montage, regions){
        let hasAny = false;
        regions.forEach( region => {
            if (montage.some(e => e.electrodeRegion === region)){
                hasAny = true
            }
        })
        return hasAny;
    }

    electrodeMontageHasAllFilter(montage, regions) {
        let montageRegions = montage.map(elec => elec.electrodeRegion)
        return regions.every(reg => montageRegions.includes(reg))
    }

    //handle enter on search bar for anantomy 
    handleEnter(filter, input){
        if (filter === "coverage"){
            let newCoverage = this.state.filters.coverage
            newCoverage.push(input)
            let newFilters = Object.assign({}, this.state.filters)
            newFilters.coverage = newCoverage
            this.setState({ filters: newFilters})
        }
    }

    // change state on radio button click
    handleRadioInput(filter, value){
        let newState = this.state.filters;
        newState[filter] = value
        this.setState({filters: newState});
    }

    handleDateInput(date){
        let newState = this.state.filters;
        let dateArray = newState.dateOfSurgery;
        dateArray[date.target.name] = date.target.value;
        newState.dateOfSurgery = dateArray
        this.setState({ filters: newState})
        
    }

    openSearch(className, size) {
        document.querySelector(className).style.height = size;
        // document.querySelector(".hold-advanced-search").style.marginLeft = "250px";
    }




    render() {
        return (
            <div>
            <div className="sticky">
            <div className="side-nav-container-index slide">
                <div className="side-nav-headers">
                    <h1>Advance Search</h1>
                    <h2>Click icons to open form</h2>
                </div>
                <div className="side-nav__filters">
                    <div className="filters__coverage">
                        <CoverageSearch 
                            openSearch={this.openSearch}
                            updateState={this.updateState}
                            handleEnter={this.handleEnter}
                            filters={this.state.filters}
                        />
                        </div>

                        <div>
                            <DemographicSearch
                                openSearch={this.openSearch}
                                updateState={this.updateState}
                                handleRadioInput={this.handleRadioInput}
                                filters={this.state.filters}
                            />
                        </div>
                    
                        <div>
                            <MedicalHistorySearch
                                openSearch={this.openSearch}
                                updateState={this.updateState}
                                handleDateInput={this.handleDateInput}
                                handleRadioInput={this.handleRadioInput}
                                filters={this.state.filters}
                            />
                        </div>
                        
                </div>

                <div className="save-clear-container">
                    <div className="btn_advanced-search" id="margin-left-none" onClick={this.getFilteredPatients}>Search</div>
                    <div className="btn_advanced-search" id="margin-left-none" onClick={this.clearFilters}>Clear</div>
                </div>

            </div>
            </div>
            </div>
        )
    }
};

export default PatientIndexSideBar;