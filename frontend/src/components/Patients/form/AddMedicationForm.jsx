import React from 'react'

class ElectrodeForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            medicationName: "",
            medicationPurpose: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.updateState(this.state, this.props.num)
        }
    }

    handleChange(field) {

        return (event) => {
            this.setState({ [field]: event.target.value });
        };

    }



    render() {

        return (

            <div className="patient-dem-container">

                <div className="patient-show-inner-card bigger flex-row">


                    <section className='inner-card__section-grouping__electrodes'>
                        <div className='inner-card__field-grouping ' onChange={this.handleChange}>
                            <div className='inner-card__field-label smaller-font'>Name</div>
                            {/* <AutoComplete
                                className={"inner-card__field-value height-none"}
                                updateState={this.updateState}
                                suggestions={brainRegions} /> */}
                            <input
                            className='inner-card__field-value height-none'
                            type="text"
                            onChange={this.handleChange("medicationName")}
                            value={this.state.medicationName}
                        />
                        </div>

                        <div className='inner-card__field-grouping'>
                            <div className='inner-card__field-label smaller-font'>Purpose</div>
                            <input
                                className='inner-card__field-value height-none'
                                type="text"
                                onChange={this.handleChange("medicationPurpose")}
                                value={this.state.medicationPurpose}
                            />
                        </div>
                        <i onClick={() => this.props.deleteMed(this.props.num)} className="fas fa-trash-alt trash-icon clickable"></i>

                    </section>


                </div>

                {/* <AutoComplete
                suggestions={[
                    "Alligator",
                    "Bask",
                    "Crocodilian",
                    "Death Roll",
                    "Eggs",
                    "Jaws",
                    "Reptile",
                    "Solitary",
                    "Tail",
                    "Wetlands"
                ]} /> */}
            </div>
        )
    }

}

export default ElectrodeForm;