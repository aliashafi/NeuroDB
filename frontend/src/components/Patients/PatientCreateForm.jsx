import React from 'react';

class PatientCreateForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                This is the Patient creation form
                <form>
                    <input type="text" value='name'/>
                </form>
            </div>
        )
    }
};

export default PatientCreateForm;