import React from 'react';
import { sortByDate, sortByAge, sortByResearchID} from '../../../util/sort_api_util';
import { formatDate } from '../../../util/date_api_uil';
import '../../../css/patient_table.scss'
import '../../../css/_tackons.scss'
import PatientBasicSearchBar from './PatientBasicSearchBar';

class PatientTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patients: [],
        }

        this.updateTablePatients = this.updateTablePatients.bind(this);
       
    }

    updateTablePatients(newPatients){
        this.setState({patients: newPatients})
    }    


    render() {  
              
        let patients = this.state.patients.length === 0 ? this.props.patients : this.state.patients
        
        return (
            <div className="patient-table-page">
                <div className="patient-table-card patient-table-container std-shadow" id="no-padding">

                <PatientBasicSearchBar 
                    toggleSlide={this.props.toggleSlide}
                    patients={this.props.patients} 
                    updateTablePatients={this.updateTablePatients}/>
        
                </div>

                
                <div className="search-errors"> {this.props.notFound ? "No patients found with those filters" : ""} </div>
                
                <div className=" patient-table-card patient-table-container std-shadow">
                <div className="patient-table">

                    <div className="patient-table__headers">
                            <div>Research ID</div>
                            <div>Date of surgery</div>
                            <div>Age</div>
                            <div>Gender</div>
                            <div>Coverage (L/R)</div>
                            <div>Native Language</div>
                    </div>

                    <div>
                        {patients.map((patient, index) => (
                            <div 
                            
                            className="patient-table__rows">
                                <div>{patient.researchId}</div>
                                <div>{formatDate(patient.dateOfSurgery)}</div>
                                <div>{patient.demographics.age}</div>
                                <div>{patient.demographics.gender}</div>
                                <div>{patient.demographics.dominantHand}</div>
                                <div>{patient.demographics.nativeLanguage}</div>
                            </div>

                        ))}
                    </div>
                
                </div>
                </div>
            </div>
        )}
}
    


export default PatientTable;