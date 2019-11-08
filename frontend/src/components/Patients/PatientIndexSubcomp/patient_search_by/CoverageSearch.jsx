import React from 'react';
import AutoComplete from '../../form/AutoComplete';
import { brainRegions } from '../../../../util/anatomy_options';


class CoverageSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if (this.state.clicked){
            this.props.openSearch(".filters__squish__coverage", "0px")
        }else{
            this.props.openSearch(".filters__squish__coverage", "200px")
        }
        this.setState({clicked: !this.state.clicked})

    }

    render(){
        return(
            <div>
                <div onClick={() => this.handleClick()} className="filters__header-container">
                    <div className='filters__coverage__icon'><i class="fas fa-brain"></i></div>
                    <h2>Filter By Coverage</h2>
                </div>

                <div className="filters__squish__coverage slide">
                    <div className="filters__coverage__dropdown-menue">

                        <AutoComplete
                            updateState={this.props.updateState}
                            suggestions={brainRegions}
                            suggestionClassName={"filter-search-dropdown"}
                            filter={"coverage"}
                            handleEnter={this.props.handleEnter}
                            className={"coverage-input-filter"} />

                        <ul className="filters__coverage__list">Filtered Coverage
                            {this.props.filters.coverage.map((region, index) => 
                            
                                    <li key={index} className="filters__coverage__list-item">
                                        <i className="fas fa-circle bullet"></i>
                                        {region} 
                                    </li>
                                    )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoverageSearch;