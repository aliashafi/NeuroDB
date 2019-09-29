import React from 'react';
import { brainRegions } from '../../../util/anatomy_options';
import AutoComplete from '../form/AutoComplete';
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
                sex: "",
                coverage: [],
                BDI: [],
                BAI: [],
                epilepsyDiagnosis: []
            },
            patients: []
        }
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
            if (this.state.filters.filter !== "" && this.state.filters.filter !== []) count ++;
            filteredPatientIndicies = filteredPatientIndicies.concat(this.getPatientIndex(filter, this.state.filters[filter]));
        })

        let filteredPatients = []
        // ///strict 
        // filteredPatientIndicies = this.getStrictFilter(filteredPatientIndicies, count);
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


    getPatientIndex(filter, value){
        let indiciesOfPatients = [];

        //look over the coverage and see if the patient has filtered region
        if (filter === "coverage"){
            this.props.patients.forEach((patient, index) => {
                // if (this.electrodeMontageHasFilter(patient.imaging.electrodeMontage, value)) indiciesOfPatients.push(index);
                if (this.electrodeMontageHasAllFilter(patient.imaging.electrodeMontage, value)) indiciesOfPatients.push(index);
            })
        }else{
            // indiciesOfPatients = this.props.patients.map( (patient, index) => {
            //     if (patient[filter] === value) return index });
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



    handleEnter(filter, input){
        // debugger
        if (filter === "coverage"){
            let newCoverage = this.state.filters.coverage
            newCoverage.push(input)
            let newFilters = Object.assign({}, this.state.filters)
            newFilters.coverage = newCoverage
            this.setState({ filters: newFilters})
        }
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

                    <div className="">
                        Filter By Study Dropdown and add to list
                    </div>

                    <div className="">
                        Filter Native Language Checkboxes
                    </div>

                    <div>
                        Filter By Gender Checkboxes
                    </div>

                    <div>
                        Filter by Date of surgery (range)
                    </div>

                    <div>
                        Filter by Age (range)
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