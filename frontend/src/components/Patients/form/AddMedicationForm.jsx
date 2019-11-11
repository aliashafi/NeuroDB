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

            <>
                <div className='inner-card__field-grouping deletable-field' onChange={this.handleChange}>
                    
                    <input
                        className='inner-card__field-value field-right-buffer editable'
                        type="text"
                        onChange={this.handleChange("medicationName")}
                        value={this.state.medicationName}
                    />
                    <input
                        className='inner-card__field-value long-field editable'
                        type="text"
                        onChange={this.handleChange("medicationPurpose")}
                        value={this.state.medicationPurpose}
                    />
                    <i onClick={() => this.props.deleteMed(this.props.num)} className="fas fa-trash-alt trash-icon clickable"></i>
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
            </>
        )
    }

}

export default ElectrodeForm;