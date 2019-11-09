import React from 'react';

function ElectrodeItem(props) {
    return (
        <div className='electrode__row'>
            <div className='electrode__item'>
                {props.electrode.electrodeNum}
            </div>
            <div className='electrode__item'>
                {props.electrode.electrodeRegion}
            </div>
        </div>
    );
}

export default ElectrodeItem;