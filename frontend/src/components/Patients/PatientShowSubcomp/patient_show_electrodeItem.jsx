import React from 'react';

function ElectrodeItem(props) {
    return (
        <div className='electrode-item-container'>
            <div className='inner-card__field-grouping-imaging-en'>
                {props.electrode.electrodeNum}
            </div>
            {/* <div className='inner-card__field-grouping-imaging-eid'>
                {props.electrode._id}
            </div> */}
            <div className='inner-card__field-grouping-imaging-eregion'>
                {props.electrode.electrodeRegion}
            </div>
        </div>
    );
}

export default ElectrodeItem;