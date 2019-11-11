import React from 'react';
// import '../../css/patient_table.scss'
// import PatientIndexItem from './PatientIndexItem';
import PatientIndexSideBar from './PatientIndexSubcomp/PatientIndexSideBar';
import PatientTable from './PatientIndexSubcomp/PatientTable';
import PatientPopUp from './PatientIndexSubcomp/PatientPopUp'

class PatientIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            slide: "false",
            notFound: false,
            currentPatient: {}
        }

        this.toggleSlide = this.toggleSlide.bind(this)
        this.updatePatientsWithFilter = this.updatePatientsWithFilter.bind(this);
        this.handleQuickView = this.handleQuickView.bind(this);
        this.closeQuickView = this.closeQuickView.bind(this);
    }

    componentDidMount() {
        this.props.fetchPatients();
    }

    updatePatientsWithFilter(filteredPatients){
        if (filteredPatients.length == 0){
            this.setState({notFound: true})
        }else{
            this.setState({
            patients: filteredPatients,
            notFound: false
        })
        }
    }

    toggleSlide(){
        if (this.state.slide){
            this.openNav();
        }else{
            this.closeNav();
        }

        this.setState({
            slide: !this.state.slide
        })
    }

    openNav() {
        document.querySelector(".side-nav-container-index").style.width = "300px";
        // document.querySelector(".hold-advanced-search").style.marginLeft = "250px";
    }
    closeNav() {
        document.querySelector(".side-nav-container-index").style.width = "0";
        document.querySelector(".hold-advanced-search").style.marginLeft = "0";
    }

    handleQuickView(patient){
        this.setState({currentPatient: patient})
    }

    closeQuickView(){
        this.setState({ currentPatient: {} })
    }

    

    render() {
        const patients = this.state.patients.length === 0 ? this.props.patients : this.state.patients
        console.log(this.props.patients)

        return (
            <div className="hold-advanced-search">
                {/* {this.state.component} */}

                <PatientIndexSideBar 
                    patients={this.props.patients}
                    updatePatientsWithFilter={this.updatePatientsWithFilter}
                    />
                
                <div className="patient-index-page">
                    <div className="patient-index-page__headers">
                        <h2>NeuroDB Database</h2>
                        <h3>All Patients</h3>
                    </div>

                    
                    <PatientTable 
                        patients={patients} 
                        handleQuickView={this.handleQuickView}
                        closeQuickView={this.closeQuickView}
                        toggleSlide={this.toggleSlide}
                        notFound={this.state.notFound}
                        />
                    
                </div>

                {Object.values(this.state.currentPatient).length !== 0 ? 
                <PatientPopUp 
                closeQuickView={this.closeQuickView}
                patient={this.state.currentPatient}/>: "" }
                
            </div>
        )
    }
};

export default PatientIndex;