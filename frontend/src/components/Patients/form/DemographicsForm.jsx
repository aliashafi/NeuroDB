import React from 'react';
import '../../../css/form.scss'
import Select from 'react-select'

class DemographicsForm extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const options = [
            { value: 'english', label: 'English' },
            { value: 'spanish', label: 'Spanish' },
            { value: 'mandarin', label: 'Mandarin' },
        ];

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                // borderBottom: '2px solid green',
                // color: state.isSelected ? 'yellow' : 'black',
                // backgroundColor: state.isSelected ? 'green' : 'white'
            }),
            control: (provided) => ({
                ...provided,
                marginTop: "0%",
            })
        }

        if (this.props.currentStep !== "demographics") {
            return null
        }
        return(
        <div className="card__sub-form">

            <h1>Demographics</h1>
            <section>
                <label className="form__label">Research ID
                    <input 
                        type="text" 
                        name="researchId" 
                        value={this.props.demographics.researchId}
                        onChange={this.props.handleChange}
                        />
                </label>
            
                <label className="form__label" >Date of Surgery
                    <input 
                        type="date" 
                        name="dateOfSurgery"
                        value={this.props.demographics.dateOfSurgery}
                        onChange={this.props.handleChange}
                        id=""/>
                </label>
            </section>
                <div className="border-bottom-short"></div>
            <section>

                <label className="form__label" >Birth Date
                    <input
                        type="date"
                        name="birthDate"
                            value={this.props.demographics.demographics.birthDate}
                        onChange={this.props.handleChange}
                        id="demographics" />
                </label>

                    <label className="form__label" >Native Language

                        <Select options={options} 
                            styles={customStyles}/>

                        {/* <select className="form__dropdown">
                                <option value="undefined">Select Language:</option>
                                <option value="English">English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Mandarin">Mandarin</option>
                        </select> */}
                        {/* <input
                            type="text"
                            name="nativeLanguage"
                            value={this.props.demographics.demographics.nativeLanguage}
                            onChange={this.props.handleChange}
                            id="demographics" /> */}
                    </label>

            </section> 

                <div className="border-bottom-short"></div>

            <section>
                <label className="form__label__checkbox" >Consent
                
                    <div>
                        <div className="checkbox-container">
                            Signed
                            <label className="checkbox-label"> 
                                <input
                                    name="consent"
                                    value={true}
                                    onChange={this.props.handleChange}
                                    type="checkbox"/>
                                <span
                                 
                                 className="checkbox-custom rectangular"></span>
                            </label>
                        </div>
                        <div className="checkbox-container">
                            Unsigned
                            <label className="checkbox-label">
                                    <input
                                        name="consent"
                                        value={false}
                                        onChange={this.props.handleChange}
                                        type="checkbox" />
                                    <span className="checkbox-custom rectangular"></span>
                            </label>
                        </div>
                    </div>
                </label>

                    <label className="form__label__checkbox" >Dominant Hand
                        <div>
                            <div className="checkbox-container">
                                L
                            <label className="checkbox-label">
                                    <input type="checkbox" name="" id="" />
                                    <span className="checkbox-custom rectangular"></span>
                                </label>
                            </div>
                            <div className="checkbox-container">
                                R
                            <label className="checkbox-label">
                                    <input type="checkbox" name="" id="" />
                                    <span className="checkbox-custom rectangular"></span>
                                </label>
                            </div>
                        </div>
                    </label>

                    <label className="form__label__checkbox" >Sex
                         <div>
                            <div className="checkbox-container">
                                M
                            <label className="checkbox-label">
                                    <input type="checkbox" name="" id="" />
                                    <span className="checkbox-custom rectangular"></span>
                                </label>
                            </div>
                            <div className="checkbox-container">
                                F
                            <label className="checkbox-label">
                                    <input type="checkbox" name="" id="" />
                                    <span className="checkbox-custom rectangular"></span>
                                </label>
                            </div>
                        </div>
                    </label>

            </section>
                    <div className="border-bottom-short"></div>
                <section>
                    <label className="form__label__checkbox" >Language Dominance
                         <div>
                            <div className="checkbox-container">
                                L
                            <label className="checkbox-label">
                                    <input type="checkbox" name="" id="" />
                                    <span className="checkbox-custom rectangular"></span>
                                </label>
                            </div>
                            <div className="checkbox-container">
                                R
                            <label className="checkbox-label">
                                    <input type="checkbox" name="" id="" />
                                    <span className="checkbox-custom rectangular"></span>
                                </label>
                            </div>
                        </div>
                    </label>
                </section>


        </div>
        )
    }
}

export default DemographicsForm;
