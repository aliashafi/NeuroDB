import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
// import '../../css/deethree.scss';
import DemographicsPercentBarGraph from './demographics_percent_bar_graph';
import PieChart from './pie_chart';
import RadarChart from './radar_chart';
import BarGraph from './bar_graph';
import { fetchPatient } from '../../actions/patient_actions';

function Dashboard(props) {

    
    useEffect(() => {
        props.fetchPatients();
    }, []);

    const total = props.patients.length;
    function calcPercent(arr, item) {
        return arr.filter(el => el === item).length/total;
    }
    // Data prep for native langugage pie chart
    const languagesArr = props.patients.map(patient => patient.demographics.nativeLanguage);
    const distinctLang = languagesArr.filter((lang, idx, self) => self.indexOf(lang) === idx);
    const nativeLanguageData = distinctLang.map(lang => ({label: lang, value: calcPercent(languagesArr, lang)}));

    // Data prep for age group pie chart
    const ageArr = props.patients.map(patient => {
        const today = new Date(Date.now());
        const birth = new Date(patient.demographics.birthDate);
        return today.getFullYear() - birth.getFullYear();
    });
    const ageGroupArr = ageArr.map(age => {
        if (age < 20) return 10;
        if (age >= 20 && age <= 29) return 20;
        if (age >= 30 && age <= 39) return 30;
        if (age >= 40 && age <= 49) return 40;
        if (age >= 50 && age <= 59) return 50;
        if (age >= 60) return 60;
    });
    const distinctAgeGroup = ageGroupArr.filter((age, idx, self) => self.indexOf(age) === idx);
    const ageData = distinctAgeGroup.map(age => ({ label:(age < 60 && age > 19) ? `age ${age}-${age+9}` : (age >= 60) ? `age ${age}+` : `age < ${20}`, value: calcPercent(ageGroupArr, age) }));

    //data prep for the studies bar graph
    let studiesArr = props.patients.map(patient => patient.studies);

    studiesArr = studiesArr.flat();
    const distinctStudies = studiesArr.filter((study, idx, self) => self.indexOf(study) === idx);

    const studiesData = distinctStudies.map(study => ({label: study, value: studiesArr.filter(el => el === study).length}));
    console.log(studiesArr.filter(el => el === 'pain').length)

    function render() {
        if (props.patients.length) {
            return (
                <div className='dashboard-items-container'>
                    <div className='dashboard-item-wrap'>
                        <DemographicsPercentBarGraph 
                            patients={props.patients} />
                    </div>

                    <div className='dashboard-item-wrap'>
                        <PieChart 
                            patients={props.patients} 
                            title='Native Language' 
                            classSelector='language'
                            data={nativeLanguageData} />
                    </div>

                    <div className='dashboard-item-wrap'>
                        <PieChart 
                            patients={props.patients} 
                            title='Age Group' 
                            classSelector='age'
                            data={ageData} />
                    </div>

                    <div className='dashboard-item-wrap'>
                        <RadarChart 
                            patients={props.patients} />
                    </div>
                    
                    <div className='dashboard-item-wrap'>
                        <BarGraph 
                        patients={props.patients} 
                        data={studiesData} />
                    </div>
                </div>
            );

        } else {
            return null;
        }
    }
    return (
        <div>
            <div className='dashboard-page-title'>Statistics Dashboard</div>
           {render()}
        </div>
    );
}

export default Dashboard;