import React from 'react'
import AutoComplete from '../AutoComplete'

const brainRegions =
    ["Temporal lobe medial aspect",
        "Entorhinal cortex",
        "Parahippocampal gyrus",
        "Amygdala",
        "Hippocampus",
        "Insula",
        "Orbital Frontal Cortex",
        "Temporal pole",
        "Fusiform gyrus",
        "Temporal lobe",
        "Superior temporal gyrus",
        "Middle temporal gyrus",
        "Inferior temporal gyrus",
        "Transverse temporal gyrus",
        "superior temporal sulcus",
        "Frontal lobe",
        "Superior frontal",
        "Middle frontal gyrus",
        "Inferior frontal gyrus",
        "Pars opercularis",
        "Pars triangularis",
        "Pars orbitalis",
        "Orbitofrontal gyrus",
        "Lateral division",
        "Medial division",
        "Frontal pole",
        "Precentral gyrus",
        "Paracentral lobule",
        "Parietal lobe",
        "Postcentral gyrus",
        "Supramarginal gyrus",
        "Superior parietal lobule",
        "Inferior parietal lobule",
        "Precuneus",
        "Occipital lobe",
        "Lingual gyrus",
        "Pericalcarine cortex",
        "Cuneus cortex",
        "Lateral occipital cortex",
        "Cingulate cortex",
        "Rostral anterior",
        "Caudal anterior",
        "Posterior",
        "Isthmus"
    ]

class ElectrodeForm extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            region: "",
            numElecs: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateState = this.updateState.bind(this)
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

    updateState(change){
        this.setState({ region: change });
    }



    render() {
        
    return(

        <div className="patient-dem-container">
            
            <div className="patient-show-inner-card bigger flex-row">


                <section className='inner-card__section-grouping__electrodes'>
                    <div className='inner-card__field-grouping ' onChange={this.handleChange}>
                        <div className='inner-card__field-label smaller-font'>Region</div>
                        <AutoComplete
                            className={"inner-card__field-value height-none"}
                            updateState={this.updateState}
                            suggestionClassName={"suggestions"}
                            filter={null}
                            suggestions={brainRegions} />
                        {/* <input
                            className='inner-card__field-value height-none'
                            type="text"
                            onChange={this.handleChange("region")}
                            value={this.state.region}
                        /> */}
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
                    <i onClick={() => this.props.deleteElec(this.props.num)} className="fas fa-trash-alt trash-icon clickable"></i>

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