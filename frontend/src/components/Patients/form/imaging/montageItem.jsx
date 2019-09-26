import React from 'react'
import '../../../../css/elec_montage.scss'

class MontageItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
       

        return (
            <div className="elec-montage">

                <div className='inner-card__field-grouping' onChange={this.handleChange}>
                    {/* <div className='inner-card__field-label'>Num</div> */}
                    <input
                        className='inner-card__number inner-card'
                        type="text"
                        value={this.props.electrode.electrodeNum}
                        
                    />
                </div>


                <div className='inner-card__field-grouping' onChange={this.handleChange}>
                    {/* <div className='inner-card__field-label'>Name</div> */}
                    <input
                        className='inner-card__elecID inner-card'
                        type="text"
                        value={this.props.electrode.electrodeID}
                        
                    />
                </div>

                <div className='inner-card__field-grouping' onChange={this.handleChange}>
                    {/* <div className='inner-card__field-label'>Region</div> */}
                    <input
                        className='inner-card__region inner-card'
                        type="text"
                        value={this.props.electrode.electrodeRegion}
                        
                    />
                </div>

        
            </div>
        )
    }

}

export default MontageItem;