import React from 'react';
import { brainRegions } from '../../../util/anatomy_options';
import AutoComplete from '../form/AutoComplete';
import SearchSlidingScale from './patient_search_ftrs/SearchSlidingScale'
import { Slider, Handles, Tracks } from 'react-compound-slider'
import '../../../css/index_nav.scss'

class PatientIndexSideBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            filters:{
                gender: "",
                dominantHand: "",
                nativeLanguages: [],
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

        this.handleRadioInput = this.handleRadioInput.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.updateState = this.updateState.bind(this);
        this.getFilteredPatients = this.getFilteredPatients.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.patients !== this.state.patients){
            this.props.updatePatientsWithFilter(this.state.patients)
        }
    }

    updateState(){

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
        }else if (filter === "age"){
            this.props.patients.forEach((patient, index) => {
                if (patient.demographics[filter] > value[0] && patient.demographics[filter] < value[1]) indiciesOfPatients.push(index);
            })
        }
        console.log(indiciesOfPatients)
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



    render() {
        return (
            <div className="side-nav-container-index slide">
                <div className="side-nav__filters">

                    <div className="filters__coverage">

                        <div className="filters__header-container">
                            <div className='filters__coverage__icon'><i class="fas fa-brain"></i></div>
                            <h2>Filter By Coverage</h2>
                        </div>
                        <div className="filters__coverage__dropdown-menue">

                            <AutoComplete
                                updateState={this.updateState}
                                suggestions={brainRegions}
                                suggestionClassName={"filter-search-dropdown"}
                                filter={"coverage"}
                                handleEnter={this.handleEnter}
                                className={"coverage-input-filter"}/>
                        </div>

                        
                        <ul className="filters__coverage__list">Filtered Coverage
                            {this.state.filters.coverage.map((region, index) => 
                                <li key={index} className="filters__coverage__list-item">
                                    <i class="fas fa-circle bullet"></i> 
                                    {region} </li>
                            )}
                        </ul>


                    </div>

                    <div className="filters__demographics">
                        <div className="filters__header-container">
                            <div className='filters__coverage__icon'>
                                <i className='far fa-user'/>
                            </div>
                            <h2>Filter By Demographics</h2>
                        </div>

                        <div className="filters__demographics__container">
                            <div className="filter-sex">
                                <div className='filter-sex__bullet'>M
                                    <i onClick={() => this.handleRadioInput("gender", "M")} 
                                        class={`fas fa-circle bullet ${this.state.filters.gender === "M" ? "checked-bullet" : ""}`}/>
                                </div>
                                <div className='filter-sex__bullet'>F
                                    <i onClick={() => this.handleRadioInput("gender", "F")}
                                        class={`fas fa-circle bullet ${this.state.filters.gender === "F" ? "checked-bullet" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="filters__demographics__age">
                        <SearchSlidingScale title={"Age"} handleRadioInput={this.handleRadioInput}/>
                        
                    </div>

                    <div className="filters__demographics__date-of-surgery">
                        <input 
                            type="date" 
                            name="dateOfSurgery" 
                            id=""/>
                        <input
                            type="date"
                            name=""
                            id="" />
                    </div>

                    
                    <div>
                        Filter by Neuropsych scores (range)
                    </div>

                    <div>
                        Filter by Meds
                    </div>
                    
                </div>


                    <button onClick={this.getFilteredPatients}>Search</button>

            </div>
        )
    }
};

export default PatientIndexSideBar;