import React from 'react';

class PatientIndexSideBar extends React.Component {
    render() {
        return (
            <div className='side-bar-main'>
                <div>
                    <div id='button-add-patient'>
                        Add patient
                    </div>
                    <div className='side-bar-content'>
                        <div className='sort-by'>
                            Sort by
                        </div> 
                        <div className='sort-by-options' onClick={() => this.props.sortBy('_id')}>
                            ID
                        </div>
                        <div className='sort-by-options' onClick={() => this.props.sortBy('researchId')}>
                            Research ID
                        </div>
                        <div className='sort-by-options' onClick={() => this.props.sortBy('dateOfSurgery')}>
                            Date of surgery
                        </div>
                        <div className='sort-by-options'>
                            Last visited
                        </div>
                        <div className='sort-by-options' onClick={() => this.props.sortByDemographics('age')}>
                            Age
                        </div>
                        <div className='sort-by-options' onClick={() => this.props.sortByDemographics('gender')}>
                            Gender
                        </div>
                        <div className='sort-by-options' onClick={() => this.props.sortByDemographics('dominantHand')}>
                            Dominant Hand
                        </div>
                        <div className='sort-by-options' onClick={() => this.props.sortByDemographics('nativeLanguage')}>
                            Native Language
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PatientIndexSideBar;