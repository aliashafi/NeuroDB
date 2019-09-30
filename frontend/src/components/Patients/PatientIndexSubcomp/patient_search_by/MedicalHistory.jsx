import SearchSlidingScale from '../patient_search_ftrs/SearchSlidingScale'
import React from 'react'

class MedicalHistorySearch extends React.Component {

    render(){
        return(
            <div onClick={() => this.props.openSearch(".filters__squish__medical-history", "200px")} className="filters__demographics">
                <div className="filters__header-container">
                    <div className='filters__coverage__icon'>
                        <i className="fas fa-file-medical" />
                    </div>
                    <h2>Filter By Medical History</h2>
                </div>

                <div className="filters__squish__medical-history slide">
                    <div className="filters__medical-history__date-of-surgery">
                        <label > Start Date
                            <input
                                onChange={this.props.handleDateInput}
                                type="date"
                                name="0"
                                value={this.props.filters.dateOfSurgery[0]}
                                id="" />
                        </label>
                        <label>End Date
                        <input
                            onChange={this.props.handleDateInput}
                            type="date"
                            name="1"
                            value={this.props.filters.dateOfSurgery[1]}
                            id="" />
                        </label>
                    </div>



                    <div className="filters__demographics__age">
                        <SearchSlidingScale
                            title={"BDI"}
                            handleRadioInput={this.props.handleRadioInput}
                            range={40} />
                    </div>

                    <div className="filters__demographics__age">
                        <SearchSlidingScale
                            title={"BAI"}
                            range={40}
                            handleRadioInput={this.props.handleRadioInput} />
                    </div>
                </div>

            </div>
        )
    }
}

export default MedicalHistorySearch;