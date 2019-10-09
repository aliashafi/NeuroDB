import React from 'react';
import {withRouter} from 'react-router-dom';
import PlaceholderBrainProfile from '../../../images/placeholder_rotating_brain.gif'
import TaskTimeline from './taskTimeline'
import '../../../css/patient_popup.scss';



class PatientPopUp extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.history.push(`/show/${this.props.patient._id}`)
    }

    getSimpleMontage(){
        let elecs = {}
        this.props.patient.imaging.electrodeMontage.forEach(electrode => {
            if (!elecs[electrode.electrodeRegion]) elecs[electrode.electrodeRegion] = 0;
            elecs[electrode.electrodeRegion] ++;
        })
        return elecs
        
    }

    render(){
        let elecs = {}
        if (this.props.patient){
           elecs = this.getSimpleMontage()
        }

        return(
            <div className="patient-popup">
                <div onClick={this.props.closeQuickView} className="patient-popup__close">X</div>
                <h1 className="patient-popup__header">
                    {this.props.patient.researchId}
                </h1>
                
                <div className="brain-container">
                    <img className='brain-quick-show' src={PlaceholderBrainProfile} />
                    <div>
                        <ul className="patient-popup__montage">
                            <p className="add-green scores">Electrode Montage</p>
                            {Object.keys(elecs).map((region, idx) => 
                                    <li key={idx}>
                                        <p className="scores-light">{`${region}:`}</p> {`${elecs[region]}`}
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
                
                <div className="pop-up-bottom-container">
                    <div className="patient-popup__medical-history">
                        <div className="scores add-green">Neuropsych Scores</div>
                        <div> <p className="scores">BDI:</p> {this.props.patient.medicalHistory.BDI}</div>
                        <div><p className="scores">BAI:</p> {this.props.patient.medicalHistory.BAI}</div>
                    </div>

                    <div className="patient-popup__studies">
                        <div className="scores add-green">Enrolled Studies</div>
                        {this.props.patient.studies.map(study => 
                            <div>{study}</div>)}                   
                    </div>
                </div>
                
                <h1 className="patient-popup__timeline">Patient Timeline</h1>
                <TaskTimeline patient={this.props.patient}/>

                <div onClick={this.handleClick}className="see-details">...View More</div>
            </div>
        )
    }
}

export default withRouter(PatientPopUp);