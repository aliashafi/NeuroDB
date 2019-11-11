import React from 'react'
import MontageItem from './montageItem'

class MontageIndex extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            montage: {}
        }

    }




    render(){
        // console.log(montage)

        let montage = this.props.montage.map((electrode, index) => {
            return(
                <MontageItem key={`electrode-item-${index}`} 
                    electrode={electrode} 
                    index={electrode.electrodeNum}
                    updateMontage={this.props.updateMontage} />
            )
        })
        
        return(
            <div>
                <div className='montage__row'>
                {/* <div className="montage-headers"> */}
                    <div className='montage__col-header--short'>
                        Num
                    </div>
                    <div className='montage__col-header--long'>
                        Elec Name
                    </div>
                    <div className='montage__col-header--long'>
                        Region
                    </div>
                </div>
                {montage}
            </div>
           
        )
    }

}

export default MontageIndex;