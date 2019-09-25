import React from 'react';
import Select from 'react-select'
import '../../../css/form.scss'

class DemographicsForm extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const options = [
            { name: 'english', value: 'nativeLanguage' },
            { name: 'spanish', value: 'nativeLanguage' },
            { name: 'mandarin', value: 'nativeLanguage' },
        ];


        if (this.props.currentStep !== "demographics") {
            return null
        }
        return(
            <div className="patient-show-inner-card ">

            <h1 className="patient-show-inner-card__header">Demographics</h1>
            <div className='header-divider'></div>

                <section className='inner-card__section-grouping'>
                    <div className='inner-card__field-grouping'>
                        <div className='inner-card__field-label'>Research ID</div>
                        <input
                            className='inner-card__field-value'
                            type="text"
                            name="researchId"
                            placeholder="ECXX"
                            value={this.props.demographics.researchId}
                            onChange={this.props.handleChange}
                        />
                    </div>

                    <div className='inner-card__field-grouping'>
                        <div className='inner-card__field-label'>Date of Surgery</div>
                        <input
                            className='inner-card__field-value'
                            type="date"
                            name="dateOfSurgery"
                            value={this.props.demographics.dateOfSurgery}
                            onChange={this.props.handleChange}
                            id=""
                        />
                    </div>
            </section>
                <div className="border-bottom-short"></div>
                <section className='inner-card__section-grouping'>

                    <div className='inner-card__field-grouping'>
                        <div className='inner-card__field-label'>Birth Date</div>
                        <input
                            className='inner-card__field-value'
                            ttype="date"
                            name="birthDate"
                            value={this.props.demographics.demographics.birthDate}

                            value={this.props.demographics.demographics.birthDate}
                            onChange={this.props.handleChange}
                            id="demographics"
                        />
                    </div>

                    <div className='inner-card__field-grouping'>
                        <div className='inner-card__field-label'>Native Language</div>
                        <Select options={options} 
                            onChange={this.props.handleChange}/>
                    </div>

            </section> 

                <div className="border-bottom-short"></div>

                <section className='inner-card__section-grouping'>
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
