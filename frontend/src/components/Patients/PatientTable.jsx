import React from 'react';

class PatientTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <button onClick={() => this.props.sortBy('researchId')}>Research ID</button>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.patients.map(row => (
                        <tr>
                            <td>{row._id}</td>
                            <td>{row.researchId}</td>
                            <td>{row.demographics.age}</td>
                            <td>{row.demographics.sex}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default PatientTable;