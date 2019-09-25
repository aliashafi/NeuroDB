import React from 'react';

class PatientUpdateForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                This is the Patient update form
                <form>
                    <input type="text" value='name'/>
                </form>
            </div>
        )
    }
};

export default PatientUpdateForm;