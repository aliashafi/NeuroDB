import React from 'react'
import AddElectrodeForm from './imaging/addElectrodeForm'
import MontageIndex from './imaging/montageIndex'

class ImagingForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            numElecs: [0],
            electrodes: {},
            montage: {},
        }
        this.addElec = this.addElec.bind(this);
        this.deleteElec = this.deleteElec.bind(this);
        this.addElecToState = this.addElecToState.bind(this);
        this.renderMontage = this.renderMontage.bind(this);
        this.updateMontage = this.updateMontage.bind(this);
    }

    componentDidUpdate(prevProp, prevState){
        if (prevState !== this.state){
            this.props.updateForm('electrodeMontage', Object.values(this.state.montage), 'imaging')
        }
    }

    addElec(){
        this.state.numElecs.push(1 + this.state.numElecs[this.state.numElecs.length - 1])
        this.setState({ numElecs: this.state.numElecs })
    }

    deleteElec(num){
        let newState = this.state.numElecs.slice(0, num)
        if (this.state.numElecs.length === num){
            let remove = Object.assign({}, this.state.electrodes);
            delete remove[num];
            this.setState({ numElecs: newState, electrodes: remove});
        }else{
            let remove = Object.assign({}, this.state.electrodes);
            delete remove[num];
            newState = this.state.numElecs.slice(0, num).concat(this.state.numElecs.slice(num + 1));
            this.setState({ numElecs: newState, electrodes: remove});
        }
    }

    

    addElecToState(num, elec){
        let newState = Object.assign({}, this.state.electrodes, {[num] : elec})
        this.setState({electrodes: newState})
    }

    renderMontage() {
        let electrodes = Object.values(this.state.electrodes)
        let montage = {}
        let j = 1
        electrodes.forEach(elec => {
            
            for (let i = 0; i < elec.numElecs; i++) {
                let subElec = {
                    electrodeNum: j,
                    electrodeID: `${elec.region}${1}`,
                    electrodeRegion: elec.region
                }
                montage[j] = (subElec);
                j ++
            }
        })

        this.setState({montage: montage})
        // debugger
    }

    updateMontage(idx, elec){
        let newState = Object.assign({}, this.state.montage)
        delete newState[idx]
        newState[idx] = elec
        // debugger
        this.setState({montage: newState});
    }



    render(){

        if (this.props.currentStep !== "imaging data") {
            return null
        }

        let addElecForms = this.state.numElecs.map(elecForm => {
            return(
                <AddElectrodeForm 
                    key={elecForm}
                    num={elecForm}
                    deleteElec={this.deleteElec}
                    addElecToState={this.addElecToState}
                     />   
            )
        })


        
        return(
            <div className="patient-dem-container">
                <h1 className="patient-show-inner-card__header initial-header">Imaging</h1>
                <div className='header-divider'></div>
                
                <div className="patient-add-imaging">
                        <div className="left-side">
                            <div>
                            <h1>Add to Montage</h1><span><i onClick={() => this.addElec()} className="far fa-plus-square clickable"></i></span>
                            </div>
                            <div className="left-side__electrode-form">

                            <div>
                                {addElecForms}

                                <div className="btn btn--card margin-left-none" onClick={this.renderMontage}>
                                    Render Montage
                                </div>
                            </div>
                            </div>
                            
                        </div>


                        <div className="right-side">
                        <h1>Montage</h1>
                            <MontageIndex 
                                key="montage-idx"
                                montage={Object.values(this.state.montage)} 
                                updateMontage={this.updateMontage}/> 
                        </div>
                </div>
            </div>
        )
    }
}

export default ImagingForm;