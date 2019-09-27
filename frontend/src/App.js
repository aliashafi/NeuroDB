import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/splash_page'
import CreatePatientContainer from './components/Patients/patient_create_form_container'
import PatientIndexContainer from './components/Patients/patient_index_container';
import PatientShowContainer from './components/Patients/patient_show_container';

import LoginFormContainer from "./components/Session/login_form_container";
import RegisterFormContainer from "./components/Session/register_form_container";

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/patient/create" component={CreatePatientContainer} />     
        <Route exact path="/patients" component={PatientIndexContainer} />
        <Route path='/show/:patientId' component={PatientShowContainer} />


        <Route path="/login" component={LoginFormContainer}/>

        <Route path="/register" component={RegisterFormContainer}/>




      </Switch>
    </div>
  );
}

export default App;
