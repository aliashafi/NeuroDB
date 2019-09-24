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
                        <div className='sort-by-options'>
                            ID
                        </div>
                        <div className='sort-by-options'>
                            Research ID
                        </div>
                        <div className='sort-by-options'>
                            Date of surgery
                        </div>
                        <div className='sort-by-options'>
                            Last visited
                        </div>
                        <div className='sort-by-options'>
                            Age
                        </div>
                        <div className='sort-by-options'>
                            Sex
                        </div>
                        <div className='sort-by-options'>
                            Ethnicity
                        </div>
                        <div className='sort-by-options'>
                            Hand Dominance
                        </div>
                        <div className='sort-by-options'>
                            Native Language
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
};

export default PatientIndexSideBar;