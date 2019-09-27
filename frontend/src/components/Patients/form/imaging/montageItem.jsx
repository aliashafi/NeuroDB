import React from 'react'
import '../../../../css/elec_montage.scss'

class MontageItem extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            electrodeNum: this.props.electrode.electrodeNum,
            electrodeID: this.props.electrode.electrodeID,
            electrodeRegion: this.props.electrode.electrodeRegion
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.props.updateMontage(this.props.index, this.state)
        }
    }

    handleUpdate(filter){
        return (e) => {
            this.setState({[filter]: e.target.value})
        }
        
    }

    render() {     
        return (
            <div className="elec-montage">

                <div className='inner-card__field-grouping' onChange={this.handleChange}>
                    {/* <div className='inner-card__field-label'>Num</div> */}
                    <input
                        className='inner-card__number inner-card'
                        type="text"
                        value={this.state.electrodeNum}
                        onChange={this.handleUpdate("electrodeNum")}
                        
                    />
                </div>


                <div className='inner-card__field-grouping' onChange={this.handleChange}>
                    {/* <div className='inner-card__field-label'>Name</div> */}
                    <input
                        className='inner-card__elecID inner-card'
                        type="text"
                        value={this.state.electrodeID}
                        onChange={this.handleUpdate("electrodeID")}
                        
                    />
                </div>

                <div className='inner-card__field-grouping' onChange={this.handleChange}>
                    {/* <div className='inner-card__field-label'>Region</div> */}
                    <input
                        className='inner-card__region inner-card'
                        type="text"
                        value={this.props.electrode.electrodeRegion}
                        onChange={this.handleUpdate("electrodeRegion")}
                    />
                </div>

        
            </div>
        )
    }

}

export default MontageItem;