import React from 'react'
import MontageItem from './montageItem'

class MontageIndex extends React.Component {
    
    constructor(props){
        super(props)
        
    }

    render(){

        let montage = this.props.montage.map((electrode, index) => {
            return(
                <MontageItem key={Math.random(10)} electrode={electrode} index={index} />
            )
        })
        
        return(
            <div>
                <div className="montage-headers">
                    <div>
                        <h1>Num</h1>
                    </div>
                    <div>
                        <h1>Elec Name</h1>
                    </div>
                    <div>
                        <h1>Region</h1>
                    </div>
                </div>
                {montage}
            </div>
           
        )
    }

}

export default MontageIndex;