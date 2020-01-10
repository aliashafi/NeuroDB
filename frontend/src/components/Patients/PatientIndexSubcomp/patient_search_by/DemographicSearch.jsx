import SearchSlidingScale from '../patient_search_ftrs/SearchSlidingScale'
import React from 'react'

class DemographicsSearch extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        if (this.state.clicked) {
            this.props.openSearch(".filters__squish__demographics", "0px")
        } else {
            this.props.openSearch(".filters__squish__demographics", "100px")
        }
        this.setState({ clicked: !this.state.clicked })

    }

    render(){
        return(
            <div  className="filters__demographics">
                <div className="filters__header-container">
                    <div onClick={() => this.handleClick()} className='filters__coverage__icon'>
                        <i className='far fa-user' />
                    </div>
                    <h2>Filter By Demographics</h2>
                </div>

                <div className="filters__squish__demographics slide">
                    <div className="filters__demographics__container">
                        <div className="filter-sex">
                            <div className='filter-sex__bullet'>M
                                    <i onClick={() => this.props.handleRadioInput("gender", "M")}
                                    className={`fas fa-circle bullet left-margin ${this.props.filters.gender === "M" ? "checked-bullet" : ""}`} />
                            </div>
                            <div className='filter-sex__bullet'>F
                                    <i onClick={() => this.props.handleRadioInput("gender", "F")}
                                    className={`fas fa-circle bullet left-margin ${this.props.filters.gender === "F" ? "checked-bullet" : ""}`} />
                            </div>
                        </div>
                    </div>
                

                    <div className="filters__demographics__age">
                        <SearchSlidingScale
                            title={"age"}
                            handleRadioInput={this.props.handleRadioInput}
                            range={100} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DemographicsSearch;