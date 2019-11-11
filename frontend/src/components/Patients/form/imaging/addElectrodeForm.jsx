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
        <>
            <section className='electrode__row--imaging deletable-field'>  
                <AutoComplete
                    className={"inner-card__field-value min-w-150 editable margin-right-10"}
                    updateState={this.updateState}
                    suggestionClassName={"suggestions"}
                    filter={null}
                    suggestions={brainRegions} />
                <input
                    className='inner-card__field-value min-w-150 editable'
                    type="text"
                    onChange={this.handleChange("numElecs")}
                    value={this.state.numElecs}
                />
                <i onClick={() => this.props.deleteElec(this.props.num)} className="fas fa-trash-alt trash-icon clickable"></i>

            </section>
        </>
    )
    }

}

export default ElectrodeForm;