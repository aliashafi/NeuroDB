import React from 'react'

class ElectrodeForm extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            region: "",
            numElecs: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.props.addElecToState(this.props.num, this.state)
        }
    }

    handleChange(field){
        
        
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
        
    }



    render() {
        
    return(

        <div className="patient-dem-container">
            
            <div className="patient-show-inner-card bigger flex-row">


                <section className='inner-card__section-grouping__electrodes'>
                    <div className='inner-card__field-grouping ' onChange={this.handleChange}>
                        <div className='inner-card__field-label smaller-font'>Region</div>
                        <input
                            className='inner-card__field-value height-none'
                            type="text"
                            onChange={this.handleChange("region")}
                            value={this.state.region}
                        />
                    </div>

                    <div className='inner-card__field-grouping'>
                        <div className='inner-card__field-label smaller-font'>Number of Electrodes</div>
                        <input
                            className='inner-card__field-value height-none'
                            type="text"
                            onChange={this.handleChange("numElecs")}
                            value={this.state.numElecs}

                        />
                    </div>
                    <i onClick={() => this.props.deleteElec(this.props.num)} class="fas fa-trash-alt trash-icon clickable"></i>

                    </section>
            </div>
        </div>
    )
    }

}

export default ElectrodeForm;