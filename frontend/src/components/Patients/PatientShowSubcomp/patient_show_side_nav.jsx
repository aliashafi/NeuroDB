import React from 'react';

class PatientShowSideNav extends React.Component {
    constructor(props) {
        super(props);
        
    }



    render() {
        return (
            <div className='side-nav-container'>
                <div className='side-nav-content__wrap'>

                    <div 
                        id='side-nav-patient-info'
                        onClick={(e) => this.props.handleVisibleCardChange(e, 'patient info')} 
                        className='side-nav-content__cluster'>
                            
                        <div className='side-nav-content__icon'><i className='far fa-user' /></div>
                        <div className='side-nav-content__text'>Patient Info</div>
                    </div>
                    
                    <div
                        id='side-nav-medication'
                        onClick={(e) => this.props.handleVisibleCardChange(e, 'medication')} 
                        className='side-nav-content__cluster'>

                        <div className='side-nav-content__icon'><i className="fas fa-pills" /></div>
                        <div className='side-nav-content__text'>Medication</div>
                    </div>
                    
                    <div
                        id='side-nav-medical-history'
                        onClick={(e) => this.props.handleVisibleCardChange(e, 'medical history')} 
                        className='side-nav-content__cluster'>

                        <div className='side-nav-content__icon'><i className="fas fa-file-medical" /></div>
                        <div className='side-nav-content__text'>Medical History</div>
                    </div>
                    
                    <div 
                        id='side-nav-imaging-data'
                        onClick={(e) => this.props.handleVisibleCardChange(e, 'imaging data')}
                        className='side-nav-content__cluster'>

                        <div className='side-nav-content__icon'><i className="fas fa-border-none" /></div>
                        <div className='side-nav-content__text'>Imaging Data</div>
                    </div>
                    
                    <div
                        id='side-nav-tasks'
                        onClick={(e) => this.props.handleVisibleCardChange(e, 'tasks')} 
                        className='side-nav-content__cluster'>

                        <div className='side-nav-content__icon'><i className="fas fa-clipboard-list" /></div>
                        <div className='side-nav-content__text'>Tasks</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientShowSideNav;