import React from 'react';

function ElectrodeItem(props) {
    return (
        <div className='electrode-item-container'>
            <div className='inner-card__field-grouping'>
                <div>Electrode Number</div>
                <div>{props.electrode.electrodNum}</div>
            </div>
            <div className='inner-card__field-grouping'>
                <div>Electrode ID</div>
                <div>{props.electrode.electrodID}</div>
            </div>
            <div className='inner-card__field-grouping'>
                <div>Electrode Region</div>
                <div>{props.electrode.electrodeRegion}</div>
            </div>
        </div>
    );
}

export default ElectrodeItem;